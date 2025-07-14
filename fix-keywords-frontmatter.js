const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixKeywordsFrontmatter() {
    console.log('Starting keywords frontmatter fix...');
    
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
            
            // Fix keywords field in frontmatter
            // Match keywords: sample (without quotes or array brackets)
            const keywordsFix = newContent.replace(
                /^keywords:\s*sample\s*$/gm,
                'keywords: ["sample"]'
            );
            
            if (keywordsFix !== newContent) {
                newContent = keywordsFix;
                modified = true;
                console.log(`Fixed keywords field in: ${path.relative(process.cwd(), filePath)}`);
            }
            
            // Also fix any other non-array keywords values
            const keywordsArrayFix = newContent.replace(
                /^keywords:\s*([^[\n\r]+)$/gm,
                (match, value) => {
                    // Skip if already an array
                    if (value.trim().startsWith('[')) {
                        return match;
                    }
                    // Convert to array
                    const trimmedValue = value.trim();
                    if (trimmedValue.includes(',')) {
                        // Multiple keywords separated by commas
                        const keywords = trimmedValue.split(',').map(k => `"${k.trim()}"`).join(', ');
                        return `keywords: [${keywords}]`;
                    } else {
                        // Single keyword
                        return `keywords: ["${trimmedValue}"]`;
                    }
                }
            );
            
            if (keywordsArrayFix !== newContent) {
                newContent = keywordsArrayFix;
                modified = true;
                console.log(`Fixed keywords array format in: ${path.relative(process.cwd(), filePath)}`);
            }
            
            if (modified) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                totalFixed++;
                
                fixLog.push({
                    file: path.relative(process.cwd(), filePath),
                    changes: ['Fixed keywords frontmatter format'],
                    timestamp: new Date().toISOString()
                });
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    });
    
    // Save the log
    fs.writeFileSync('keywords-fixes-log.json', JSON.stringify(fixLog, null, 2));
    
    console.log(`\nKeywords frontmatter fix complete!`);
    console.log(`Files processed: ${markdownFiles.length}`);
    console.log(`Files fixed: ${totalFixed}`);
    console.log('Log saved to: keywords-fixes-log.json');
}

// Run the fix
fixKeywordsFrontmatter();
