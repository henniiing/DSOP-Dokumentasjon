const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixMalformedKeywordsArrays() {
    console.log('Starting malformed keywords arrays fix...');
    
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
            
            // Fix keywords arrays with double quotes at start and end like [""value1", "value2", "value3""]
            const doubleQuoteFix = newContent.replace(/keywords:\s*\[""([^"]+)",([^]]*?),"([^"]+)""\]/g, (match, first, middle, last) => {
                // Clean up the middle part - remove any extra quotes and ensure proper formatting
                const cleanMiddle = middle.replace(/"/g, '').split(',').map(s => `"${s.trim()}"`).join(', ');
                return `keywords: ["${first}", ${cleanMiddle}, "${last}"]`;
            });
            
            if (doubleQuoteFix !== newContent) {
                newContent = doubleQuoteFix;
                modified = true;
                changes.push('Fixed double quotes at start/end of keywords array');
            }
            
            // Fix any remaining malformed quote patterns
            const generalQuoteFix = newContent.replace(/keywords:\s*\[([^[\]]*)\]/g, (match, content) => {
                // Split by comma and clean each item
                const items = content.split(',').map(item => {
                    const trimmed = item.trim();
                    // Remove any existing quotes and add proper ones
                    const cleaned = trimmed.replace(/^["']+|["']+$/g, '');
                    return `"${cleaned}"`;
                }).filter(item => item !== '""'); // Remove empty items
                
                return `keywords: [${items.join(', ')}]`;
            });
            
            if (generalQuoteFix !== newContent) {
                newContent = generalQuoteFix;
                modified = true;
                changes.push('Fixed general quote formatting in keywords');
            }
            
            if (modified) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                totalFixed++;
                
                fixLog.push({
                    file: path.relative(process.cwd(), filePath),
                    changes: changes,
                    timestamp: new Date().toISOString()
                });
                
                console.log(`Fixed keywords in: ${path.relative(process.cwd(), filePath)} - ${changes.join(', ')}`);
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    });
    
    // Save the log
    fs.writeFileSync('keywords-final-fixes-log.json', JSON.stringify(fixLog, null, 2));
    
    console.log(`\nKeywords array fixes complete!`);
    console.log(`Files processed: ${markdownFiles.length}`);
    console.log(`Files fixed: ${totalFixed}`);
    console.log('Log saved to: keywords-final-fixes-log.json');
}

// Run the fix
fixMalformedKeywordsArrays();
