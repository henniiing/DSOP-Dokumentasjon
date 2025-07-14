const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting targeted MDX fixes for remaining issues...');

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

    // Fix 1: More aggressive HTML entity fixes
    content = content.replace(/&lt;\s*br\s*\/?\s*&gt;/gi, '<br />');
    content = content.replace(/&lt;\s*br\s*&gt;/gi, '<br />');
    
    // Fix 2: Fix malformed self-closing tags with ampersands
    content = content.replace(/<([^>]*?)\s*\/\s*&/g, '<$1 /> &');
    content = content.replace(/<([^>]*?)\/&([^>]*?)>/g, '<$1/> &$2');
    
    // Fix 3: Fix expressions with curly braces that break acorn parser
    content = content.replace(/\{([^}]*?[&<>'"{}][^}]*?)\}/g, (match, inner) => {
        // Skip if it's a valid MDX comment
        if (inner.startsWith('/*') && inner.endsWith('*/')) {
            return match;
        }
        // Escape problematic characters in expressions
        return `\\{${inner}\\}`;
    });

    // Fix 4: Fix ampersands in URLs and attributes
    content = content.replace(/(<[^>]*?href\s*=\s*["'][^"']*?)&([^"']*?["'][^>]*?>)/g, '$1&amp;$2');
    content = content.replace(/(<[^>]*?src\s*=\s*["'][^"']*?)&([^"']*?["'][^>]*?>)/g, '$1&amp;$2');
    
    // Fix 5: Fix specific patterns that cause "unexpected character" errors
    content = content.replace(/(<[^>]*?)\s+&\s+([^>]*?>)/g, '$1 &amp; $2');
    content = content.replace(/(<[^>]*?)\s*&\s*([a-zA-Z])/g, '$1 &amp; $2');
    
    // Fix 6: Fix HTML comments that weren't caught before
    content = content.replace(/<!--([^-]|(-(?!->)))*-->/g, (match, p1) => {
        const commentText = match.replace(/^<!--\s*/, '').replace(/\s*-->$/, '');
        return `{/* ${commentText} */}`;
    });
    
    // Fix 7: Fix DOCTYPE and other HTML declarations
    content = content.replace(/<!DOCTYPE[^>]*>/gi, '');
    content = content.replace(/<!\[CDATA\[[^\]]*\]\]>/gi, '');
    
    // Fix 8: Fix malformed JSX attributes
    content = content.replace(/(<[^>]*?)\s+&\s*([a-zA-Z][^>]*?>)/g, '$1 &amp;$2');
    
    // Fix 9: Fix specific problematic patterns
    content = content.replace(/\s+\/\s*&/g, ' /> &');
    content = content.replace(/\/&([a-zA-Z])/g, '/> &$1');
    
    // Fix 10: Escape standalone ampersands that aren't part of entities
    content = content.replace(/&(?![a-zA-Z]+;|#[0-9]+;|#x[0-9a-fA-F]+;)/g, '&amp;');
    
    // Fix 11: Fix table cell content with HTML entities
    content = content.replace(/(\|[^|]*?)&lt;br\s*\/?\s*&gt;([^|]*?\|)/g, '$1<br />$2');
    
    // Fix 12: Clean up any remaining problematic HTML-like patterns
    content = content.replace(/<([^>]*?)\s*&\s*([^>]*?)>/g, (match, before, after) => {
        // Check if this looks like a valid HTML tag
        if (before.match(/^[a-zA-Z][a-zA-Z0-9]*(\s+[^=]*="[^"]*")*\s*$/)) {
            return `<${before}> &${after}`;
        }
        // Otherwise, escape the ampersand
        return `<${before} &amp; ${after}>`;
    });

    // Fix 13: Fix any remaining curly brace expressions that could break
    content = content.replace(/\{[^}]*[&<>'"\/\\][^}]*\}/g, (match) => {
        // Skip MDX comments
        if (match.match(/^\{\/\*.*\*\/\}$/)) {
            return match;
        }
        // Escape the braces
        const inner = match.slice(1, -1);
        return `\\{${inner}\\}`;
    });

    // Fix 14: Handle any remaining problematic patterns
    content = content.replace(/!\[([^\]]*)\]\(([^)]*&[^)]*)\)/g, (match, alt, url) => {
        // Fix ampersands in image URLs
        const fixedUrl = url.replace(/&/g, '&amp;');
        return `![${alt}](${fixedUrl})`;
    });

    // Check if content changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        totalFixedFiles++;
        fileFixed = true;
        fixes.push(`${file}: Applied additional MDX fixes`);
    }

    if (!fileFixed) {
        console.log(`   No additional changes needed for: ${file}`);
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

fs.writeFileSync(path.join(__dirname, 'additional-mdx-fixes-log.json'), JSON.stringify(backupInfo, null, 2));
console.log('\nAdditional fix log saved to: additional-mdx-fixes-log.json');
console.log('\nDone! Try building again.');
