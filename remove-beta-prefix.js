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
      
      // Remove /beta/ prefix from slugs completely
      content = content.replace(/^slug:\s*["']\/beta\/(.+)["']/gm, 'slug: "/$1"');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  });
}

removeBetaPrefixFromSlugs('beta-sider');
console.log('Removed /beta/ prefix from all slugs!');
