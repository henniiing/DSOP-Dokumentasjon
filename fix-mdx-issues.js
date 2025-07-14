const fs = require('fs');
const path = require('path');

function fixMDXIssues() {
    console.log('Starting to fix remaining MDX issues...');
    
    const directories = ['prod-sider', 'beta-sider'];
    
    directories.forEach(dir => {
        if (!fs.existsSync(dir)) {
            console.log(`Directory ${dir} does not exist, skipping...`);
            return;
        }
        
        const files = fs.readdirSync(dir).filter(file => file.endsWith('.md'));
        
        files.forEach(file => {
            const filePath = path.join(dir, file);
            console.log(`Processing: ${filePath}`);
            
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = false;
                
                // Fix unclosed mark tags
                const markRegex = /<mark(?:\s[^>]*)?>([^<]*?)(?:<\/mark>)?(?=\s|$|[.,!?;])/g;
                const newContent1 = content.replace(markRegex, '<mark>$1</mark>');
                if (newContent1 !== content) {
                    content = newContent1;
                    modified = true;
                }
                
                // Fix unclosed li tags
                const liRegex = /<li(?:\s[^>]*)?>([^<]*?)(?:<\/li>)?(?=\s*(?:<li|$|\n\n))/g;
                const newContent2 = content.replace(liRegex, '<li>$1</li>');
                if (newContent2 !== content) {
                    content = newContent2;
                    modified = true;
                }
                
                // Fix unexpected closing slashes in tags - remove self-closing slashes from non-void elements
                const unexpectedSlashRegex = /<(mark|li|div|span|p|h[1-6]|strong|em)([^>]*?)\s*\/>/g;
                const newContent3 = content.replace(unexpectedSlashRegex, '<$1$2></$1>');
                if (newContent3 !== content) {
                    content = newContent3;
                    modified = true;
                }
                
                // Fix problematic characters that cause MDX parsing issues
                // Replace certain characters that can break MDX expressions
                const problemChars = [
                    { from: /\{([^}]*?)\}/g, to: (match, inner) => {
                        // Only escape if it looks like it might be causing parsing issues
                        if (inner.includes('<') || inner.includes('>') || inner.includes('/')) {
                            return `\\{${inner}\\}`;
                        }
                        return match;
                    }},
                    // Fix standalone curly braces that might be interpreted as JSX
                    { from: /(?<!\\)\{(?![^}]*\})/g, to: '\\{' },
                    { from: /(?<!\\)\}(?![^{]*\{)/g, to: '\\}' },
                ];
                
                problemChars.forEach(({ from, to }) => {
                    if (typeof to === 'function') {
                        const newContent = content.replace(from, to);
                        if (newContent !== content) {
                            content = newContent;
                            modified = true;
                        }
                    } else {
                        const newContent = content.replace(from, to);
                        if (newContent !== content) {
                            content = newContent;
                            modified = true;
                        }
                    }
                });
                
                // Remove or comment out missing image references
                const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
                let imageMatches = content.match(imageRegex);
                if (imageMatches) {
                    imageMatches.forEach(match => {
                        const imagePathMatch = match.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                        if (imagePathMatch) {
                            const imagePath = imagePathMatch[2];
                            // Check if the image file exists
                            const fullImagePath = path.resolve(imagePath);
                            if (!fs.existsSync(fullImagePath)) {
                                // Comment out the missing image
                                content = content.replace(match, `<!-- Missing image: ${match} -->`);
                                modified = true;
                            }
                        }
                    });
                }
                
                if (modified) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`  ✓ Fixed MDX issues in ${filePath}`);
                } else {
                    console.log(`  - No changes needed in ${filePath}`);
                }
                
            } catch (error) {
                console.error(`  ✗ Error processing ${filePath}:`, error.message);
            }
        });
    });
    
    console.log('MDX issue fixing completed!');
}

fixMDXIssues();
