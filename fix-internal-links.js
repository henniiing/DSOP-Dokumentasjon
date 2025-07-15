const fs = require('fs');
const path = require('path');

console.log('🔗 Fixing internal links to match new folder structure...');

// Define the mapping from old URLs to new paths
const urlMapping = {
  // DSOP main pages
  '/index.html': '/dsop/index',
  '/dsop_dsop_kontakt.html': '/dsop/dsop_dsop_kontakt',
  '/dsop_dsop_avtaler_og_juridisk.html': '/dsop/dsop_dsop_avtaler_og_juridisk',
  '/dsop_dsop_fagutvalg.html': '/dsop/dsop_dsop_fagutvalg',
  '/dsop_dsop_endringslogg.html': '/dsop/dsop_dsop_endringslogg',
  
  // Samtykkebasert lånesøknad
  '/dsop_sbl_om.html': '/samtykkebasert-lanesoknad/dsop_sbl_om',
  '/dsop_sbl_onboarding.html': '/samtykkebasert-lanesoknad/dsop_sbl_onboarding',
  '/dsop_sbl_integrasjonMaskinporten.html': '/samtykkebasert-lanesoknad/dsop_sbl_integrasjonMaskinporten',
  '/dsop_sbl_integrasjonSamtykkeløsningen.html': '/samtykkebasert-lanesoknad/dsop_sbl_integrasjonSamtykkeløsningen',
  '/dsop_sbl_integrasjonstest.html': '/samtykkebasert-lanesoknad/dsop_sbl_integrasjonstest',
  '/dsop_sbl_faq.html': '/samtykkebasert-lanesoknad/dsop_sbl_faq',
  '/dsop_sbl_endringer.html': '/samtykkebasert-lanesoknad/dsop_sbl_endringer',
  '/dsop_sbl_endringslogg.html': '/samtykkebasert-lanesoknad/dsop_sbl_endringslogg',
  
  // Kontrollinformasjon Fellesstandard
  '/dsop_v2fellesstandard_om.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_om',
  '/dsop_v2fellesstandard_onboarding.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_onboarding',
  '/dsop_v2fellesstandard_test.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_test',
  '/dsop_v2fellesstandard_functionalspecification.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_functionalspecification',
  '/dsop_v2fellesstandard_specification_of_eoppslag.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_specification_of_eoppslag',
  '/dsop_v2fellesstandard_architecturedocument.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_architecturedocument',
  '/dsop_v2fellesstandard_securitydesign.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_securitydesign',
  '/dsop_v2fellesstandard_datamodel.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_datamodel',
  '/dsop_v2fellesstandard_api_specifications.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_api_specifications',
  '/dsop_v2fellesstandard_validation.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_validation',
  '/dsop_v2fellesstandard_operational_processes.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_operational_processes',
  '/dsop_v2fellesstandard_glossary.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_glossary',
  '/dsop_v2fellesstandard_faq.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_faq',
  '/dsop_v2fellesstandard_changelog.html': '/kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_changelog',
  
  // Konkursbehandling
  '/dsop_v2konkurs_about.html': '/konkursbehandling/dsop_v2konkurs_about',
  '/dsop_v2konkurs_jurdisk.html': '/konkursbehandling/dsop_v2konkurs_jurdisk',
  '/dsop_v2konkurs_løsningsbeskrivelse.html': '/konkursbehandling/dsop_v2konkurs_løsningsbeskrivelse',
  '/dsop_v2konkurs_onboarding.html': '/konkursbehandling/dsop_v2konkurs_onboarding',
  '/dsop_v2konkurs_operational_processes.html': '/konkursbehandling/dsop_v2konkurs_operational_processes',
  '/dsop_v2konkurs_faq.html': '/konkursbehandling/dsop_v2konkurs_faq',
  '/dsop_v2konkurs_changelog.html': '/konkursbehandling/dsop_v2konkurs_changelog',
  
  // Politi-Utlevering
  '/dsop_v2politi-utlevering_about.html': '/politi-utlevering/dsop_v2politi-utlevering_about',
  '/dsop_v2politi-utlevering_juridisk.html': '/politi-utlevering/dsop_v2politi-utlevering_juridisk',
  '/dsop_v2politi-utlevering_løsningsbeskrivelse.html': '/politi-utlevering/dsop_v2politi-utlevering_løsningsbeskrivelse',
  '/dsop_v2politi-utlevering_utleveringspålegg.html': '/politi-utlevering/dsop_v2politi-utlevering_utleveringspålegg',
  '/dsop_v2politi-utlevering_onboarding.html': '/politi-utlevering/dsop_v2politi-utlevering_onboarding',
  '/dsop_v2politi-utlevering_operational_processes.html': '/politi-utlevering/dsop_v2politi-utlevering_operational_processes',
  '/dsop_v2politi-utlevering_faq.html': '/politi-utlevering/dsop_v2politi-utlevering_faq',
  '/dsop_v2politi-utlevering_changelog.html': '/politi-utlevering/dsop_v2politi-utlevering_changelog',
  
  // Skatt-Kontroll
  '/dsop_v2kontroll_skatt_about.html': '/skatt-kontroll/dsop_v2kontroll_skatt_about',
  '/dsop_v2kontroll_skatt_juridisk.html': '/skatt-kontroll/dsop_v2kontroll_skatt_juridisk',
  '/dsop_v2kontroll_skatt_løsningsbeskrivelse.html': '/skatt-kontroll/dsop_v2kontroll_skatt_løsningsbeskrivelse',
  '/dsop_v2kontroll_skatt_onboarding.html': '/skatt-kontroll/dsop_v2kontroll_skatt_onboarding',
  '/dsop_v2kontroll_skatt_operational_processes.html': '/skatt-kontroll/dsop_v2kontroll_skatt_operational_processes',
  '/dsop_v2kontroll_skatt_faq.html': '/skatt-kontroll/dsop_v2kontroll_skatt_faq',
  '/dsop_v2kontroll_skatt_changelog.html': '/skatt-kontroll/dsop_v2kontroll_skatt_changelog',
  
  // Vergekontroll
  '/dsop_v2vergekontroll_about.html': '/vergekontroll/dsop_v2vergekontroll_about',
  '/dsop_v2vergekontroll_juridisk.html': '/vergekontroll/dsop_v2vergekontroll_juridisk',
  '/dsop_v2vergekontroll_løsningsbeskrivelse.html': '/vergekontroll/dsop_v2vergekontroll_løsningsbeskrivelse',
  '/dsop_v2vergekontroll_onboarding.html': '/vergekontroll/dsop_v2vergekontroll_onboarding',
  '/dsop_v2vergekontroll_operational_processes.html': '/vergekontroll/dsop_v2vergekontroll_operational_processes',
  '/dsop_v2vergekontroll_faq.html': '/vergekontroll/dsop_v2vergekontroll_faq',
  '/dsop_v2vergekontroll_changelog.html': '/vergekontroll/dsop_v2vergekontroll_changelog',
  
  // Oppgjør etter dødsfall
  '/dsop_v2oed_about.html': '/oppgjor-etter-dodsfall/dsop_v2oed_about',
  '/dsop_v2oed_juridisk.html': '/oppgjor-etter-dodsfall/dsop_v2oed_juridisk',
  '/dsop_v2oed_løsningsbeskrivelse.html': '/oppgjor-etter-dodsfall/dsop_v2oed_løsningsbeskrivelse',
  '/dsop_v2oed_onboarding.html': '/oppgjor-etter-dodsfall/dsop_v2oed_onboarding',
  '/dsop_v2oed_operational_processes.html': '/oppgjor-etter-dodsfall/dsop_v2oed_operational_processes',
  '/dsop_v2oed_faq.html': '/oppgjor-etter-dodsfall/dsop_v2oed_faq',
  '/dsop_v2oed_changelog.html': '/oppgjor-etter-dodsfall/dsop_v2oed_changelog',
  
  // Syke- og uføreopplysninger
  '/dsop_su_om.html': '/syke-og-uforeopplysninger/dsop_su_om',
  '/dsop_su_onboarding.html': '/syke-og-uforeopplysninger/dsop_su_onboarding',
  '/dsop_su_API_referanse.html': '/syke-og-uforeopplysninger/dsop_su_API_referanse',
  '/dsop_su_integrasjonstest.html': '/syke-og-uforeopplysninger/dsop_su_integrasjonstest',
  '/dsop_su_integrasjonMaskinporten.html': '/syke-og-uforeopplysninger/dsop_su_integrasjonMaskinporten',
  '/dsop_su_integrasjonSamtykke.html': '/syke-og-uforeopplysninger/dsop_su_integrasjonSamtykke',
  '/dsop_su_forvaltningsrutiner.html': '/syke-og-uforeopplysninger/dsop_su_forvaltningsrutiner',
  '/dsop_su_faq.html': '/syke-og-uforeopplysninger/dsop_su_faq',
  '/dsop_su_endringslogg.html': '/syke-og-uforeopplysninger/dsop_su_endringslogg',
  
  // Kundeforholdsregister
  '/dsop_kundeforholdsregister_om.html': '/kundeforholdsregister/dsop_kundeforholdsregister_om',
  '/dsop_kundeforholdsregister_onboarding.html': '/kundeforholdsregister/dsop_kundeforholdsregister_onboarding',
  '/dsop_oversikt_kfr.html': '/kundeforholdsregister/dsop_oversikt_kfr.html',
  '/dsop_kundeforholdsregister_faq.html': '/kundeforholdsregister/dsop_kundeforholdsregister_faq',
  '/dsop_kundeforholdsregister_endringslogg.html': '/kundeforholdsregister/dsop_kundeforholdsregister_endringslogg',
  
  // Saldo på studielån
  '/dsop_saldostudielan_om.html': '/saldo-studielan/dsop_saldostudielan_om',
  '/dsop_saldostudielan_onboarding.html': '/saldo-studielan/dsop_saldostudielan_onboarding',
  '/dsop_saldostudielan_integrasjonLanekassen.html': '/saldo-studielan/dsop_saldostudielan_integrasjonLanekassen',
  '/dsop_saldostudielan_integrasjonSamtykke.html': '/saldo-studielan/dsop_saldostudielan_integrasjonSamtykke',
  '/dsop_saldostudielan_integrasjonMaskinporten.html': '/saldo-studielan/dsop_saldostudielan_integrasjonMaskinporten',
  '/dsop_saldostudielan_informasjonsmodellLanekassen.html': '/saldo-studielan/dsop_saldostudielan_informasjonsmodellLanekassen',
  '/dsop_saldostudielan_integrasjonstest.html': '/saldo-studielan/dsop_saldostudielan_integrasjonstest',
  '/dsop_saldostudielan_logoLanekassen.html': '/saldo-studielan/dsop_saldostudielan_logoLanekassen',
  '/dsop_saldostudielan_faq.html': '/saldo-studielan/dsop_saldostudielan_faq',
  '/dsop_saldostudielan_endringslogg.html': '/saldo-studielan/dsop_saldostudielan_endringslogg',
  
  // Ajourhold
  '/dsop_ajourhold_om.html': '/ajourhold/dsop_ajourhold_om',
  '/dsop_ajourhold_onboarding.html': '/ajourhold/dsop_ajourhold_onboarding',
  '/dsop_ajourhold_Skatteetaten_api.html': '/ajourhold/dsop_Ajourhold_skatteetaten_api',
  '/dsop_ajourhold _Nav_api.html': '/ajourhold/dsop_ajourhold _Nav_api',
  '/dsop_ajourhold_Integrasjonmaskinporten.html': '/ajourhold/dsop_Ajourhold_Integrasjon_Maskinporten',
  '/dsop_ajourhold_integrasjonstest.html': '/ajourhold/dsop_Ajourhold_Integrasjonstest',
  '/dsop_ajourhold_forvaltningsrutiner.html': '/ajourhold/dsop_ajourhold_Forvaltningsrutiner',
  '/dsop_ajourhold_faq.html': '/ajourhold/dsop_ajourhold_faq',
  '/dsop_ajourhold_endringer.html': '/ajourhold/dsop_ajourhold_endringer',
  '/dsop_ajourhold_Endringslogg.html': '/ajourhold/dsop_Ajourhold_Endringslogg',
  
  // FI - Krav og betalinger
  '/dsop_fi_om.html': '/fi-krav-betalinger/dsop_fi_om',
  '/dsop_fi_onboarding.html': '/fi-krav-betalinger/dsop_fi_onboarding',
  '/dsop_fi_integrasjonMaskinporten.html': '/fi-krav-betalinger/dsop_fi_integrasjonMaskinporten',
  '/dsop_fi_faq.html': '/fi-krav-betalinger/dsop_fi_faq',
  '/dsop_fi_forvaltningsrutiner.html': '/fi-krav-betalinger/dsop_fi_forvaltningsrutiner',
  '/dsop_fi_endringslogg.html': '/fi-krav-betalinger/dsop_fi_endringslogg',
  '/dsop_fi_endringer.html': '/fi-krav-betalinger/dsop_fi_endringer',
  
  // Altinn 3.0
  '/dsop_altinn3.0_about.html': '/altinn3/dsop_altinn3.0_about',
  '/dsop_altinn3.0_tilgangspakker.html': '/altinn3/dsop_altinn3.0_tilgangspakker',
  '/dsop_altinn3.0_samtykkeløsningen.html': '/altinn3/dsop_altinn3.0_samtykkeløsningen',
  '/dsop_altinn3.0_systembruker.html': '/altinn3/dsop_altinn3.0_systembruker',
  '/dsop_altinn3.0_dialogporten.html': '/altinn3/dsop_altinn3.0_dialogporten',
  '/dsop_altinn3.0_innboks.html': '/altinn3/dsop_altinn3.0_innboks',
  
  // Beta links
  '/dsop_beta_om.html': '/beta/beta/dsop_beta_om',
  '/dsop_v2kontroll_skatt_about_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_about_BETA',
  '/dsop_v2kontroll_skatt_juridisk_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_juridisk_BETA',
  '/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA',
  '/dsop_v2kontroll_skatt_onboarding_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_onboarding_BETA',
  '/dsop_v2kontroll_skatt_operational_processes_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_operational_processes_BETA',
  '/dsop_v2kontroll_skatt_faq_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_faq_BETA',
  '/dsop_v2kontroll_skatt_changelog_BETA.html': '/beta/skatt-kontroll-beta/dsop_v2kontroll_skatt_changelog_BETA',
};

// Function to recursively process all markdown files
function processMarkdownFiles(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processMarkdownFiles(filePath);
    } else if (file.endsWith('.md')) {
      fixLinksInFile(filePath);
    }
  }
}

// Function to fix links in a single file
function fixLinksInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix markdown links [text](url.html)
    for (const [oldUrl, newUrl] of Object.entries(urlMapping)) {
      const markdownLinkRegex = new RegExp(`\\[([^\\]]+)\\]\\(${oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
      if (content.match(markdownLinkRegex)) {
        content = content.replace(markdownLinkRegex, `[$1](${newUrl})`);
        changed = true;
      }
      
      // Fix bare URLs
      const bareUrlRegex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldUrl)) {
        content = content.replace(bareUrlRegex, newUrl);
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed links in: ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process both prod-sider and beta-sider
console.log('\n📂 Processing prod-sider...');
processMarkdownFiles('prod-sider');

console.log('\n📂 Processing beta-sider...');
processMarkdownFiles('beta-sider');

console.log('\n✅ Link fixing completed!');
