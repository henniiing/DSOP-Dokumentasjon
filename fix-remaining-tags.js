const fs = require('fs');
const path = require('path');

// Configuration
const processDirectories = ['prod-sider', 'beta-sider'];
const fixLog = [];

function fixRemainingTags(content) {
    let fixes = [];
    
    // Fix unclosed <u> tags by making them self-closing
    const unclosedUPattern = /<u(\s[^>]*)?>\s*(?![^<]*<\/u>)/g;
    content = content.replace(unclosedUPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <u> tag: ${match}`);
        return attrs ? `<u${attrs} />` : '<u />';
    });
    
    // Fix unclosed <b> tags
    const unclosedBPattern = /<b(\s[^>]*)?>\s*(?![^<]*<\/b>)/g;
    content = content.replace(unclosedBPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <b> tag: ${match}`);
        return attrs ? `<b${attrs} />` : '<b />';
    });
    
    // Fix unclosed <i> tags
    const unclosedIPattern = /<i(\s[^>]*)?>\s*(?![^<]*<\/i>)/g;
    content = content.replace(unclosedIPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <i> tag: ${match}`);
        return attrs ? `<i${attrs} />` : '<i />';
    });
    
    // Fix unclosed <li> tags
    const unclosedLiPattern = /<li(\s[^>]*)?>\s*(?![^<]*<\/li>)/g;
    content = content.replace(unclosedLiPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <li> tag: ${match}`);
        return attrs ? `<li${attrs} />` : '<li />';
    });
    
    // Fix unclosed <a> tags
    const unclosedAPattern = /<a(\s[^>]*)?>\s*(?![^<]*<\/a>)/g;
    content = content.replace(unclosedAPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <a> tag: ${match}`);
        return attrs ? `<a${attrs} />` : '<a />';
    });
    
    // Fix unclosed <mark> tags
    const unclosedMarkPattern = /<mark(\s[^>]*)?>\s*(?![^<]*<\/mark>)/g;
    content = content.replace(unclosedMarkPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <mark> tag: ${match}`);
        return attrs ? `<mark${attrs} />` : '<mark />';
    });
    
    // Fix unclosed <table> tags - remove them as they're likely malformed
    const unclosedTablePattern = /<table(\s[^>]*)?>\s*(?![^<]*<\/table>)/g;
    content = content.replace(unclosedTablePattern, (match) => {
        fixes.push(`Removed unclosed <table> tag: ${match}`);
        return '';
    });
    
    // Remove any remaining malformed HTML tags that are causing issues
    const malformedTagPattern = /<(\/?)([a-zA-Z]+)(\s[^>]*)?(?:>\s*$|>[^<]*$)/gm;
    content = content.replace(malformedTagPattern, (match, closing, tagName, attrs, offset, string) => {
        // Check if this tag appears to be unclosed
        if (!closing && !match.endsWith('/>')) {
            const afterTag = string.slice(offset + match.length);
            const closingTag = `</${tagName}>`;
            if (!afterTag.includes(closingTag)) {
                fixes.push(`Removed malformed tag: ${match}`);
                return '';
            }
        }
        return match;
    });
    
    return { content, fixes };
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { content: newContent, fixes } = fixRemainingTags(content);
        
        if (fixes.length > 0) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            fixLog.push({
                file: path.relative(process.cwd(), filePath),
                fixes: fixes
            });
            console.log(`✓ Fixed ${fixes.length} issues in ${path.basename(filePath)}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory ${dirPath} does not exist, skipping...`);
        return 0;
    }
    
    const files = fs.readdirSync(dirPath);
    let processedCount = 0;
    
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(dirPath, file);
            if (processFile(filePath)) {
                processedCount++;
            }
        }
    });
    
    return processedCount;
}

// Main execution
console.log('🔧 Starting final remaining HTML tag fixes...\n');

let totalProcessed = 0;
processDirectories.forEach(dir => {
    console.log(`Processing ${dir}/...`);
    const count = processDirectory(dir);
    totalProcessed += count;
    console.log(`Completed ${dir}/ - ${count} files processed\n`);
});

// Save fix log
if (fixLog.length > 0) {
    fs.writeFileSync('remaining-tag-fixes-log.json', JSON.stringify(fixLog, null, 2));
    console.log(`\n✅ Process completed!`);
    console.log(`📁 Fixed ${totalProcessed} files`);
    console.log(`📝 Fix log saved to: remaining-tag-fixes-log.json`);
} else {
    console.log('\n✅ No fixes needed - all files are already clean!');
}
