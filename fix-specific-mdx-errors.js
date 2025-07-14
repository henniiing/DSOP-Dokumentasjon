const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting specific MDX error fixes...');

// Find all markdown files
const markdownFiles = glob.sync('**/*.md', {
    cwd: __dirname,
    ignore: ['node_modules/**', '.git/**']
});

console.log(`Found ${markdownFiles.length} markdown files to process`);

let totalFixedFiles = 0;
const fixes = [];

markdownFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixed = false;

    console.log(`Processing: ${file}`);

    // Fix 1: Malformed self-closing tags - characters after /
    // Pattern: </something where something is not >
    content = content.replace(/<\/([^>]+?)([^>]+?)>/g, (match, beforeSlash, afterSlash) => {
        // If there's content after the slash that's not >, it's malformed
        if (afterSlash && !afterSlash.startsWith('>')) {
            return `</${beforeSlash}>`;
        }
        return match;
    });

    // Fix specific patterns seen in errors:
    // Fix "/i" pattern
    content = content.replace(/<\/i([^>]*?)>/g, '</i>');
    // Fix "/K" pattern  
    content = content.replace(/<\/K([^>]*?)>/g, '</K>');
    // Fix "/D" pattern
    content = content.replace(/<\/D([^>]*?)>/g, '</D>');
    // Fix "/F" pattern
    content = content.replace(/<\/F([^>]*?)>/g, '</F>');
    // Fix "/-" pattern
    content = content.replace(/<\/-([^>]*?)>/g, '</>');
    // Fix "/<" pattern
    content = content.replace(/<\/<([^>]*?)>/g, '</>');

    // Fix 2: Self-closing tags with content after slash
    content = content.replace(/<([^>\/]+?)\/([^>]+?)>/g, (match, tagName, afterSlash) => {
        // If there's content after the slash, fix it
        if (afterSlash && !afterSlash.trim().startsWith('>')) {
            return `<${tagName} />`;
        }
        return match;
    });

    // Fix 3: Unescaped ampersands in HTML tags
    // More aggressive pattern for & in tags
    content = content.replace(/<([^>]*?)&([^>]*?)>/g, (match, before, after) => {
        // Skip if it's already a valid HTML entity
        if (after.match(/^(amp|lt|gt|quot|apos|nbsp|copy|reg);/)) {
            return match;
        }
        // Skip if it's in a URL parameter (common case)
        if (before.includes('href=') || before.includes('src=')) {
            return match;
        }
        return `<${before}&amp;${after}>`;
    });

    // Fix 4: HTML comments that weren't converted properly
    // Look for invalid comment patterns
    content = content.replace(/<!([^>]*?)>/g, (match, inside) => {
        if (!inside.startsWith('--') || !inside.endsWith('--')) {
            return `{/* ${inside} */}`;
        }
        return match;
    });

    // Fix 5: Unclosed curly braces
    // Find lines with unclosed { that might be causing acorn errors
    const lines = content.split('\n');
    const fixedLines = lines.map((line, index) => {
        // Count braces
        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        
        if (openBraces > closeBraces) {
            // Try to fix common patterns
            // If line ends with { and no }, add }
            if (line.trim().endsWith('{') && !line.includes('}')) {
                return line + '}';
            }
            // If there's a { followed by text but no }, escape it
            const fixed = line.replace(/\{([^}]*?)$/g, '\\{$1\\}');
            if (fixed !== line) {
                console.log(`  Fixed unclosed brace in line ${index + 1}: ${line.trim()}`);
                return fixed;
            }
        }
        
        return line;
    });
    content = fixedLines.join('\n');

    // Fix 6: End of file issues with self-closing tags
    content = content.replace(/\/\s*$/, '/>');

    // Fix 7: Malformed image paths with &amp;
    content = content.replace(/!\[([^\]]*)\]\(([^)]*?)&amp;([^)]*?)\)/g, (match, alt, before, after) => {
        // Convert &amp; back to & in image paths
        return `![${alt}](${before}&${after})`;
    });

    // Fix 8: Specific tag closure issues
    // Fix banknavn tag issue
    content = content.replace(/<banknavn>([^<]*?)([^<]*?)$/gm, '<banknavn>$1$2</banknavn>');
    
    // Fix 9: JSX-style comments in tags (/* */ inside tags)
    content = content.replace(/<([^>]*?)\/\*([^>]*?)\*\/([^>]*?)>/g, '<$1$3>');

    // Fix 10: Double escaped entities
    content = content.replace(/&amp;(amp|lt|gt|quot|apos);/g, '&$1;');

    // Fix 11: End of file expression issues
    // If file ends with { without }, add }
    if (content.trim().endsWith('{')) {
        content = content.trim() + '}';
    }

    // Check if content changed
    if (content !== originalContent) {
        try {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed: ${file}`);
            totalFixedFiles++;
            fileFixed = true;
            
            // Log what was fixed
            fixes.push({
                file: file,
                changes: [
                    originalContent.match(/<\/[^>]*?[^>]>/g) ? 'Fixed malformed closing tags' : null,
                    originalContent.match(/<[^>]*?&[^>]*?>/g) ? 'Fixed ampersands in tags' : null,
                    originalContent !== content ? 'Applied other fixes' : null
                ].filter(Boolean)
            });
        } catch (error) {
            console.error(`❌ Error writing file ${file}:`, error.message);
        }
    }

    if (!fileFixed) {
        console.log(`   No changes needed for: ${file}`);
    }
});

console.log('\n=== Summary ===');
console.log(`Total files processed: ${markdownFiles.length}`);
console.log(`Files fixed: ${totalFixedFiles}`);

// Create a detailed log
const logInfo = {
    timestamp: new Date().toISOString(),
    totalFiles: markdownFiles.length,
    fixedFiles: totalFixedFiles,
    fixes: fixes
};

fs.writeFileSync(path.join(__dirname, 'specific-mdx-fixes-log.json'), JSON.stringify(logInfo, null, 2));
console.log('\nDetailed fix log saved to: specific-mdx-fixes-log.json');

// Also check for missing image files and suggest fixes
console.log('\n=== Image File Check ===');
const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
const missingImages = new Set();

markdownFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    
    while ((match = imagePattern.exec(content)) !== null) {
        const imagePath = match[2];
        if (imagePath.startsWith('prod-sider/images/') || imagePath.startsWith('images/')) {
            const fullImagePath = path.join(__dirname, imagePath);
            if (!fs.existsSync(fullImagePath)) {
                missingImages.add(imagePath);
            }
        }
    }
});

if (missingImages.size > 0) {
    console.log('\nMissing image files found:');
    missingImages.forEach(img => console.log(`  - ${img}`));
    console.log('\nYou may need to:');
    console.log('1. Add these missing image files');
    console.log('2. Update the image paths in the markdown files');
    console.log('3. Remove references to missing images');
}

console.log('\nDone! Try building your Docusaurus project again.');
