const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixDoubleQuotesInKeywords() {
    console.log('Starting double quotes in keywords fix...');
    
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
            
            // Fix double quotes around keywords values like [""sample""]
            const doubleQuoteFix = newContent.replace(/keywords:\s*\[""([^"]+)""\]/g, 'keywords: ["$1"]');
            if (doubleQuoteFix !== newContent) {
                newContent = doubleQuoteFix;
                modified = true;
                changes.push('Fixed double quotes in keywords array');
            }
            
            // Fix other malformed quote patterns in keywords
            const malformedQuoteFix = newContent.replace(/keywords:\s*\["'([^"']+)'"\]/g, 'keywords: ["$1"]');
            if (malformedQuoteFix !== newContent) {
                newContent = malformedQuoteFix;
                modified = true;
                changes.push('Fixed mixed quotes in keywords array');
            }
            
            // Fix empty keywords arrays with quotes like [""] or ['']
            const emptyQuoteFix = newContent.replace(/keywords:\s*\[["']["']\]/g, 'keywords: ["sample"]');
            if (emptyQuoteFix !== newContent) {
                newContent = emptyQuoteFix;
                modified = true;
                changes.push('Fixed empty keywords array');
            }
            
            // Fix any other quote issues in frontmatter fields
            // Handle unescaped quotes in string values
            newContent = newContent.replace(/^(\w+):\s*"([^"]*)"([^"]*)"([^"]*)"$/gm, '$1: "$2$3$4"');
            
            if (modified) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                totalFixed++;
                
                fixLog.push({
                    file: path.relative(process.cwd(), filePath),
                    changes: changes,
                    timestamp: new Date().toISOString()
                });
                
                console.log(`Fixed quote issues in: ${path.relative(process.cwd(), filePath)} - ${changes.join(', ')}`);
            }
            
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    });
    
    // Save the log
    fs.writeFileSync('quote-fixes-log.json', JSON.stringify(fixLog, null, 2));
    
    console.log(`\nQuote fixes complete!`);
    console.log(`Files processed: ${markdownFiles.length}`);
    console.log(`Files fixed: ${totalFixed}`);
    console.log('Log saved to: quote-fixes-log.json');
}

// Run the fix
fixDoubleQuotesInKeywords();
