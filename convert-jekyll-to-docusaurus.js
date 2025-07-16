const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Convert Jekyll frontmatter to Docusaurus frontmatter
 */
function convertFrontmatter(jekyllFrontmatter, filePath) {
  const docusaurusFrontmatter = {
    title: jekyllFrontmatter.title || 'Untitled',
  };

  // Use permalink as the slug to maintain URLs
  if (jekyllFrontmatter.permalink) {
    docusaurusFrontmatter.slug = jekyllFrontmatter.permalink.replace('.html', '');
    docusaurusFrontmatter.id = jekyllFrontmatter.permalink.replace('.html', '').replace('/', '');
  } else {
    const fileName = path.basename(filePath, '.md');
    docusaurusFrontmatter.slug = fileName;
    docusaurusFrontmatter.id = fileName;
  }

  // Add description if available
  if (jekyllFrontmatter.description) {
    docusaurusFrontmatter.description = jekyllFrontmatter.description;
  }

  // Add keywords if available
  if (jekyllFrontmatter.keywords) {
    if (Array.isArray(jekyllFrontmatter.keywords)) {
      docusaurusFrontmatter.keywords = jekyllFrontmatter.keywords;
    } else {
      docusaurusFrontmatter.keywords = [jekyllFrontmatter.keywords];
    }
  }

  // Add tags if available
  if (jekyllFrontmatter.tags) {
    docusaurusFrontmatter.tags = jekyllFrontmatter.tags;
  }

  return docusaurusFrontmatter;
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(filePath, outputDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter with more flexible regex
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.warn(`No frontmatter found in ${filePath}`);
    // Still process the file by creating basic frontmatter
    const fileName = path.basename(filePath, '.md');
    const title = fileName.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const basicFrontmatter = {
      title: title,
      id: fileName,
      slug: fileName,
    };
    
    const newFrontmatter = yaml.dump(basicFrontmatter, { 
      quotingType: '"',
      forceQuotes: true 
    });
    
    const newContent = `---\n${newFrontmatter}---\n\n${content}`;
    
    const outputPath = path.join(outputDir, path.basename(filePath));
    fs.writeFileSync(outputPath, newContent);
    console.log(`Converted (no frontmatter): ${filePath} -> ${outputPath}`);
    return;
  }

  const [, frontmatterStr, markdownContent] = frontmatterMatch;
  
  let jekyllFrontmatter;
  try {
    jekyllFrontmatter = yaml.load(frontmatterStr);
  } catch (error) {
    console.error(`Error parsing frontmatter in ${filePath}:`, error);
    return;
  }
  
  // Convert frontmatter
  const docusaurusFrontmatter = convertFrontmatter(jekyllFrontmatter, filePath);
  
  // Create new content with Docusaurus frontmatter
  const newFrontmatter = yaml.dump(docusaurusFrontmatter, { 
    quotingType: '"',
    forceQuotes: true 
  });
  
  const newContent = `---\n${newFrontmatter}---\n\n${markdownContent}`;
  
  // Use original filename for output
  const fileName = path.basename(filePath);
  const outputPath = path.join(outputDir, fileName);
  
  // Write the converted file
  fs.writeFileSync(outputPath, newContent);
  console.log(`Converted: ${filePath} -> ${outputPath}`);
}

/**
 * Process all markdown files in a directory recursively
 */
function processDirectory(dirPath, outputDir) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath, outputDir);
    } else if (entry.isFile() && path.extname(entry.name) === '.md') {
      processMarkdownFile(fullPath, outputDir);
    }
  }
}

/**
 * Convert Jekyll sidebar YAML to Docusaurus sidebar format
 */
function convertSidebar(sidebarYamlPath, outputPath) {
  const yamlContent = fs.readFileSync(sidebarYamlPath, 'utf-8');
  const sidebarData = yaml.load(yamlContent);
  
  function convertSidebarItem(item) {
    if (item.url) {
      const docId = item.url.replace('.html', '').replace('/', '');
      return {
        type: 'doc',
        id: docId,
        label: item.title,
      };
    } else if (item.external_url) {
      // Check if it's a valid external URL
      if (item.external_url.startsWith('http://') || item.external_url.startsWith('https://')) {
        return {
          type: 'link',
          label: item.title,
          href: item.external_url,
        };
      } else {
        // Skip invalid URLs like local file paths
        console.warn(`Skipping invalid external URL: ${item.external_url}`);
        return null;
      }
    } else if (item.folderitems || item.subfolders) {
      const items = [];
      
      if (item.folderitems) {
        items.push(...item.folderitems.map(convertSidebarItem).filter(Boolean));
      }
      
      if (item.subfolders) {
        for (const subfolder of item.subfolders) {
          const subItems = subfolder.subfolderitems?.map(convertSidebarItem).filter(Boolean) || [];
          if (subItems.length > 0) {
            items.push({
              type: 'category',
              label: subfolder.title,
              items: subItems,
            });
          }
        }
      }
      
      return {
        type: 'category',
        label: item.title,
        items,
      };
    }
    
    return null;
  }
  
  const docusaurusSidebar = {};
  
  for (const entry of sidebarData.entries) {
    const sidebarItems = [];
    
    for (const folder of entry.folders) {
      const convertedItem = convertSidebarItem(folder);
      if (convertedItem) {
        sidebarItems.push(convertedItem);
      }
    }
    
    docusaurusSidebar.mainSidebar = sidebarItems;
  }
  
  // Write the TypeScript sidebar file
  const sidebarContent = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = ${JSON.stringify(docusaurusSidebar, null, 2)};

export default sidebars;
`;
  
  fs.writeFileSync(outputPath, sidebarContent);
  console.log(`Converted sidebar: ${sidebarYamlPath} -> ${outputPath}`);
}

// Main execution
console.log('Starting Jekyll to Docusaurus conversion...');

// Create output directories
if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs');
}
if (!fs.existsSync('docs-beta')) {
  fs.mkdirSync('docs-beta');
}

// Process all pages in the pages directory
console.log('\nProcessing pages...');
processDirectory('pages', 'docs');

// Convert sidebars
console.log('\nConverting sidebars...');
if (fs.existsSync('main_sidebar.yml')) {
  convertSidebar('main_sidebar.yml', 'sidebars.ts');
}
if (fs.existsSync('beta_sidebar.yml')) {
  convertSidebar('beta_sidebar.yml', 'sidebars-beta.ts');
}

console.log('\nConversion complete!');
console.log('\nNext steps:');
console.log('1. Review the generated docs/ and docs-beta/ directories');
console.log('2. Test your site with: npm run start');
console.log('3. Check that URLs match your Jekyll site structure');
