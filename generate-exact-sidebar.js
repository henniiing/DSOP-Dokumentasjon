const fs = require('fs');
const path = require('path');

console.log('🔍 Creating exact sidebar based on actual document IDs...');

// Function to get document ID from a markdown file
function getDocumentId(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for frontmatter id
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const idMatch = frontmatter.match(/^id:\s*"?([^"\n]+)"?/m);
      if (idMatch) {
        return idMatch[1];
      }
      
      const slugMatch = frontmatter.match(/^slug:\s*"?([^"\n]+)"?/m);
      if (slugMatch) {
        return slugMatch[1];
      }
    }
    
    // Fall back to filename without extension
    return path.basename(filePath, '.md');
  } catch (error) {
    console.log(`Warning: Could not read ${filePath}:`, error.message);
    return path.basename(filePath, '.md');
  }
}

// Function to scan directory and get document IDs
function scanDirectoryForDocIds(dirPath) {
  const items = [];
  if (!fs.existsSync(dirPath)) return items;
  
  const files = fs.readdirSync(dirPath).filter(file => 
    file.endsWith('.md') && file !== 'index.md'
  );
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const docId = getDocumentId(filePath);
    const folderName = path.basename(dirPath);
    items.push(`${folderName}/${docId}`);
  }
  
  return items;
}

// Scan the actual directory structure
const prodSiderPath = 'prod-sider';
const directories = fs.readdirSync(prodSiderPath).filter(item => 
  fs.statSync(path.join(prodSiderPath, item)).isDirectory() && item !== 'legacy'
);

console.log('Found directories:', directories);

const categories = {};

for (const dir of directories) {
  const dirPath = path.join(prodSiderPath, dir);
  const docIds = scanDirectoryForDocIds(dirPath);
  
  // Only include directories that have files
  if (docIds.length > 0) {
    categories[dir] = docIds;
    console.log(`${dir}:`, categories[dir]);
  }
}

// Generate the sidebar based on actual document IDs
const sidebarConfig = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'DSOP',
      collapsed: false,
      items: [
        'dsop/index',
        ${categories.dsop?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Samtykkebasert lånesøknad',
      collapsed: true,
      items: [
        ${categories['samtykkebasert-lanesoknad']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Kontrollinformasjon Fellesstandard',
      collapsed: true,
      items: [
        ${categories['kontrollinformasjon-fellesstandard']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Konkursbehandling',
      collapsed: true,
      items: [
        ${categories.konkursbehandling?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Politi-Utlevering',
      collapsed: true,
      items: [
        ${categories['politi-utlevering']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Skatt-Kontroll',
      collapsed: true,
      items: [
        ${categories['skatt-kontroll']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Vergekontroll',
      collapsed: true,
      items: [
        ${categories.vergekontroll?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Oppgjør etter dødsfall',
      collapsed: true,
      items: [
        ${categories['oppgjor-etter-dodsfall']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Syke- og uføreopplysninger fra NAV',
      collapsed: true,
      items: [
        ${categories['syke-og-uforeopplysninger']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Kundeforholdsregister',
      collapsed: true,
      items: [
        ${categories.kundeforholdsregister?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Saldo på studielån',
      collapsed: true,
      items: [
        ${categories['saldo-studielan']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Data for ajourhold av OTP i privat sektor',
      collapsed: true,
      items: [
        ${categories.ajourhold?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'FI - Krav og betalinger',
      collapsed: true,
      items: [
        ${categories['fi-krav-betalinger']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'FI-utlegg',
      collapsed: true,
      items: [
        ${categories['fi-utlegg']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Transportløyvegaranti',
      collapsed: true,
      items: [
        ${categories.transportloyvegaranti?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Digital samhandling ved eiendomshandel',
      collapsed: true,
      items: [
        ${categories['digital-eiendomshandel']?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
    {
      type: 'category',
      label: 'Altinn 3.0',
      collapsed: true,
      items: [
        ${categories.altinn3?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
  ],
};

export default sidebars;`;

// Write the corrected sidebar
fs.writeFileSync('sidebars.ts', sidebarConfig, 'utf8');
console.log('✅ Generated corrected sidebars.ts based on actual document IDs');

console.log('\n📝 Sidebar configuration generated successfully!');
