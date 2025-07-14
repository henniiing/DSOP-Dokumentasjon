const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting VFileMessage error fixes...');

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

    // Fix 1: Handle remaining XML/HTML entity issues more aggressively
    content = content.replace(/&([a-zA-Z0-9]+);(?![a-zA-Z0-9])/g, (match, entity) => {
        const validEntities = ['amp', 'lt', 'gt', 'quot', 'apos', 'nbsp', 'copy', 'reg', 'trade'];
        if (!validEntities.includes(entity)) {
            return `&amp;${entity};`;
        }
        return match;
    });

    // Fix 2: Handle problematic Unicode characters that might cause parsing issues
    content = content.replace(/[\u2018\u2019]/g, "'"); // Smart quotes to regular quotes
    content = content.replace(/[\u201C\u201D]/g, '"'); // Smart double quotes
    content = content.replace(/[\u2013\u2014]/g, '-'); // En/em dashes to regular dash
    content = content.replace(/[\u2026]/g, '...'); // Ellipsis

    // Fix 3: Handle JSX-like syntax more aggressively
    content = content.replace(/<([^>]*?)\s+([^=>\s]+)=([^>\s]+)([^>]*?)>/g, (match, before, attr, value, after) => {
        // If value is not quoted, quote it
        if (!value.startsWith('"') && !value.startsWith("'")) {
            return `<${before} ${attr}="${value}"${after}>`;
        }
        return match;
    });

    // Fix 4: Handle malformed table syntax
    content = content.replace(/\|([^|\n]*?)\s*&([^|\n]*?)\|/g, (match, before, after) => {
        return `|${before}&amp;${after}|`;
    });

    // Fix 5: Fix problematic markdown links with unescaped characters
    content = content.replace(/\[([^\]]*?)\]\(([^)]*?)[&]([^)]*?)\)/g, (match, text, urlBefore, urlAfter) => {
        return `[${text}](${urlBefore}&amp;${urlAfter})`;
    });

    // Fix 6: Handle problematic code blocks or inline code
    content = content.replace(/`([^`]*?)&([^`]*?)`/g, (match, before, after) => {
        return `\`${before}&amp;${after}\``;
    });

    // Fix 7: Fix remaining HTML tag issues with better pattern matching
    content = content.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*?)>/g, (match, slash, tagName, attributes) => {
        // Clean up attributes
        let cleanAttributes = attributes.replace(/&(?![a-zA-Z0-9]+;)/g, '&amp;');
        return `<${slash}${tagName}${cleanAttributes ? ' ' + cleanAttributes : ''}>`;
    });

    // Fix 8: Handle problematic frontmatter or YAML-like content
    content = content.replace(/^---\n([\s\S]*?)\n---\n/m, (match, frontmatter) => {
        let cleanFrontmatter = frontmatter.replace(/&(?![a-zA-Z0-9]+;)/g, '&amp;');
        return `---\n${cleanFrontmatter}\n---\n`;
    });

    // Fix 9: Handle any remaining unescaped angle brackets in text
    content = content.replace(/(?<!<[^>]*?)(?<!`[^`]*?)<(?![a-zA-Z/!])/g, '&lt;');
    content = content.replace(/(?<!<[^>]*?)(?<!`[^`]*?)>(?![^<]*?>)/g, '&gt;');

    // Fix 10: Clean up any double-escaped entities
    content = content.replace(/&amp;(amp|lt|gt|quot|apos);/g, '&$1;');

    // Fix 11: Handle Norwegian characters that might cause encoding issues
    content = content.replace(/Ã¥/g, 'å');
    content = content.replace(/Ã¦/g, 'æ');
    content = content.replace(/Ã¸/g, 'ø');
    content = content.replace(/Ã…/g, 'Å');
    content = content.replace(/Ã†/g, 'Æ');
    content = content.replace(/Ã˜/g, 'Ø');

    // Fix 12: Handle any remaining problematic JSX expressions
    content = content.replace(/\{([^}]*?[&<>][^}]*?)\}/g, (match, expression) => {
        // Escape the entire expression if it contains problematic characters
        return `\\{${expression}\\}`;
    });

    // Check if content changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        totalFixedFiles++;
        fileFixed = true;
        
        // Log what was fixed
        fixes.push(`${file}: Applied VFileMessage error fixes`);
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
    fixes: fixes,
    description: 'VFileMessage error fixes - targeted fixes for MDX parsing issues'
};

fs.writeFileSync(path.join(__dirname, 'vfile-fixes-log.json'), JSON.stringify(backupInfo, null, 2));
console.log('\nFix log saved to: vfile-fixes-log.json');
console.log('\nDone! Please try building again.');
