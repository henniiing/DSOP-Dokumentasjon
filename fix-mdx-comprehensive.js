const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting comprehensive MDX fixes...');

// Find all markdown files
const markdownFiles = glob.sync('**/*.md', {
    cwd: __dirname,
    ignore: ['node_modules/**', '.git/**']
});

console.log(`Found ${markdownFiles.length} markdown files to process`);

let totalFixedFiles = 0;
const fixes = [];

markdownFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixed = false;

    console.log(`Processing: ${file}`);

    // Fix 1: Replace HTML entities in tag names and attributes
    // Fix &lt; and &gt; in tags
    content = content.replace(/&lt;(\s*\/?\s*[a-zA-Z][^>]*?)&gt;/g, '<$1>');
    
    // Fix & in tag names and attributes
    content = content.replace(/<([^>]*?)&([^>]*?)>/g, (match, before, after) => {
        // Don't fix if it's already a valid HTML entity
        if (after.match(/^(amp|lt|gt|quot|apos);/)) {
            return match;
        }
        return `<${before}&amp;${after}>`;
    });

    // Fix 2: Replace invalid HTML comments with MDX comments
    content = content.replace(/<!--([^>]*?)-->/g, '{/* $1 */}');
    content = content.replace(/<![^>]*>/g, (match) => {
        const commentText = match.replace(/^<!/, '').replace(/>$/, '');
        return `{/* ${commentText} */}`;
    });

    // Fix 3: Fix acorn parsing errors - escape curly braces in text
    content = content.replace(/\{([^}]*?)\}/g, (match, inner) => {
        // Skip if it's already a valid MDX expression or comment
        if (inner.startsWith('/*') || inner.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*(\.[a-zA-Z_$][a-zA-Z0-9_$]*)*$/)) {
            return match;
        }
        // If it contains special characters that would break acorn, escape it
        if (inner.match(/[&<>'"]/)) {
            return `\\{${inner}\\}`;
        }
        return match;
    });

    // Fix 4: Fix malformed self-closing tags
    content = content.replace(/<([^>]*?)\/&([^>]*?)>/g, '<$1/&amp;$2>');
    content = content.replace(/<([^>]*?)\s+\/\s*&([^>]*?)>/g, '<$1 />&amp;$2');

    // Fix 5: Fix line breaks in tables (common issue)
    content = content.replace(/&lt;br \/&gt;/g, '<br />');
    content = content.replace(/&lt;br\/&gt;/g, '<br/>');
    content = content.replace(/&lt;br&gt;/g, '<br/>');

    // Fix 6: Fix common HTML entities
    const htmlEntities = {
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&quot;': '"',
        '&apos;': "'"
    };

    // Only replace entities that are not inside valid HTML tags
    content = content.replace(/&(lt|gt|amp|quot|apos);/g, (match, entity) => {
        // Check if we're inside a tag
        const beforeMatch = content.substring(0, content.indexOf(match));
        const lastOpenTag = beforeMatch.lastIndexOf('<');
        const lastCloseTag = beforeMatch.lastIndexOf('>');
        
        if (lastOpenTag > lastCloseTag) {
            // We're inside a tag, keep the entity
            return match;
        }
        
        // We're in text content, convert the entity
        return htmlEntities[match] || match;
    });

    // Fix 7: Fix malformed image paths
    content = content.replace(/!\[([^\]]*)\]\(([^)]*)\)/g, (match, alt, src) => {
        // Fix relative paths that might be incorrect
        if (src.startsWith('prod-sider/images/') && !file.startsWith('prod-sider/')) {
            const newSrc = src.replace('prod-sider/images/', 'images/');
            return `![${alt}](${newSrc})`;
        }
        return match;
    });

    // Fix 8: Fix JSX-like syntax issues
    content = content.replace(/<(\w+)([^>]*?)&([^>]*?)>/g, (match, tagName, before, after) => {
        // If it's a known HTML tag, fix the ampersand
        const htmlTags = ['div', 'span', 'p', 'br', 'img', 'a', 'table', 'tr', 'td', 'th'];
        if (htmlTags.includes(tagName.toLowerCase())) {
            return `<${tagName}${before}&amp;${after}>`;
        }
        return match;
    });

    // Check if content changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        totalFixedFiles++;
        fileFixed = true;
        
        // Log what was fixed
        if (originalContent.includes('&lt;') || originalContent.includes('&gt;')) {
            fixes.push(`${file}: Fixed HTML entities`);
        }
        if (originalContent.includes('<!--') || originalContent.includes('<![')) {
            fixes.push(`${file}: Fixed HTML comments`);
        }
        if (originalContent.match(/<[^>]*?&[^>]*?>/)) {
            fixes.push(`${file}: Fixed ampersands in tags`);
        }
    }

    if (!fileFixed) {
        console.log(`   No changes needed for: ${file}`);
    }
});

console.log('\n=== Summary ===');
console.log(`Total files processed: ${markdownFiles.length}`);
console.log(`Files fixed: ${totalFixedFiles}`);
console.log('\nFixes applied:');
fixes.forEach(fix => console.log(`  - ${fix}`));

// Create a backup info file
const backupInfo = {
    timestamp: new Date().toISOString(),
    totalFiles: markdownFiles.length,
    fixedFiles: totalFixedFiles,
    fixes: fixes
};

fs.writeFileSync(path.join(__dirname, 'mdx-fixes-log.json'), JSON.stringify(backupInfo, null, 2));
console.log('\nFix log saved to: mdx-fixes-log.json');
console.log('\nDone! You should now be able to build your Docusaurus project.');
