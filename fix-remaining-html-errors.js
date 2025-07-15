const fs = require('fs');
const path = require('path');

const rootFolder = '.';
const extensions = ['.md'];

function fixRemainingHtmlErrors(content) {
    let fixed = content;
    
    // Fix self-closing img tags
    fixed = fixed.replace(/<img([^>]*?)(?<!\/)\s*>/gi, '<img$1 />');
    
    // Fix unclosed i tags 
    fixed = fixed.replace(/<i>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<i>$1</i>');
    fixed = fixed.replace(/<i\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<i>$2</i>');
    
    // Fix unclosed u tags more thoroughly
    fixed = fixed.replace(/<u>([^<]*?)(?=\s*(?:<\/|$|\n\n|\n#|\n\*|\n-|\n\||\n>\s|\n\d+\.))/gi, '<u>$1</u>');
    fixed = fixed.replace(/<u\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n|\n#|\n\*|\n-|\n\||\n>\s|\n\d+\.))/gi, '<u>$2</u>');
    
    // Fix unclosed ins tags
    fixed = fixed.replace(/<ins>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<ins>$1</ins>');
    fixed = fixed.replace(/<ins\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<ins>$2</ins>');
    
    // Fix unclosed a tags
    fixed = fixed.replace(/<a\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<a $1>$2</a>');
    
    // Fix mismatched mark/s tags
    fixed = fixed.replace(/<mark>([^<]*?)<\/s>/gi, '<mark>$1</mark>');
    fixed = fixed.replace(/<s>([^<]*?)<\/mark>/gi, '<s>$1</s>');
    
    // Remove tags with invalid characters in attributes (like <, &, ,)
    fixed = fixed.replace(/<([a-zA-Z]+)[^>]*[<&,][^>]*>/gi, '');
    
    // Fix incomplete tags at end of file
    fixed = fixed.replace(/<([a-zA-Z]+)$/, '');
    
    // Remove any malformed tag fragments
    fixed = fixed.replace(/<[a-zA-Z]+[^>]*$/gm, '');
    
    // Fix any remaining unclosed single tags at end of lines
    fixed = fixed.replace(/<(i|u|b|strong|em|ins|del|mark|s|small|sub|sup)>([^<]*?)(?=\n(?:[#*-]|\d+\.|\||>)|\n\n|$)/gi, '<$1>$2</$1>');
    
    return fixed;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixRemainingHtmlErrors(content);
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`Fixed remaining HTML errors in: ${filePath}`);
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

console.log('Starting remaining HTML error fixes...');
const totalFixed = processDirectory(rootFolder);
console.log(`\nCompleted! Fixed remaining HTML errors in ${totalFixed} files.`);
