const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting aggressive MDX parsing fix...');

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

    // Fix 1: Remove duplicate frontmatter
    content = content.replace(/^---\s*\n([\s\S]*?)\n---\s*\n﻿?---\s*\n([\s\S]*?)\n---/m, (match, first, second) => {
        console.log(`  Fixing duplicate frontmatter in ${file}`);
        // Merge frontmatter, keeping the first one and adding unique items from second
        const firstLines = first.split('\n').filter(line => line.trim());
        const secondLines = second.split('\n').filter(line => line.trim());
        
        const merged = [...firstLines];
        secondLines.forEach(line => {
            const key = line.split(':')[0].trim();
            if (!firstLines.some(fl => fl.startsWith(key + ':'))) {
                merged.push(line);
            }
        });
        
        return '---\n' + merged.join('\n') + '\n---';
    });

    // Fix 2: Fix problematic escape sequences in markdown links
    content = content.replace(/\\\\\\{:target="_blank"\\\\\\}/g, '{:target="_blank"}');
    content = content.replace(/\\{:target="_blank"\\}/g, '{:target="_blank"}');
    
    // Fix 3: Fix malformed HTML comments with escape sequences
    content = content.replace(/\[<!-- Missing image:.*?-- &amp;amp; gt;\]/g, (match) => {
        console.log(`  Fixing malformed comment: ${match.substring(0, 50)}...`);
        return '{/* Missing image comment removed */}';
    });

    // Fix 4: Fix other problematic escape sequences
    content = content.replace(/&amp;amp;/g, '&amp;');
    content = content.replace(/&amp;gt;/g, '&gt;');
    content = content.replace(/&amp;lt;/g, '&lt;');

    // Fix 5: Fix unclosed or malformed JSX expressions
    content = content.replace(/\{[^}]*(?=\s*$)/gm, (match) => {
        console.log(`  Fixing unclosed expression: ${match}`);
        return match + '}';
    });

    // Fix 6: Fix problematic character sequences that break MDX
    content = content.replace(/[\u200B-\u200D\uFEFF]/g, ''); // Remove zero-width characters
    content = content.replace(/\uFEFF/g, ''); // Remove BOM characters

    // Fix 7: Fix frontmatter with invalid YAML
    content = content.replace(/^---\n([\s\S]*?)\n---/m, (match, frontmatter) => {
        try {
            // Fix common YAML issues
            let fixed = frontmatter
                .replace(/^\s*﻿/gm, '') // Remove BOM at line start
                .replace(/:\s*$/gm, ': ""') // Fix empty values
                .replace(/([^:]\s*):\s*([^"\n]*[^\s"\n])\s*$/gm, '$1: "$2"') // Quote unquoted strings
                .replace(/: "([^"]*)""/g, ': "$1"'); // Fix double quotes
            
            return '---\n' + fixed + '\n---';
        } catch (e) {
            return match;
        }
    });

    // Fix 8: Fix markdown table formatting issues
    content = content.replace(/\|\s*\|\s*\|/g, '| | |');
    content = content.replace(/\|([^|\n]*)\|([^|\n]*)\|([^|\n]*)\|/g, (match, col1, col2, col3) => {
        return `| ${col1.trim()} | ${col2.trim()} | ${col3.trim()} |`;
    });

    // Fix 9: Fix problematic HTML tags
    content = content.replace(/<([^>]*?)&([^>]*?)>/g, (match, before, after) => {
        if (after.match(/^(amp|lt|gt|quot|apos);/)) {
            return match;
        }
        return `<${before}&amp;${after}>`;
    });

    // Fix 10: Fix broken markdown links
    content = content.replace(/\[([^\]]*)\]\([^)]*$/gm, (match, text) => {
        console.log(`  Fixing broken link: ${match}`);
        return `[${text}](#)`;
    });

    // Fix 11: Fix JSX component syntax issues
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)[^>]*[^/>]$/gm, (match) => {
        console.log(`  Fixing unclosed JSX component: ${match}`);
        return match + ' />';
    });

    // Fix 12: Remove or fix problematic character entities
    content = content.replace(/&([a-zA-Z0-9]+);/g, (match, entity) => {
        const validEntities = ['amp', 'lt', 'gt', 'quot', 'apos', 'nbsp', 'ndash', 'mdash'];
        if (!validEntities.includes(entity)) {
            console.log(`  Fixing invalid entity: ${match}`);
            return `&amp;${entity};`;
        }
        return match;
    });

    // Fix 13: Normalize line endings and remove excessive whitespace
    content = content.replace(/\r\n/g, '\n');
    content = content.replace(/\n{4,}/g, '\n\n\n');
    content = content.replace(/[ \t]+$/gm, ''); // Remove trailing whitespace

    // Check if content changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        totalFixedFiles++;
        fileFixed = true;
        fixes.push(`${file}: Fixed aggressive MDX parsing issues`);
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

fs.writeFileSync(path.join(__dirname, 'aggressive-mdx-fixes-log.json'), JSON.stringify(backupInfo, null, 2));
console.log('\nFix log saved to: aggressive-mdx-fixes-log.json');
console.log('\nDone! Try building again.');
