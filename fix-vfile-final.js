const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting final VFileMessage MDX fixes...');

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

    // Fix 1: Remove or fix problematic JSX expressions
    // Fix unclosed curly braces or malformed expressions
    content = content.replace(/\{[^}]*$/gm, (match) => {
        console.log(`  Fixing unclosed brace: ${match.substring(0, 50)}...`);
        return match + '}';
    });

    // Fix 2: Fix malformed JSX components
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)[^>]*>/g, (match, componentName) => {
        // If it's not properly closed, try to fix it
        if (!match.endsWith('/>') && !match.endsWith('>')) {
            return match + '>';
        }
        return match;
    });

    // Fix 3: Fix HTML entities that break MDX parsing
    content = content.replace(/&([a-zA-Z]+);/g, (match, entity) => {
        const validEntities = ['amp', 'lt', 'gt', 'quot', 'apos', 'nbsp'];
        if (!validEntities.includes(entity)) {
            console.log(`  Fixing invalid entity: ${match}`);
            return `&amp;${entity};`;
        }
        return match;
    });

    // Fix 4: Fix malformed HTML comments that weren't caught before
    content = content.replace(/<!--[^>]*>/g, (match) => {
        if (!match.endsWith('-->')) {
            console.log(`  Fixing malformed comment: ${match}`);
            return `{/* ${match.replace(/<!--/, '').replace(/>$/, '')} */}`;
        }
        return match;
    });

    // Fix 5: Fix self-closing tags with spaces
    content = content.replace(/<([a-zA-Z]+)\s+\/>/g, '<$1 />');

    // Fix 6: Fix ampersands in URLs and text
    content = content.replace(/([^&])&([^&;\s<>])/g, '$1&amp;$2');

    // Fix 7: Fix malformed table syntax
    content = content.replace(/\|\s*\|\s*\|/g, '| | |');
    content = content.replace(/\|([^|\n]*)\|([^|\n]*)\|([^|\n]*)\|/g, (match, col1, col2, col3) => {
        return `| ${col1.trim()} | ${col2.trim()} | ${col3.trim()} |`;
    });

    // Fix 8: Fix broken markdown links
    content = content.replace(/\[([^\]]*)\]\([^)]*$/gm, (match, text) => {
        console.log(`  Fixing broken link: ${match}`);
        return `[${text}](#)`;
    });

    // Fix 9: Fix line ending issues that can cause MDX problems
    content = content.replace(/\r\n/g, '\n'); // Normalize line endings
    content = content.replace(/\n{3,}/g, '\n\n'); // Remove excessive newlines

    // Fix 10: Fix code blocks that might be interfering
    content = content.replace(/```([^`]*?)```/gs, (match, code) => {
        // Ensure code blocks are properly closed
        if (!code.includes('\n')) {
            return match; // Single line, probably fine
        }
        return '```\n' + code.trim() + '\n```';
    });

    // Fix 11: Remove or fix any remaining problematic characters
    content = content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ''); // Remove control characters

    // Fix 12: Fix frontmatter issues
    content = content.replace(/^---\n(.*?)\n---/s, (match, frontmatter) => {
        // Ensure frontmatter is valid YAML
        try {
            const lines = frontmatter.split('\n');
            const fixedLines = lines.map(line => {
                if (line.includes(':') && !line.match(/^\s*#/)) {
                    const [key, ...valueParts] = line.split(':');
                    const value = valueParts.join(':').trim();
                    if (value && !value.startsWith('"') && !value.startsWith("'") && value.includes('"')) {
                        return `${key}: "${value.replace(/"/g, '\\"')}"`;
                    }
                }
                return line;
            });
            return '---\n' + fixedLines.join('\n') + '\n---';
        } catch (e) {
            return match;
        }
    });

    // Check if content changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        totalFixedFiles++;
        fileFixed = true;
        fixes.push(`${file}: Fixed VFileMessage issues`);
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

fs.writeFileSync(path.join(__dirname, 'vfile-final-fixes-log.json'), JSON.stringify(backupInfo, null, 2));
console.log('\nFix log saved to: vfile-final-fixes-log.json');
console.log('\nDone! Try building again.');
