const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixYamlFrontmatter() {
    console.log('Starting YAML frontmatter fix...');
    
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
            
            // Extract frontmatter
            const frontmatterMatch = newContent.match(/^---\n([\s\S]*?)\n---/);
            if (frontmatterMatch) {
                const frontmatter = frontmatterMatch[1];
                let fixedFrontmatter = frontmatter;
                
                // Fix malformed keywords arrays like [""""] followed by list items
                const malformedKeywordsMatch = fixedFrontmatter.match(/keywords:\s*\[["']{0,4}\]\s*\n(\s*-\s*[^\n]*)/);
                if (malformedKeywordsMatch) {
                    const listItem = malformedKeywordsMatch[1].trim();
                    // Extract the value from "- "value""
                    const valueMatch = listItem.match(/^-\s*["']?([^"']+)["']?/);
                    if (valueMatch) {
                        const value = valueMatch[1];
                        fixedFrontmatter = fixedFrontmatter.replace(
                            /keywords:\s*\[["']{0,4}\]\s*\n\s*-\s*[^\n]*/,
                            `keywords: ["${value}"]`
                        );
                        changes.push('Fixed malformed keywords array with list item');
                        modified = true;
                    }
                }
                
                // Fix keywords with multiple quotes like [""""]
                if (fixedFrontmatter.includes('keywords: [""""]')) {
                    fixedFrontmatter = fixedFrontmatter.replace(/keywords:\s*\[["']{2,}\]/, 'keywords: ["sample"]');
                    changes.push('Fixed keywords with multiple quotes');
                    modified = true;
                }
                
                // Fix keywords with empty quotes
                fixedFrontmatter = fixedFrontmatter.replace(/keywords:\s*\[""\]/, 'keywords: ["sample"]');
                if (fixedFrontmatter !== frontmatter && !modified) {
                    changes.push('Fixed empty keywords quotes');
                    modified = true;
                }
                
                // Fix toc field - should be boolean, not string
                fixedFrontmatter = fixedFrontmatter.replace(/toc:\s*['"]false['"]/, 'toc: false');
                fixedFrontmatter = fixedFrontmatter.replace(/toc:\s*['"]true['"]/, 'toc: true');
                if (fixedFrontmatter !== frontmatter && !changes.includes('Fixed toc boolean value')) {
                    changes.push('Fixed toc boolean value');
                    modified = true;
                }
                
                // Fix any other quoted boolean values
                fixedFrontmatter = fixedFrontmatter.replace(/(\w+):\s*['"]false['"]/, '$1: false');
                fixedFrontmatter = fixedFrontmatter.replace(/(\w+):\s*['"]true['"]/, '$1: true');
                
                // Fix special characters in title values that need quotes
                const titleMatch = fixedFrontmatter.match(/title:\s*([^"'\n][^:\n]*)/);
                if (titleMatch) {
                    const titleValue = titleMatch[1].trim();
                    // If title contains special characters and isn't quoted, quote it
                    if ((titleValue.includes(':') || titleValue.includes('#') || titleValue.includes('[') || titleValue.includes(']')) && !titleValue.match(/^["'].*["']$/)) {
                        fixedFrontmatter = fixedFrontmatter.replace(
                            new RegExp(`title:\\s*${titleValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`),
                            `title: "${titleValue}"`
                        );
                        changes.push('Added quotes to title with special characters');
                        modified = true;
                    }
                }
                
                // Replace the frontmatter in content
                if (modified) {
                    newContent = newContent.replace(frontmatterMatch[0], `---\n${fixedFrontmatter}\n---`);
                }
            }
            
            if (modified) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                totalFixed++;
                
                fixLog.push({
                    file: path.relative(process.cwd(), filePath),
                    changes: changes,
                    timestamp: new Date().toISOString()
                });
                
                console.log(`Fixed YAML issues in: ${path.relative(process.cwd(), filePath)} - ${changes.join(', ')}`);
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    });
    
    // Save the log
    fs.writeFileSync('yaml-fixes-log.json', JSON.stringify(fixLog, null, 2));
    
    console.log(`\nYAML frontmatter fix complete!`);
    console.log(`Files processed: ${markdownFiles.length}`);
    console.log(`Files fixed: ${totalFixed}`);
    console.log('Log saved to: yaml-fixes-log.json');
}

// Run the fix
fixYamlFrontmatter();
