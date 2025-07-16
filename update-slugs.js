const fs = require('fs');
const path = require('path');

function updateSlugToAbsolute(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find slug line and update it to absolute path
    const updatedContent = content.replace(
        /slug:\s*"([^"]+)"/g,
        (match, slug) => {
            // If slug doesn't start with /, make it absolute
            if (!slug.startsWith('/')) {
                return `slug: "/${slug}"`;
            }
            return match;
        }
    );
    
    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (item.endsWith('.md')) {
            updateSlugToAbsolute(fullPath);
        }
    }
}

// Process prod-sider directory
processDirectory('./prod-sider');
console.log('Finished updating slugs to absolute paths');
