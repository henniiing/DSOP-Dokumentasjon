const fs = require('fs');
const path = require('path');

// Function to recursively find all .md files
function findMdFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findMdFiles(fullPath, files);
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Function to fix HTML links in a file
function fixHtmlLinks(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Fix internal links ending with .html to just the filename (without extension)
    // This handles cases like [text](filename.html) -> [text](filename)
    const internalHtmlRegex = /\[([^\]]+)\]\(([^)]+?\.html)\)/g;
    updatedContent = updatedContent.replace(internalHtmlRegex, (match, text, url) => {
      // Only fix if it's not an external URL (doesn't start with http:// or https://)
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        // Check if it contains dokumentasjon.dsop.no - these should be converted to relative paths
        if (url.includes('dokumentasjon.dsop.no/')) {
          const filename = url.split('/').pop().replace('.html', '');
          hasChanges = true;
          return `[${text}](/${filename})`;
        } else {
          // Simple local file reference - just remove .html
          const filename = url.replace('.html', '');
          hasChanges = true;
          return `[${text}](/${filename})`;
        }
      }
      return match;
    });

    // Fix dokumentasjon.dsop.no URLs to be relative paths
    const dsopUrlRegex = /https?:\/\/dokumentasjon\.dsop\.no\/([^)\s"']+)\.html/g;
    updatedContent = updatedContent.replace(dsopUrlRegex, (match, filename) => {
      hasChanges = true;
      return `/${filename}`;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const directories = ['prod-sider', 'beta-sider', 'docs', 'src'];
let totalUpdated = 0;

console.log('Fixing HTML links...');

for (const dir of directories) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const mdFiles = findMdFiles(dirPath);
    console.log(`Checking ${mdFiles.length} .md files in ${dir}`);
    
    for (const file of mdFiles) {
      if (fixHtmlLinks(file)) {
        totalUpdated++;
      }
    }
  } else {
    console.log(`Directory ${dir} not found, skipping...`);
  }
}

console.log(`\nHTML link fix completed!`);
console.log(`Total files updated: ${totalUpdated}`);
