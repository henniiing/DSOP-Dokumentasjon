const fs = require('fs');
const path = require('path');

function getDocumentIdFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      
      // Check for id field
      const idMatch = frontmatter.match(/^id:\s*(.+)$/m);
      if (idMatch) {
        return idMatch[1].trim().replace(/['"]/g, '');
      }
      
      // Check for slug field  
      const slugMatch = frontmatter.match(/^slug:\s*(.+)$/m);
      if (slugMatch) {
        return slugMatch[1].trim().replace(/['"]/g, '');
      }
    }
    
    // Default to filename without extension
    const filename = path.basename(filePath, '.md');
    const dirname = path.basename(path.dirname(filePath));
    return `${dirname}/${filename}`;
  } catch (error) {
    console.log(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

function getValidDocIds() {
  const prodSiderPath = 'prod-sider';
  const validIds = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.md')) {
        const docId = getDocumentIdFromFile(itemPath);
        if (docId) {
          validIds.push(docId);
        }
      }
    }
  }
  
  scanDirectory(prodSiderPath);
  return validIds.sort();
}

function createValidSidebar() {
  const validIds = getValidDocIds();
  console.log('Valid document IDs found:', validIds.length);
  
  // Filter IDs by category
  const categories = {
    dsop: validIds.filter(id => id.startsWith('dsop/') && !id.includes('index')),
    'samtykkebasert-lanesoknad': validIds.filter(id => id.startsWith('samtykkebasert-lanesoknad/')),
    'kontrollinformasjon-fellesstandard': validIds.filter(id => id.startsWith('kontrollinformasjon-fellesstandard/')),
    konkursbehandling: validIds.filter(id => id.startsWith('konkursbehandling/')),
    'politi-utlevering': validIds.filter(id => id.startsWith('politi-utlevering/')),
    'skatt-kontroll': validIds.filter(id => id.startsWith('skatt-kontroll/')),
    vergekontroll: validIds.filter(id => id.startsWith('vergekontroll/')),
    'oppgjor-etter-dodsfall': validIds.filter(id => id.startsWith('oppgjor-etter-dodsfall/')),
    'syke-og-uforeopplysninger': validIds.filter(id => id.startsWith('syke-og-uforeopplysninger/')),
    kundeforholdsregister: validIds.filter(id => id.startsWith('kundeforholdsregister/')),
    'saldo-studielan': validIds.filter(id => id.startsWith('saldo-studielan/')),
    ajourhold: validIds.filter(id => id.startsWith('ajourhold/')),
    'fi-krav-betalinger': validIds.filter(id => id.startsWith('fi-krav-betalinger/')),
    'fi-utlegg': validIds.filter(id => id.startsWith('fi-utlegg/')),
    transportloyvegaranti: validIds.filter(id => id.startsWith('transportloyvegaranti/')),
    'digital-eiendomshandel': validIds.filter(id => id.startsWith('digital-eiendomshandel/')),
    altinn3: validIds.filter(id => id.startsWith('altinn3/')),
    legacy: validIds.filter(id => id.startsWith('legacy/'))
  };

  const sidebarContent = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    ${Object.entries(categories).filter(([_, items]) => items.length > 0 && !['legacy'].includes(_)).map(([category, items]) => {
      const categoryName = {
        'dsop': 'DSOP',
        'samtykkebasert-lanesoknad': 'Samtykkebasert Lånesøknad',
        'kontrollinformasjon-fellesstandard': 'Kontrollinformasjon Fellesstandard',
        'konkursbehandling': 'Konkursbehandling',
        'politi-utlevering': 'Politi Utlevering',
        'skatt-kontroll': 'Skatt Kontroll',
        'vergekontroll': 'Vergekontroll',
        'oppgjor-etter-dodsfall': 'Oppgjør etter Dødsfall',
        'syke-og-uforeopplysninger': 'Syke- og Uføreopplysninger',
        'kundeforholdsregister': 'Kundeforholdsregister',
        'saldo-studielan': 'Saldo Studielån',
        'ajourhold': 'Ajourhold',
        'fi-krav-betalinger': 'FI Krav & Betalinger',
        'fi-utlegg': 'FI Utlegg',
        'transportloyvegaranti': 'Transportløyvegaranti',
        'digital-eiendomshandel': 'Digital Eiendomshandel',
        'altinn3': 'Altinn 3.0'
      }[category] || category;
      
      return `{
      type: 'category',
      label: '${categoryName}',
      items: [
        ${items.map(id => `'${id}'`).join(',\n        ')}
      ],
    }`;
    }).join(',\n    ')}${categories.legacy.length > 0 ? `,
    {
      type: 'category',
      label: 'Legacy Documentation',
      collapsed: true,
      items: [
        ${categories.legacy.map(id => `'${id}'`).join(',\n        ')}
      ],
    }` : ''}
  ],
};

export default sidebars;
`;

  fs.writeFileSync('./sidebars.ts', sidebarContent);
  console.log('✅ Generated valid sidebars.ts');
  
  // Log first few valid IDs for verification
  console.log('Sample valid IDs:');
  validIds.slice(0, 10).forEach(id => console.log(`  - ${id}`));
}

createValidSidebar();
