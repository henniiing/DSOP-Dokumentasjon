const fs = require('fs');
const path = require('path');

console.log('📄 Creating index files for each category...');

// Define index content for each category
const indexFiles = {
  'prod-sider/dsop/index.md': {
    title: 'Om DSOP-prosjektene',
    description: 'Digital Samhandling Offentlig-Privat (DSOP) er en felles betegnelse på prosjektene som digitaliserer informasjonsutveksling mellom offentlig og privat sektor.',
    content: `---
id: index
title: Om DSOP-prosjektene
sidebar_label: Om DSOP-prosjektene
---

# Om DSOP-prosjektene

Digital Samhandling Offentlig-Privat (DSOP) er en felles betegnelse på prosjektene som digitaliserer informasjonsutveksling mellom offentlig og privat sektor.

DSOP-prosjektene har som mål å:

- Redusere kostnadene for både offentlig og privat sektor
- Øke kvaliteten på informasjonen som utveksles
- Redusere tiden det tar å få tilgang til informasjon
- Gjøre prosessene mer effektive og sikre

## Aktuelle tjenester

DSOP omfatter flere tjenester som er i ulike faser av utvikling og produksjon. Se navigasjonsmenyen for detaljert informasjon om hver tjeneste.

## Kontakt

For spørsmål om DSOP-prosjektene, se [kontaktinformasjon](dsop_dsop_kontakt).
`
  },
  
  'beta-sider/beta/index.md': {
    title: 'Beta-tjenester',
    content: `---
id: index
title: Beta-tjenester
sidebar_label: Beta-tjenester
---

# Beta-tjenester

Velkommen til beta-versjonen av DSOP-dokumentasjonen.

Her finner du dokumentasjon for tjenester som er under utvikling eller testing.

## Om betasiden

Se [bruk av betasiden](dsop_beta_om) for mer informasjon om hvordan du bruker beta-dokumentasjonen.
`
  }
};

// Create index files
for (const [filePath, config] of Object.entries(indexFiles)) {
  const fullPath = path.resolve(filePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the index file
  fs.writeFileSync(fullPath, config.content, 'utf8');
  console.log(`✅ Created index file: ${filePath}`);
}

console.log('\n✅ Index files created successfully!');
