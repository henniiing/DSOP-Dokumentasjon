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

// Function to fix image paths in a file
function fixImagePaths(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Fix image references from images/ to /img/
    // Matches: images/filename.ext -> /img/filename.ext
    const imageRegex = /(?:!\[.*?\]\(|src=["']?)images\/([^)\s"']+)/g;
    updatedContent = updatedContent.replace(imageRegex, (match, filename) => {
      hasChanges = true;
      if (match.includes('src=')) {
        return match.replace(`images/${filename}`, `/img/${filename}`);
      } else {
        return match.replace(`images/${filename}`, `/img/${filename}`);
      }
    });

    // Fix asset references from assets/ to /assets/
    // Matches: assets/filename.ext -> /assets/filename.ext
    const assetRegex = /(?:\[.*?\]\(|href=["']?)assets\/([^)\s"']+)/g;
    updatedContent = updatedContent.replace(assetRegex, (match, filename) => {
      hasChanges = true;
      if (match.includes('href=')) {
        return match.replace(`assets/${filename}`, `/assets/${filename}`);
      } else {
        return match.replace(`assets/${filename}`, `/assets/${filename}`);
      }
    });

    // Fix direct linking text like "assets/filename" to "/assets/filename"
    const directAssetRegex = /(?:^|\s)(assets\/[^\s)\]]+)/gm;
    updatedContent = updatedContent.replace(directAssetRegex, (match, assetPath) => {
      hasChanges = true;
      return match.replace(assetPath, `/${assetPath}`);
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

console.log('Fixing image and asset paths...');

for (const dir of directories) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const mdFiles = findMdFiles(dirPath);
    console.log(`Found ${mdFiles.length} .md files in ${dir}`);
    
    for (const file of mdFiles) {
      if (fixImagePaths(file)) {
        totalUpdated++;
      }
    }
  } else {
    console.log(`Directory ${dir} not found, skipping...`);
  }
}

console.log(`\nImage path fix completed!`);
console.log(`Total files updated: ${totalUpdated}`);
