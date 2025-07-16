const fs = require('fs');
const path = require('path');

// Function to update frontmatter slug in a file
function updateBetaSlug(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the relative path from beta-sider directory
  const relativePath = path.relative('beta-sider', filePath);
  const directory = path.dirname(relativePath);
  const fileName = path.basename(relativePath, '.md');
  
  // Create the new slug path
  let newSlug;
  if (directory === '.' || directory === 'beta') {
    // Files in root or beta folder
    newSlug = `/beta/${fileName}`;
  } else {
    // Files in subdirectories
    newSlug = `/beta/${directory}/${fileName}`;
  }
  
  // Update the slug in frontmatter
  const updatedContent = content.replace(
    /slug:\s*["']?([^"'\n]+)["']?/,
    `slug: "${newSlug}"`
  );
  
  // If no slug exists, add it after the id line
  if (!content.includes('slug:')) {
    const updatedWithSlug = updatedContent.replace(
      /(id:\s*[^\n]+)/,
      `$1\nslug: "${newSlug}"`
    );
    fs.writeFileSync(filePath, updatedWithSlug);
  } else {
    fs.writeFileSync(filePath, updatedContent);
  }
  
  console.log(`Updated ${filePath} with slug: ${newSlug}`);
}

// Get all beta markdown files
function getAllBetaFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllBetaFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Update all beta files
const betaFiles = getAllBetaFiles('beta-sider');
betaFiles.forEach(updateBetaSlug);

console.log('✅ All beta page slugs updated to flat Jekyll-style URLs');
