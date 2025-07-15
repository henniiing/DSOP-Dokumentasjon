const fs = require('fs');
const path = require('path');

// Configuration
const processDirectories = ['prod-sider', 'beta-sider'];
const fixLog = [];

function fixBrTags(content) {
    let fixes = [];
    
    // Replace all <br> tags with self-closing <br /> tags
    const brTagPattern = /<br(?![>\s])([^>]*?)>/g;
    content = content.replace(brTagPattern, (match, attrs) => {
        fixes.push(`Converted ${match} to self-closing br tag`);
        return attrs ? `<br${attrs} />` : '<br />';
    });
    
    // Fix unclosed <u> tags by making them self-closing or adding closing tags
    const unclosedUPattern = /<u(?![>\s])([^>]*?)>(?![^<]*<\/u>)/g;
    content = content.replace(unclosedUPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <u> tag: ${match}`);
        return attrs ? `<u${attrs} />` : '<u />';
    });
    
    // Fix unclosed <b> tags
    const unclosedBPattern = /<b(?![>\s])([^>]*?)>(?![^<]*<\/b>)/g;
    content = content.replace(unclosedBPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <b> tag: ${match}`);
        return attrs ? `<b${attrs} />` : '<b />';
    });
    
    // Fix unclosed <i> tags
    const unclosedIPattern = /<i(?![>\s])([^>]*?)>(?![^<]*<\/i>)/g;
    content = content.replace(unclosedIPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <i> tag: ${match}`);
        return attrs ? `<i${attrs} />` : '<i />';
    });
    
    // Fix unclosed <li> tags
    const unclosedLiPattern = /<li(?![>\s])([^>]*?)>(?![^<]*<\/li>)/g;
    content = content.replace(unclosedLiPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <li> tag: ${match}`);
        return attrs ? `<li${attrs} />` : '<li />';
    });
    
    // Fix unclosed <a> tags
    const unclosedAPattern = /<a(?![>\s])([^>]*?)>(?![^<]*<\/a>)/g;
    content = content.replace(unclosedAPattern, (match, attrs) => {
        fixes.push(`Fixed unclosed <a> tag: ${match}`);
        return attrs ? `<a${attrs} />` : '<a />';
    });
    
    // Fix malformed custom tags like <tdInnhenting>
    const malformedCustomTagPattern = /<(td[A-Za-z]+|[A-Za-z]*[A-Z][A-Za-z]*(?:>[^<]*)?(?:<\/[^>]+>)?)/g;
    content = content.replace(malformedCustomTagPattern, (match) => {
        fixes.push(`Removed malformed custom tag: ${match}`);
        return '';
    });
    
    // Additional pattern for any remaining custom tags that shouldn't be there
    const customTagPattern = /<\/?(td[A-Za-z]+|i[A-Z][a-z]*)[^>]*>/g;
    content = content.replace(customTagPattern, (match) => {
        fixes.push(`Removed invalid custom tag: ${match}`);
        return '';
    });
    
    return { content, fixes };
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { content: newContent, fixes } = fixBrTags(content);
        
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
console.log('🔧 Starting final BR and HTML tag fixes...\n');

let totalProcessed = 0;
processDirectories.forEach(dir => {
    console.log(`Processing ${dir}/...`);
    const count = processDirectory(dir);
    totalProcessed += count;
    console.log(`Completed ${dir}/ - ${count} files processed\n`);
});

// Save fix log
if (fixLog.length > 0) {
    fs.writeFileSync('final-br-tag-fixes-log.json', JSON.stringify(fixLog, null, 2));
    console.log(`\n✅ Process completed!`);
    console.log(`📁 Fixed ${totalProcessed} files`);
    console.log(`📝 Fix log saved to: final-br-tag-fixes-log.json`);
} else {
    console.log('\n✅ No fixes needed - all files are already clean!');
}
