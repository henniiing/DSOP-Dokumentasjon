const fs = require('fs');
const path = require('path');

function updateBetaSlugs(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateBetaSlugs(filePath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove /beta/ prefix from slugs since routeBasePath handles it
      content = content.replace(/^slug:\s*["']\/beta\/(.+)["']/gm, 'slug: "/$1"');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  });
}

updateBetaSlugs('beta-sider');
console.log('Beta slug update complete!');
