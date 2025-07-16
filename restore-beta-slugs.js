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
      
      // Add /beta/ prefix back to slugs since routeBasePath is now /
      content = content.replace(/^slug:\s*["']\/(.+)["']/gm, 'slug: "/beta/$1"');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  });
}

updateBetaSlugs('beta-sider');
console.log('Beta slug update complete!');
