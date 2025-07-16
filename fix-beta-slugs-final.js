const fs = require('fs');
const path = require('path');

function removeBetaPrefixFromSlugs(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      removeBetaPrefixFromSlugs(filePath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Remove /beta/ prefix from slugs - handle both single and double quotes
      content = content.replace(/^slug:\s*["']\/beta\/(.+)["']/gm, 'slug: "/$1"');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      } else {
        console.log(`No changes needed: ${filePath}`);
      }
    }
  });
}

removeBetaPrefixFromSlugs('beta-sider');
console.log('Done processing all files!');
