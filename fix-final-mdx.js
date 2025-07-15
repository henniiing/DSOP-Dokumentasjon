const fs = require('fs');
const path = require('path');

function findAllMarkdownFiles(directories) {
    const allFiles = [];
    
    for (const dir of directories) {
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir, { recursive: true });
            for (const file of files) {
                if (file.endsWith('.md')) {
                    allFiles.push(path.join(dir, file));
                }
            }
        }
    }
    
    return allFiles;
}

let totalFixedFiles = 0;
const fixes = [];

function fixFinalFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let fixTypes = [];

        console.log(`Processing: ${filePath}`);

        // Fix 1: Remove ALL curly brace expressions (they're causing acorn errors)
        const curlyBraceMatches = content.match(/\{[^}]*\}/g);
        if (curlyBraceMatches) {
            content = content.replace(/\{[^}]*\}/g, '');
            fixTypes.push(`Removed ${curlyBraceMatches.length} JSX expressions`);
        }

        // Fix 2: Fix malformed HTML tags with invalid characters
        // Remove any tag that has special characters in the tag name
        content = content.replace(/<[^a-zA-Z/>][^>]*>/g, '');
        content = content.replace(/<\/[^a-zA-Z>][^>]*>/g, '');
        
        // Fix specific problematic tag patterns
        content = content.replace(/<uTrinn[^>]*>/g, '<u>');
        content = content.replace(/<\/uTrinn>/g, '</u>');
        
        // Fix 3: Remove tags with invalid attribute characters
        content = content.replace(/<([a-zA-Z]+)[^>]*[<>&"']+[^>]*>/g, '<$1>');
        content = content.replace(/<([a-zA-Z]+)[^>]*[\\.#$@%^*=;:"',]+[^>]*>/g, '<$1>');

        // Fix 4: Fix self-closing BR tags
        content = content.replace(/<br>/g, '<br />');
        content = content.replace(/<br\s+>/g, '<br />');

        // Fix 5: Close unclosed tags before paragraph/section ends
        content = content.replace(/<(mark|strong|em|u|b|i)>([^<]*?)(?=\n\n|\n#|\n\*|\n-|\n\||$)/gm, '<$1>$2</$1>');

        // Fix 6: Remove problematic image references
        content = content.replace(/!\[[^\]]*\]\([^)]*images\/[^)]*\.png[^)]*\)/g, '<!-- Image reference removed -->');

        // Fix 7: Clean up malformed HTML tags with unexpected characters
        content = content.replace(/<([a-zA-Z]+)[^>]*<[^>]*>/g, '<$1>');
        content = content.replace(/<([a-zA-Z]+)[^>]*\.[^>]*>/g, '<$1>');
        content = content.replace(/<([a-zA-Z]+)[^>]*\d+[^>]*>/g, '<$1>');

        // Fix 8: Remove any remaining JSX-like syntax that's causing issues
        content = content.replace(/<([a-zA-Z]+)\s+[^a-zA-Z\s=][^>]*>/g, '<$1>');

        // Fix 9: Fix end-of-file issues in tag names
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            // Fix incomplete tags at end of lines
            lines[i] = lines[i].replace(/<([a-zA-Z]+)[^>]*$/g, '');
            // Fix tags with invalid characters
            lines[i] = lines[i].replace(/<([a-zA-Z]+)[^>]*[<>&"'\.#$@%^*=;:,]+[^>]*>/g, '<$1>');
        }
        content = lines.join('\n');

        // Fix 10: Remove any remaining problematic HTML constructs
        content = content.replace(/<!--[^>]*--([^>]*?)>/g, '<!-- Comment fixed -->');
        
        // Fix 11: Clean up table issues
        content = content.replace(/<banknavn[^>]*>/g, '');
        content = content.replace(/<\/banknavn>/g, '');

        // Fix 12: Handle specific attribute issues
        content = content.replace(/([a-zA-Z]+)=[^"\s>]*[<>&"']+[^"\s>]*/g, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            totalFixedFiles++;
            fixes.push({
                file: filePath,
                fixes: fixTypes,
                fixesApplied: true
            });
            console.log(`  ✅ Fixed: ${fixTypes.join(', ')}`);
        } else {
            console.log(`  ➖ No changes needed`);
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        fixes.push({
            file: filePath,
            error: error.message
        });
    }
}

// Main execution
console.log('🔧 Finding all markdown files for final fixes...');
const allMarkdownFiles = findAllMarkdownFiles(['prod-sider', 'beta-sider', 'docs']);
console.log(`📄 Found ${allMarkdownFiles.length} markdown files to process`);

console.log('\n🚀 Starting final comprehensive MDX fixes...\n');

allMarkdownFiles.forEach(fixFinalFile);

// Save the fix log
fs.writeFileSync('final-mdx-fixes-log.json', JSON.stringify(fixes, null, 2));

console.log(`\n📊 Summary:`);
console.log(`  Total files checked: ${allMarkdownFiles.length}`);
console.log(`  Files fixed: ${totalFixedFiles}`);
console.log(`  Fix log saved to: final-mdx-fixes-log.json`);

console.log(`\n🚀 Next steps:`);
console.log(`  1. Run: npm run build`);
console.log(`  2. Check if build succeeds`);
