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

// Function to fix email links in a file
function fixEmailLinks(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Fix malformed email links like [text](dsop@bits.no) to [text](mailto:dsop@bits.no)
    const emailLinkRegex = /\[([^\]]+)\]\(([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\)/g;
    updatedContent = updatedContent.replace(emailLinkRegex, (match, text, email) => {
      if (!email.startsWith('mailto:')) {
        hasChanges = true;
        return `[${text}](mailto:${email})`;
      }
      return match;
    });

    // Fix standalone email references that should be links
    const standaloneEmailRegex = /(?<!\]\(mailto:)(?<!\]\()(?<![a-zA-Z0-9._%+-])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![a-zA-Z0-9._%+-])/g;
    updatedContent = updatedContent.replace(standaloneEmailRegex, (match, email) => {
      // Don't replace if it's already part of a mailto link or other link
      if (!match.includes('mailto:') && !match.includes('](')) {
        hasChanges = true;
        return `[${email}](mailto:${email})`;
      }
      return match;
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

console.log('Fixing email links...');

for (const dir of directories) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const mdFiles = findMdFiles(dirPath);
    console.log(`Checking ${mdFiles.length} .md files in ${dir}`);
    
    for (const file of mdFiles) {
      if (fixEmailLinks(file)) {
        totalUpdated++;
      }
    }
  } else {
    console.log(`Directory ${dir} not found, skipping...`);
  }
}

console.log(`\nEmail link fix completed!`);
console.log(`Total files updated: ${totalUpdated}`);
