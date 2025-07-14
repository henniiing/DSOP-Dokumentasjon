const fs = require('fs');
const path = require('path');

// Function to fix common MDX parsing issues that cause acorn errors
function fixMdxParsingIssues(content, filePath) {
    let fixed = content;
    let changes = [];

    // Fix unescaped curly braces that aren't JSX
    // Look for { or } that are not part of valid JSX expressions
    fixed = fixed.replace(/(?<!`)\{(?![a-zA-Z_$])/g, '\\{');
    fixed = fixed.replace(/(?<!`)\}(?![a-zA-Z_$])/g, '\\}');
    
    // Fix angle brackets that might be interpreted as JSX
    fixed = fixed.replace(/(?<!`)<(?![a-zA-Z\/!])/g, '&lt;');
    fixed = fixed.replace(/(?<!`)\>(?![a-zA-Z])/g, '&gt;');
    
    // Fix unescaped angle brackets in text (not in code blocks or HTML tags)
    fixed = fixed.replace(/(?<!\w)<(\w+)(?![\s>\/])/g, '&lt;$1');
    fixed = fixed.replace(/(?<!\w)(\w+)>(?!\w)/g, '$1&gt;');
    
    // Fix problematic characters in URLs or text that might cause parsing issues
    fixed = fixed.replace(/\{[^}]*\}/g, (match) => {
        // Only escape if it doesn't look like valid JSX
        if (!match.match(/^\{[a-zA-Z_$][a-zA-Z0-9_$]*(\.[a-zA-Z_$][a-zA-Z0-9_$]*)*\}$/)) {
            return match.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
        }
        return match;
    });
    
    // Fix problematic markdown links that might have special characters
    fixed = fixed.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (match, text, url) => {
        // Escape problematic characters in URLs
        const escapedUrl = url.replace(/[{}]/g, '\\$&');
        return `[${text}](${escapedUrl})`;
    });
    
    // Fix table cells that might have problematic content
    fixed = fixed.replace(/\|([^|\n]*)\|/g, (match, content) => {
        const escapedContent = content.replace(/[{}]/g, '\\$&');
        return `|${escapedContent}|`;
    });
    
    // Fix inline code that might have unescaped backticks
    fixed = fixed.replace(/`([^`]*)`/g, (match, code) => {
        // Don't double-escape already escaped content
        if (!code.includes('\\{') && !code.includes('\\}')) {
            return match;
        }
        return match;
    });
    
    return fixed;
}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixMdxParsingIssues(content, filePath);
        
        if (content !== fixed) {
            fs.writeFileSync(filePath, fixed, 'utf8');
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to find and process all markdown files
function processAllMarkdownFiles(directory) {
    const files = fs.readdirSync(directory);
    let fixedCount = 0;
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            fixedCount += processAllMarkdownFiles(fullPath);
        } else if (file.endsWith('.md')) {
            if (processFile(fullPath)) {
                fixedCount++;
            }
        }
    }
    
    return fixedCount;
}

// Main execution
console.log('Starting to fix acorn parsing errors...');

const prodSidersPath = path.join(__dirname, 'prod-sider');
const betaSidersPath = path.join(__dirname, 'beta-sider');

let totalFixed = 0;

if (fs.existsSync(prodSidersPath)) {
    console.log('Processing prod-sider...');
    totalFixed += processAllMarkdownFiles(prodSidersPath);
}

if (fs.existsSync(betaSidersPath)) {
    console.log('Processing beta-sider...');
    totalFixed += processAllMarkdownFiles(betaSidersPath);
}

console.log(`\nComplete! Fixed ${totalFixed} files.`);
