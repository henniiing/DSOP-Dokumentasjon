const fs = require('fs');
const path = require('path');

// Fix frontmatter for beta documents
const betaDir = 'beta-sider/skatt-kontroll-beta';
const files = [
  {
    filename: 'dsop_v2kontroll_skatt_about_BETA.md',
    title: 'Om Skatt-Kontroll BETA',
    position: 1
  },
  {
    filename: 'dsop_v2kontroll_skatt_juridisk_BETA.md',
    title: 'Juridiske rammebetingelser - Skatt Kontroll BETA',
    position: 2
  },
  {
    filename: 'dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.md',
    title: 'Løsningsbeskrivelse - Skatt Kontroll BETA',
    position: 3
  },
  {
    filename: 'dsop_v2kontroll_skatt_onboarding_BETA.md',
    title: 'Onboarding for datakilder - Skatt Kontroll BETA',
    position: 4
  },
  {
    filename: 'dsop_v2kontroll_skatt_operational_processes_BETA.md',
    title: 'Forvaltningsrutiner - Skatt Kontroll BETA',
    position: 5
  },
  {
    filename: 'dsop_v2kontroll_skatt_faq_BETA.md',
    title: 'FAQ - Skatt Kontroll BETA',
    position: 6
  },
  {
    filename: 'dsop_v2kontroll_skatt_changelog_BETA.md',
    title: 'Endringslogg - Skatt Kontroll BETA',
    position: 7
  }
];

files.forEach(file => {
  const filePath = path.join(betaDir, file.filename);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the content after frontmatter
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      const bodyContent = content.substring(frontmatterEnd + 3);
      
      // Create new frontmatter
      const id = file.filename.replace('.md', '');
      const newFrontmatter = `---
title: "${file.title}"
id: ${id}
slug: ${id}
keywords: ["skatt", "kontroll", "beta"]
sidebar_position: ${file.position}
---`;
      
      // Combine new frontmatter with body content
      const newContent = newFrontmatter + bodyContent;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed frontmatter for ${file.filename}`);
    }
  }
});

console.log('Beta frontmatter fixes completed!');
