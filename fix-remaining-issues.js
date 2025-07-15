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

// Function to fix remaining issues in a file
function fixRemainingIssues(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Fix images/ to /img/ references that weren't caught before
    const remainingImageRegex = /(?:!\[.*?\]\(|src=["']?)images\/([^)\s"']+)/g;
    updatedContent = updatedContent.replace(remainingImageRegex, (match, filename) => {
      hasChanges = true;
      if (match.includes('src=')) {
        return match.replace(`images/${filename}`, `/img/${filename}`);
      } else {
        return match.replace(`images/${filename}`, `/img/${filename}`);
      }
    });

    // Fix malformed URLs like /https:// to https://
    const malformedUrlRegex = /\[([^\]]+)\]\(\/https?:\/\/([^)]+)\)/g;
    updatedContent = updatedContent.replace(malformedUrlRegex, (match, text, url) => {
      hasChanges = true;
      return `[${text}](https://${url})`;
    });

    // Fix links to /index to just /
    const indexLinkRegex = /\[([^\]]+)\]\(\/index\)/g;
    updatedContent = updatedContent.replace(indexLinkRegex, (match, text) => {
      hasChanges = true;
      return `[${text}](/)`;
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

console.log('Fixing remaining link issues...');

for (const dir of directories) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const mdFiles = findMdFiles(dirPath);
    console.log(`Checking ${mdFiles.length} .md files in ${dir}`);
    
    for (const file of mdFiles) {
      if (fixRemainingIssues(file)) {
        totalUpdated++;
      }
    }
  } else {
    console.log(`Directory ${dir} not found, skipping...`);
  }
}

console.log(`\nRemaining issues fix completed!`);
console.log(`Total files updated: ${totalUpdated}`);
