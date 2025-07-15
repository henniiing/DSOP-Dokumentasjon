const fs = require('fs');
const path = require('path');

const rootFolder = '.';
const extensions = ['.md'];

function fixHtmlTagErrors(content) {
    let fixed = content;
    
    // Fix self-closing br tags - convert <br> to <br />
    fixed = fixed.replace(/<br\s*(?!\/|>)/gi, '<br />');
    fixed = fixed.replace(/<br\s*(?:\/)?>/gi, '<br />');
    
    // Fix invalid custom tags by converting them to markdown or removing them
    fixed = fixed.replace(/<markb>/gi, '**');
    fixed = fixed.replace(/<\/markb>/gi, '**');
    fixed = fixed.replace(/<markstrong>/gi, '**');
    fixed = fixed.replace(/<\/markstrong>/gi, '**');
    fixed = fixed.replace(/<iartiklene>/gi, '');
    fixed = fixed.replace(/<\/iartiklene>/gi, '');
    
    // Fix unclosed u tags by ensuring they are properly closed
    fixed = fixed.replace(/<u>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<u>$1</u>');
    fixed = fixed.replace(/<u\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<u>$2</u>');
    
    // Fix unclosed ol tags - remove them as they should be markdown lists
    fixed = fixed.replace(/<ol>/gi, '');
    fixed = fixed.replace(/<\/ol>/gi, '');
    
    // Fix unclosed a tags
    fixed = fixed.replace(/<a\s+([^>]*?)>([^<]*?)(?=\s*(?:<\/|$|\n\n))/gi, '<a $1>$2</a>');
    
    // Fix tags with invalid attributes containing special characters
    fixed = fixed.replace(/<([a-zA-Z]+)[^>]*[<&,][^>]*>/gi, '');
    
    // Fix any remaining unclosed tags at end of lines
    fixed = fixed.replace(/<([a-zA-Z]+)>([^<]*?)(?=\n\n|\n#|\n\*|\n-|\n\||\n>\s|\n\d+\.|\n$)/gi, '<$1>$2</$1>');
    
    // Remove any remaining orphaned closing tags
    fixed = fixed.replace(/<\/([a-zA-Z]+)>(?!\s*<\/)/gi, '');
    
    return fixed;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixHtmlTagErrors(content);
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`Fixed HTML tag errors in: ${filePath}`);
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
        
        if (stat.isDirectory()) {
            fixedCount += processDirectory(itemPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            if (processFile(itemPath)) {
                fixedCount++;
            }
        }
    }
    
    return fixedCount;
}

console.log('Starting HTML tag error fixes...');
const totalFixed = processDirectory(rootFolder);
console.log(`\nCompleted! Fixed HTML tag errors in ${totalFixed} files.`);
