const fs = require('fs');
const path = require('path');

const rootFolder = '.';
const extensions = ['.md'];

function fixFinalHtmlErrors(content) {
    let fixed = content;
    
    // Fix unexpected closing slash issues - remove orphaned slashes
    fixed = fixed.replace(/(<[^>]*?)\/(?=[^>]*>)/g, '$1');
    
    // Fix the specific iTeknisk tag - convert to regular text
    fixed = fixed.replace(/<iTeknisk>/gi, '*');
    fixed = fixed.replace(/<\/iTeknisk>/gi, '*');
    
    // Fix incomplete tags at end of file
    fixed = fixed.replace(/<[a-zA-Z]+[^>]*$/gm, '');
    
    // Fix mark tags spanning across paragraphs - close them properly
    fixed = fixed.replace(/<mark>([^<]*?)(?=\n\n|\n(?:[#*-]|\d+\.|\||>))/gi, '<mark>$1</mark>');
    
    // Fix any remaining tags with invalid characters by removing them completely
    fixed = fixed.replace(/<[^>]*[<&,][^>]*>/gi, '');
    
    // Fix unclosed a tags more aggressively
    fixed = fixed.replace(/<a\s+([^>]*?)>([^<]*?)(?=\n\n|\n(?:[#*-]|\d+\.|\||>)|$)/gi, '[$2]');
    
    // Remove any malformed self-closing tags with extra slashes
    fixed = fixed.replace(/<([a-zA-Z]+)[^>]*\/\s*\/[^>]*>/gi, '<$1 />');
    
    return fixed;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixFinalHtmlErrors(content);
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`Fixed final HTML errors in: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
        return false;
    }
}

function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    let fixedCount = 0;
    
    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            fixedCount += processDirectory(itemPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            if (processFile(itemPath)) {
                fixedCount++;
            }
        }
    }
    
    return fixedCount;
}

console.log('Starting final HTML error fixes...');
const totalFixed = processDirectory(rootFolder);
console.log(`\nCompleted! Fixed final HTML errors in ${totalFixed} files.`);
