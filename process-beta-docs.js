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
function processMarkdownFile(filePath) {
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
    
    fs.writeFileSync(filePath, newContent);
    console.log(`Converted (no frontmatter): ${filePath}`);
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
  
  // Write the converted file
  fs.writeFileSync(filePath, newContent);
  console.log(`Converted: ${filePath}`);
}

// Process all files in docs-beta directory
const docsBetaFiles = fs.readdirSync('docs-beta').filter(file => file.endsWith('.md'));

console.log('Processing beta docs...');
docsBetaFiles.forEach(file => {
  processMarkdownFile(path.join('docs-beta', file));
});

console.log('Beta docs conversion complete!');
