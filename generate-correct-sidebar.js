const fs = require('fs');
const path = require('path');

console.log('🔍 Scanning actual file structure to create correct sidebar...');

// Function to scan directory and get file names without extension
function scanDirectory(dirPath) {
  const items = [];
  if (!fs.existsSync(dirPath)) return items;
  
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const subItems = scanDirectory(filePath);
      if (subItems.length > 0) {
        items.push({
          type: 'category',
          label: file,
          items: subItems
        });
      }
    } else if (file.endsWith('.md') && file !== 'index.md') {
      const id = file.replace('.md', '');
      const folderName = path.basename(dirPath);
      items.push(`${folderName}/${id}`);
    }
  }
  return items;
}

// Scan the actual directory structure
const prodSiderPath = 'prod-sider';
const directories = fs.readdirSync(prodSiderPath).filter(item => 
  fs.statSync(path.join(prodSiderPath, item)).isDirectory()
);

console.log('Found directories:', directories);

const categories = {};

for (const dir of directories) {
  const dirPath = path.join(prodSiderPath, dir);
  const files = fs.readdirSync(dirPath).filter(file => 
    file.endsWith('.md') && file !== 'index.md'
  );
  
  // Only include directories that have files
  if (files.length > 0) {
    categories[dir] = files.map(file => `${dir}/${file.replace('.md', '')}`);
    console.log(`${dir}:`, categories[dir]);
  }
}

// Generate the sidebar based on actual files
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
      label: 'Data for ajourhold av OTP i privat sektor',
      collapsed: true,
      items: [
        ${categories.ajourhold?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Konkursbehandling',
      collapsed: true,
      items: [
        ${categories.konkursbehandling?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Kundeforholdsregister',
      collapsed: true,
      items: [
        ${categories.kundeforholdsregister?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Politi-Utlevering',
      collapsed: true,
      items: [
        ${categories['politi-utlevering']?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Samtykkebasert lånesøknad',
      collapsed: true,
      items: [
        ${categories['samtykkebasert-lanesoknad']?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Syke- og uføreopplysninger fra NAV',
      collapsed: true,
      items: [
        ${categories['syke-og-uforeopplysninger']?.map(id => `'${id}'`).join(',\n        ') || ''}
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
      label: 'Vergekontroll',
      collapsed: true,
      items: [
        ${categories.vergekontroll?.map(id => `'${id}'`).join(',\n        ') || ''}
      ],
    },
  ],
};

export default sidebars;`;

// Write the corrected sidebar
fs.writeFileSync('sidebars.ts', sidebarConfig, 'utf8');
console.log('✅ Generated corrected sidebars.ts based on actual file structure');

console.log('\n📝 Sidebar configuration generated successfully!');
