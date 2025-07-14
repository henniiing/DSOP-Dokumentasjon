const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix HTML tags in markdown content
function fixHtmlTags(content) {
  let fixedContent = content;
  
  // Fix unclosed <br> tags - replace with self-closing version
  fixedContent = fixedContent.replace(/<br(?:\s+[^>]*)?>/gi, '<br />');
  
  // Fix unclosed <img> tags - make them self-closing
  fixedContent = fixedContent.replace(/<img([^>]*?)(?<!\/)\s*>/gi, '<img$1 />');
  
  // Fix unclosed <i> tags - ensure they have closing tags
  // This is more complex, so we'll look for standalone <i> that should be closed
  fixedContent = fixedContent.replace(/<i>([^<]*?)(?=\n|$)/gi, '<i>$1</i>');
  
  // Fix unclosed <mark> tags - ensure they have closing tags
  fixedContent = fixedContent.replace(/<mark>([^<]*?)(?=\n|$)/gi, '<mark>$1</mark>');
  
  return fixedContent;
}

// Function to process all markdown files
function processMarkdownFiles() {
  const patterns = [
    'prod-sider/**/*.md',
    'beta-sider/**/*.md'
  ];
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    
    files.forEach(file => {
      try {
        console.log(`Processing: ${file}`);
        const content = fs.readFileSync(file, 'utf8');
        const fixedContent = fixHtmlTags(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(file, fixedContent, 'utf8');
          console.log(`  ✓ Fixed HTML tags in ${file}`);
        } else {
          console.log(`  - No changes needed in ${file}`);
        }
      } catch (error) {
        console.error(`  ✗ Error processing ${file}:`, error.message);
      }
    });
  });
}

// Run the fix
console.log('Starting to fix HTML tags in markdown files...');
processMarkdownFiles();
console.log('HTML tag fixing completed!');
