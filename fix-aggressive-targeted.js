const fs = require('fs');
const path = require('path');

// Function to recursively find all .md files in directories
function findAllMarkdownFiles(directories) {
    const allFiles = [];
    
    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            console.log(`⚠️  Directory not found: ${dir}`);
            continue;
        }
        
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isFile() && file.endsWith('.md')) {
                allFiles.push(fullPath);
            } else if (stat.isDirectory()) {
                // Recursively search subdirectories
                allFiles.push(...findAllMarkdownFiles([fullPath]));
            }
        }
    }
    
    return allFiles;
}

let totalFixedFiles = 0;
const fixes = [];

function fixFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let fixTypes = [];

        console.log(`Processing: ${filePath}`);

        // Fix 1: Replace ALL backslashes with forward slashes (most critical for MDX)
        const backslashCount = (content.match(/\\/g) || []).length;
        if (backslashCount > 0) {
            content = content.replace(/\\/g, '/');
            fixTypes.push(`Fixed ${backslashCount} backslashes`);
        }

        // Fix 2: Fix ampersands that aren't HTML entities
        const ampersandMatches = content.match(/&(?![a-zA-Z0-9]+;)/g);
        if (ampersandMatches) {
            content = content.replace(/&(?![a-zA-Z0-9]+;)/g, '&amp;');
            fixTypes.push(`Fixed ${ampersandMatches.length} unescaped ampersands`);
        }

        // Fix 3: Fix JSX-incompatible curly braces (common MDX issue)
        const invalidBraces = content.match(/\{[^}]*[<>&\\#$][^}]*\}/g);
        if (invalidBraces && invalidBraces.length > 0) {
            content = content.replace(/\{[^}]*[<>&\\#$][^}]*\}/g, '');
            fixTypes.push(`Removed ${invalidBraces.length} invalid JSX expressions`);
        }

        // Fix 4: Fix angle brackets in non-JSX contexts
        content = content.replace(/<(?![\/]?[a-zA-Z][^>]*>)/g, '&lt;');
        content = content.replace(/(?<!<[^>]*)>(?![^<]*<\/)/g, '&gt;');

        // Fix 5: Fix invalid HTML comments
        content = content.replace(/<!--([^>]*?)--([^>]*?)>/g, '<!--$1-->');

        // Fix 6: Remove invalid characters from potential JSX tags
        content = content.replace(/<([^>]*)[\\#$@%^&*]([^>]*)>/g, '<$1$2>');

        // Fix 7: Fix malformed URLs
        content = content.replace(/https?:\/\/\/+/g, (match) => {
            return match.includes('https') ? 'https://' : 'http://';
        });

        // Fix 8: Clean up multiple consecutive slashes
        content = content.replace(/\/\/+/g, '/');

        // Fix 9: Fix frontmatter issues (ensure proper YAML)
        if (content.startsWith('---')) {
            const frontmatterEnd = content.indexOf('---', 3);
            if (frontmatterEnd > -1) {
                const frontmatter = content.substring(0, frontmatterEnd + 3);
                const body = content.substring(frontmatterEnd + 3);
                
                // Fix YAML issues in frontmatter
                let fixedFrontmatter = frontmatter
                    .replace(/\\/g, '/')  // Fix backslashes in YAML
                    .replace(/:\s*&(?![a-zA-Z0-9]+;)/g, ': "&amp;"');  // Quote unescaped ampersands
                
                content = fixedFrontmatter + body;
            }
        }

        // Fix 10: Escape problematic characters in code blocks
        content = content.replace(/```([^`]+)```/g, (match, code) => {
            // Don't modify the code content, just ensure it's properly enclosed
            return match;
        });

        // Fix 11: Fix self-closing tags that might cause issues
        content = content.replace(/<([^>\/]+)\/>/g, '<$1 />');

        // Fix 12: Fix malformed image references
        content = content.replace(/!\[([^\]]*)\]\(([^)]*)\\/g, '![$1]($2/');

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
console.log('🔧 Finding all markdown files in the documentation...');
const allMarkdownFiles = findAllMarkdownFiles(['prod-sider', 'beta-sider', 'docs']);
console.log(`📄 Found ${allMarkdownFiles.length} markdown files to process`);

console.log('\n🚀 Starting comprehensive MDX fixes...\n');

// Process each markdown file
allMarkdownFiles.forEach(fixFile);

// Save the fix log
fs.writeFileSync('comprehensive-mdx-fixes-log.json', JSON.stringify(fixes, null, 2));

console.log(`\n📊 Summary:`);
console.log(`  Total files checked: ${allMarkdownFiles.length}`);
console.log(`  Files fixed: ${totalFixedFiles}`);
console.log(`  Fix log saved to: comprehensive-mdx-fixes-log.json`);

console.log(`\n🚀 Next steps:`);
console.log(`  1. Run: npm run build`);
console.log(`  2. Check for any remaining errors`);
console.log(`  3. If needed, manually fix remaining issues`);
