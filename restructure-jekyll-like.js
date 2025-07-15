const fs = require('fs');
const path = require('path');

console.log('🏗️ Restructuring folders to match Jekyll structure...');

// Define the Jekyll-like folder structure
const folderStructure = {
  'dsop': {
    folder: 'dsop',
    files: [
      'index.md',
      'dsop_dsop_kontakt.md',
      'dsop_dsop_avtaler_og_juridisk.md',
      'dsop_dsop_fagutvalg.md',
      'dsop_dsop_endringslogg.md',
      'dsop_dsop_nyheter.md'
    ]
  },
  'samtykkebasert-lanesoknad': {
    folder: 'samtykkebasert-lanesoknad',
    files: [
      'dsop_sbl_om.md',
      'dsop_sbl_onboarding.md',
      'dsop_sbl_integrasjonMaskinporten.md',
      'dsop_sbl_integrasjonSamtykkeløsningen.md',
      'dsop_sbl_integrasjonstest.md',
      'dsop_sbl_faq.md',
      'dsop_sbl_endringer.md',
      'dsop_sbl_endringslogg.md',
      'dsop_sbl_listefinansforetak.md'
    ]
  },
  'kontrollinformasjon-fellesstandard': {
    folder: 'kontrollinformasjon-fellesstandard',
    files: [
      'dsop_v2fellesstandard_om.md',
      'dsop_v2fellesstandard_onboarding.md',
      'dsop_v2fellesstandard_test.md',
      'dsop_v2fellesstandard_functionalspecification.md',
      'dsop_v2fellesstandard_specification_of_eoppslag.md',
      'dsop_v2fellesstandard_architecturedocument.md',
      'dsop_v2fellesstandard_securitydesign.md',
      'dsop_v2fellesstandard_datamodel.md',
      'dsop_v2fellesstandard_api_specifications.md',
      'dsop_v2fellesstandard_validation.md',
      'dsop_v2fellesstandard_operational_processes.md',
      'dsop_v2fellesstandard_glossary.md',
      'dsop_v2fellesstandard_faq.md',
      'dsop_v2fellesstandard_changelog.md',
      'dsop_v2fellesstandard_accountdetails.md',
      'dsop_v2fellesstandard_accounts.md',
      'dsop_v2fellesstandard_accountservicingprovider.md',
      'dsop_v2fellesstandard_cards.md',
      'dsop_v2fellesstandard_customerrelationships.md',
      'dsop_v2fellesstandard_roles.md',
      'dsop_v2fellesstandard_transactions.md'
    ]
  },
  'konkursbehandling': {
    folder: 'konkursbehandling',
    files: [
      'dsop_v2konkurs_about.md',
      'dsop_v2konkurs_jurdisk.md',
      'dsop_v2konkurs_løsningsbeskrivelse.md',
      'dsop_v2konkurs_onboarding.md',
      'dsop_v2konkurs_operational_processes.md',
      'dsop_v2konkurs_faq.md',
      'dsop_v2konkurs_changelog.md',
      'dsop_v2konkurs_functionalspecification.md',
      'dsop_v2konkurs_test.md',
      'dsop_v2konkurs_onboarding_konkursvarsel.md'
    ]
  },
  'politi-utlevering': {
    folder: 'politi-utlevering',
    files: [
      'dsop_v2politi-utlevering_about.md',
      'dsop_v2politi-utlevering_juridisk.md',
      'dsop_v2politi-utlevering_løsningsbeskrivelse.md',
      'dsop_v2politi-utlevering_utleveringspålegg.md',
      'dsop_v2politi-utlevering_onboarding.md',
      'dsop_v2politi-utlevering_operational_processes.md',
      'dsop_v2politi-utlevering_faq.md',
      'dsop_v2politi-utlevering_changelog.md',
      'dsop_v2politi-utlevering_test.md'
    ]
  },
  'skatt-kontroll': {
    folder: 'skatt-kontroll',
    files: [
      'dsop_v2kontroll_skatt_about.md',
      'dsop_v2kontroll_skatt_juridisk.md',
      'dsop_v2kontroll_skatt_løsningsbeskrivelse.md',
      'dsop_v2kontroll_skatt_onboarding.md',
      'dsop_v2kontroll_skatt_operational_processes.md',
      'dsop_v2kontroll_skatt_faq.md',
      'dsop_v2kontroll_skatt_changelog.md',
      'dsop_v2kontroll_nav_about.md'
    ]
  },
  'vergekontroll': {
    folder: 'vergekontroll',
    files: [
      'dsop_v2vergekontroll_about.md',
      'dsop_v2vergekontroll_juridisk.md',
      'dsop_v2vergekontroll_løsningsbeskrivelse.md',
      'dsop_v2vergekontroll_onboarding.md',
      'dsop_v2vergekontroll_operational_processes.md',
      'dsop_v2vergekontroll_faq.md',
      'dsop_v2vergekontroll_changelog.md',
      'dsop_v2vergekontroll_test.md',
      'dsop_v2vergekontroll_validation.md'
    ]
  },
  'oppgjor-etter-dodsfall': {
    folder: 'oppgjor-etter-dodsfall',
    files: [
      'dsop_v2oed_about.md',
      'dsop_v2oed_juridisk.md',
      'dsop_v2oed_løsningsbeskrivelse.md',
      'dsop_v2oed_onboarding.md',
      'dsop_v2oed_operational_processes.md',
      'dsop_v2oed_faq.md',
      'dsop_v2oed_changelog.md',
      'dsop_v2oed_test.md',
      'dsop_oed_om.md'
    ]
  },
  'syke-og-uforeopplysninger': {
    folder: 'syke-og-uforeopplysninger',
    files: [
      'dsop_su_om.md',
      'dsop_su_onboarding.md',
      'dsop_su_API_referanse.md',
      'dsop_su_integrasjonstest.md',
      'dsop_su_integrasjonMaskinporten.md',
      'dsop_su_integrasjonSamtykke.md',
      'dsop_su_forvaltningsrutiner.md',
      'dsop_su_faq.md',
      'dsop_su_endringslogg.md',
      'dsop_su_registrering.md'
    ]
  },
  'kundeforholdsregister': {
    folder: 'kundeforholdsregister',
    files: [
      'dsop_kundeforholdsregister_om.md',
      'dsop_kundeforholdsregister_onboarding.md',
      'dsop_oversikt_kfr.html.md',
      'dsop_kundeforholdsregister_faq.md',
      'dsop_kundeforholdsregister_endringslogg.md',
      'dsop_kundeforholdsregister_interntesting.md'
    ]
  },
  'saldo-studielan': {
    folder: 'saldo-studielan',
    files: [
      'dsop_saldostudielan_om.md',
      'dsop_saldostudielan_onboarding.md',
      'dsop_saldostudielan_integrasjonLanekassen.md',
      'dsop_saldostudielan_integrasjonSamtykke.md',
      'dsop_saldostudielan_integrasjonMaskinporten.md',
      'dsop_saldostudielan_informasjonsmodellLanekassen.md',
      'dsop_saldostudielan_integrasjonstest.md',
      'dsop_saldostudielan_logoLanekassen.md',
      'dsop_saldostudielan_faq.md',
      'dsop_saldostudielan_endringslogg.md'
    ]
  },
  'ajourhold': {
    folder: 'ajourhold',
    files: [
      'dsop_ajourhold_om.md',
      'dsop_ajourhold_onboarding.md',
      'dsop_Ajourhold_skatteetaten_api.md',
      'dsop_ajourhold _Nav_api.md',
      'dsop_Ajourhold_Integrasjon_Maskinporten.md',
      'dsop_Ajourhold_Integrasjonstest.md',
      'dsop_ajourhold_Forvaltningsrutiner.md',
      'dsop_ajourhold_faq.md',
      'dsop_ajourhold_endringer.md',
      'dsop_Ajourhold_Endringslogg.md'
    ]
  },
  'fi-krav-betalinger': {
    folder: 'fi-krav-betalinger',
    files: [
      'dsop_fi_om.md',
      'dsop_fi_onboarding.md',
      'dsop_fi_integrasjonMaskinporten.md',
      'dsop_fi_faq.md',
      'dsop_fi_forvaltningsrutiner.md',
      'dsop_fi_endringslogg.md',
      'dsop_fi_endringer.md'
    ]
  },
  'fi-utlegg': {
    folder: 'fi-utlegg',
    files: [
      'dsop_fi-utlegg_om.md',
      'dsop_fi-utlegg_juridisk.md',
      'dsop_fi-utlegg_løsningsbeskrivelse_saldo.md',
      'dsop_fi-utlegg_løsningsbeskrivelse_notification.md',
      'dsop_fi-utlegg_onboarding.md',
      'dsop_fi-utlegg_operational_processes.md',
      'dsop_fi-utlegg_changelog.md'
    ]
  },
  'transportloyvegaranti': {
    folder: 'transportloyvegaranti',
    files: [
      'dsop_transportloyvegaranti_om.md',
      'dsop_transportloyvegaranti_onboarding.md'
    ]
  },
  'digital-eiendomshandel': {
    folder: 'digital-eiendomshandel',
    files: [
      'dsop_digitaleiendomshandel_om.md',
      'dsop_digitaleiendomshandel_endringslogg.md'
    ]
  },
  'digital-selskapsetablering': {
    folder: 'digital-selskapsetablering',
    files: [
      'dsop_dse_om.md'
    ]
  },
  'altinn3': {
    folder: 'altinn3',
    files: [
      'dsop_altinn3.0_about.md',
      'dsop_altinn3.0_tilgangspakker.md',
      'dsop_altinn3.0_samtykkeløsningen.md',
      'dsop_altinn3.0_systembruker.md',
      'dsop_altinn3.0_dialogporten.md',
      'dsop_altinn3.0_innboks.md'
    ]
  }
};

// Beta folder structure
const betaFolderStructure = {
  'beta': {
    folder: 'beta',
    files: [
      'index.md',
      'dsop_beta_om.md'
    ]
  },
  'skatt-kontroll-beta': {
    folder: 'skatt-kontroll-beta',
    files: [
      'dsop_v2kontroll_skatt_about_BETA.md',
      'dsop_v2kontroll_skatt_juridisk_BETA.md',
      'dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.md',
      'dsop_v2kontroll_skatt_onboarding_BETA.md',
      'dsop_v2kontroll_skatt_operational_processes_BETA.md',
      'dsop_v2kontroll_skatt_faq_BETA.md',
      'dsop_v2kontroll_skatt_changelog_BETA.md'
    ]
  }
};

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dirPath}`);
  }
}

// Function to move file if it exists
function moveFileIfExists(sourcePath, targetPath) {
  if (fs.existsSync(sourcePath)) {
    ensureDirectoryExists(path.dirname(targetPath));
    fs.renameSync(sourcePath, targetPath);
    console.log(`📁 Moved: ${path.basename(sourcePath)} → ${path.relative(process.cwd(), targetPath)}`);
    return true;
  }
  return false;
}

// Restructure prod-sider
console.log('\n📂 Restructuring prod-sider...');
for (const [structureName, structure] of Object.entries(folderStructure)) {
  const targetDir = path.join('prod-sider', structure.folder);
  ensureDirectoryExists(targetDir);
  
  for (const fileName of structure.files) {
    const sourcePath = path.join('prod-sider', fileName);
    const targetPath = path.join(targetDir, fileName);
    moveFileIfExists(sourcePath, targetPath);
  }
}

// Restructure beta-sider
console.log('\n📂 Restructuring beta-sider...');
for (const [structureName, structure] of Object.entries(betaFolderStructure)) {
  const targetDir = path.join('beta-sider', structure.folder);
  ensureDirectoryExists(targetDir);
  
  for (const fileName of structure.files) {
    const sourcePath = path.join('beta-sider', fileName);
    const targetPath = path.join(targetDir, fileName);
    moveFileIfExists(sourcePath, targetPath);
  }
}

// Move any remaining files to appropriate locations
console.log('\n📂 Moving remaining files...');

// Move remaining prod-sider files to 'legacy' folder if any
try {
  const prodSiderFiles = fs.readdirSync('prod-sider').filter(file => 
    fs.statSync(path.join('prod-sider', file)).isFile()
  );

  if (prodSiderFiles.length > 0) {
    const legacyDir = path.join('prod-sider', 'legacy');
    ensureDirectoryExists(legacyDir);
    
    for (const file of prodSiderFiles) {
      const sourcePath = path.join('prod-sider', file);
      const targetPath = path.join(legacyDir, file);
      moveFileIfExists(sourcePath, targetPath);
    }
  }
} catch (error) {
  console.log('Note: Some files may have already been moved or organized');
}

console.log('\n✅ Folder restructuring completed!');
console.log('\n📋 Next steps:');
console.log('1. Update sidebars.ts to match new folder structure');
console.log('2. Update sidebars-beta.ts for beta structure');
console.log('3. Update all internal links in markdown files');
console.log('4. Test navigation and ensure all links work');
