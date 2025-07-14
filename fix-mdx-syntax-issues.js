const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixMDXSyntaxIssues() {
    console.log('Starting MDX syntax issues fix...');
    
    const fixLog = [];
    let totalFixed = 0;
    
    // Find all markdown files
    const markdownFiles = glob.sync('**/*.md', { 
        ignore: ['node_modules/**', '.docusaurus/**', 'build/**'],
        absolute: true 
    });
    
    console.log(`Found ${markdownFiles.length} markdown files to check`);
    
    markdownFiles.forEach(filePath => {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            let newContent = content;
            let modified = false;
            const changes = [];
            
            // Fix 1: Unexpected character `&` after name - encode & in HTML tags
            const ampersandFix = newContent.replace(/<([^>]*?)\s+([^=\s>]*?)&([^=\s>]*?)\s*([^>]*?)>/g, '<$1 $2&amp;$3 $4>');
            if (ampersandFix !== newContent) {
                newContent = ampersandFix;
                modified = true;
                changes.push('Fixed & character in HTML tags');
            }
            
            // Fix 2: Unexpected character `§` after attribute name - encode § in HTML tags
            const sectionFix = newContent.replace(/<([^>]*?)\s+([^=\s>]*?)§([^=\s>]*?)\s*([^>]*?)>/g, '<$1 $2&sect;$3 $4>');
            if (sectionFix !== newContent) {
                newContent = sectionFix;
                modified = true;
                changes.push('Fixed § character in HTML tags');
            }
            
            // Fix 3: Unexpected closing slash `/` in tag - fix malformed self-closing tags
            const closingSlashFix = newContent.replace(/<([^/>]+?)(\s+[^>]*?)\/>/g, '<$1$2 />');
            if (closingSlashFix !== newContent) {
                newContent = closingSlashFix;
                modified = true;
                changes.push('Fixed malformed self-closing tags');
            }
            
            // Fix 4: Unexpected end of file in attribute value - fix unclosed quotes
            const unclosedQuoteFix = newContent.replace(/="([^"]*?)$/gm, '="$1"');
            if (unclosedQuoteFix !== newContent) {
                newContent = unclosedQuoteFix;
                modified = true;
                changes.push('Fixed unclosed quotes in attributes');
            }
            
            // Fix 5: Unexpected character `<` in attribute name - escape < in attribute values
            const lessThanFix = newContent.replace(/="([^"]*?)<([^"]*?)"/g, '="$1&lt;$2"');
            if (lessThanFix !== newContent) {
                newContent = lessThanFix;
                modified = true;
                changes.push('Fixed < character in attribute values');
            }
            
            // Fix 6: Expected a closing tag for `<mark>` - fix unclosed mark tags
            const unclosedMarkFix = newContent.replace(/<mark>([^<]*?)(?=\n\n|\n#|\n-|\n\*|$)/g, '<mark>$1</mark>');
            if (unclosedMarkFix !== newContent) {
                newContent = unclosedMarkFix;
                modified = true;
                changes.push('Fixed unclosed <mark> tags');
            }
            
            // Fix 7: Could not parse expression with acorn - fix malformed JSX expressions
            // Remove or escape curly braces that aren't valid JSX
            const acornFix = newContent.replace(/\{([^}]*?)\}/g, (match, content) => {
                // If it looks like a valid JS expression, keep it
                if (/^[a-zA-Z_$][a-zA-Z0-9_$]*(\.[a-zA-Z_$][a-zA-Z0-9_$]*)*$/.test(content.trim()) ||
                    /^["'][^"']*["']$/.test(content.trim()) ||
                    /^\d+$/.test(content.trim())) {
                    return match;
                }
                // Otherwise, escape the braces
                return `\\{${content}\\}`;
            });
            if (acornFix !== newContent) {
                newContent = acornFix;
                modified = true;
                changes.push('Fixed malformed JSX expressions');
            }
            
            // Fix 8: Unexpected character `/` before local attribute name
            const slashAttrFix = newContent.replace(/(<[^>]*?\s+[^=\s>]*?)\/([^=\s>]*?\s*[^>]*?>)/g, '$1\\/$2');
            if (slashAttrFix !== newContent) {
                newContent = slashAttrFix;
                modified = true;
                changes.push('Fixed / character in attribute names');
            }
            
            // Fix 9: Clean up any remaining malformed HTML tags
            // Ensure proper spacing around attributes
            const spacingFix = newContent.replace(/<(\w+)([^>]*?)>/g, (match, tagName, attrs) => {
                if (!attrs.trim()) return `<${tagName}>`;
                
                // Ensure proper spacing around attributes
                const cleanAttrs = attrs
                    .replace(/\s+/g, ' ')  // Normalize whitespace
                    .replace(/\s*=\s*/g, '=')  // Remove spaces around =
                    .replace(/([^=\s])\s+([^=\s])/g, '$1 $2')  // Ensure single space between attributes
                    .trim();
                
                return `<${tagName} ${cleanAttrs}>`;
            });
            if (spacingFix !== newContent) {
                newContent = spacingFix;
                modified = true;
                changes.push('Fixed HTML tag spacing');
            }
            
            // Fix 10: Handle special characters in content that might be mistaken for JSX
            // Escape common problematic characters
            const specialCharFix = newContent.replace(/([^<]|^)([&§©®™])/g, (match, prefix, char) => {
                const entities = {
                    '&': '&amp;',
                    '§': '&sect;',
                    '©': '&copy;',
                    '®': '&reg;',
                    '™': '&trade;'
                };
                return prefix + (entities[char] || char);
            });
            if (specialCharFix !== newContent) {
                newContent = specialCharFix;
                modified = true;
                changes.push('Fixed special characters');
            }
            
            if (modified) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                totalFixed++;
                
                fixLog.push({
                    file: path.relative(process.cwd(), filePath),
                    changes: changes,
                    timestamp: new Date().toISOString()
                });
                
                console.log(`Fixed MDX issues in: ${path.relative(process.cwd(), filePath)} - ${changes.join(', ')}`);
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    });
    
    // Save the log
    fs.writeFileSync('mdx-syntax-fixes-log.json', JSON.stringify(fixLog, null, 2));
    
    console.log(`\nMDX syntax fixes complete!`);
    console.log(`Files processed: ${markdownFiles.length}`);
    console.log(`Files fixed: ${totalFixed}`);
    console.log('Log saved to: mdx-syntax-fixes-log.json');
}

// Run the fix
fixMDXSyntaxIssues();
