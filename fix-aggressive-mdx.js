const fs = require('fs');
const path = require('path');

// List of all files that had errors in the build output
const errorFiles = [
  './prod-sider/dsop_Ajourhold_Integrasjon_Maskinporten.md',
  './prod-sider/dsop_Ajourhold_Integrasjonstest.md',
  './prod-sider/dsop_Ajourhold_skatteetaten_api.md',
  './prod-sider/dsop_ajourhold _Nav_api.md',
  './prod-sider/dsop_ajourhold_Forvaltningsrutiner.md',
  './prod-sider/dsop_ajourhold_endringer.md',
  './prod-sider/dsop_ajourhold_faq.md',
  './prod-sider/dsop_ajourhold_om.md',
  './prod-sider/dsop_ajourhold_onboarding.md',
  './prod-sider/dsop_altinn3.0_dialogporten.md',
  './prod-sider/dsop_altinn3.0_innboks.md',
  './prod-sider/dsop_altinn3.0_samtykkeløsningen.md',
  './prod-sider/dsop_altinn3.0_systembruker.md',
  './prod-sider/dsop_altinn3.0_tilgangspakker.md',
  './prod-sider/dsop_digitaleiendomshandel_om.md',
  './prod-sider/dsop_dsop_avtaler_og_juridisk.md',
  './prod-sider/dsop_fi-utlegg_changelog.md',
  './prod-sider/dsop_fi-utlegg_juridisk.md',
  './prod-sider/dsop_fi-utlegg_løsningsbeskrivelse_saldo.md',
  './prod-sider/dsop_fi-utlegg_om.md',
  './prod-sider/dsop_fi-utlegg_onboarding.md',
  './prod-sider/dsop_fi-utlegg_operational_processes.md',
  './prod-sider/dsop_fi_endringer.md',
  './prod-sider/dsop_fi_forvaltningsrutiner.md',
  './prod-sider/dsop_fi_integrasjonMaskinporten.md',
  './prod-sider/dsop_fi_om.md',
  './prod-sider/dsop_fi_onboarding.md',
  './prod-sider/dsop_konkurs_endringslogg.md',
  './prod-sider/dsop_konkurs_funksjonellspesifikasjon.md',
  './prod-sider/dsop_konkurs_juridiske.md',
  './prod-sider/dsop_konkurs_landingsside_apispek.md',
  './prod-sider/dsop_konkurs_landingsside_datamodell.md',
  './prod-sider/dsop_konkurs_landingsside_eoppslag.md',
  './prod-sider/dsop_konkurs_landingsside_forvaltningsrutiner.md',
  './prod-sider/dsop_konkurs_landingsside_funksjonellspesifikasjon.md',
  './prod-sider/dsop_konkurs_landingsside_onboardingsguide.md',
  './prod-sider/dsop_konkurs_landingsside_sikkerhet.md',
  './prod-sider/dsop_konkurs_om.md',
  './prod-sider/dsop_konkurs_onboardingsguide.md',
  './prod-sider/dsop_konkurs_test.md',
  './prod-sider/dsop_konkurs_validering.md',
  './prod-sider/dsop_kontroll_apiaccountdetails.md',
  './prod-sider/dsop_kontroll_apiaccountdetails_v1_2.md',
  './prod-sider/dsop_kontroll_apiaccountlist.md',
  './prod-sider/dsop_kontroll_apiaccountlist_v1_2.md',
  './prod-sider/dsop_kontroll_apicards.md',
  './prod-sider/dsop_kontroll_apicards_v1_2.md',
  './prod-sider/dsop_kontroll_apiroles.md',
  './prod-sider/dsop_kontroll_apiroles_v1_2.md',
  './prod-sider/dsop_kontroll_apitransactions.md',
  './prod-sider/dsop_kontroll_apitransactions_v1_2.md',
  './prod-sider/dsop_kontroll_architecturedocument.md',
  './prod-sider/dsop_kontroll_arkitektur (utgått norsk).md',
  './prod-sider/dsop_kontroll_dataelementer (utgått).md',
  './prod-sider/dsop_kontroll_datamodel.md',
  './prod-sider/dsop_kontroll_faq.md',
  './prod-sider/dsop_kontroll_functionalspecification.md',
  './prod-sider/dsop_kontroll_funksjonalitet (utgått norsk).md',
  './prod-sider/dsop_kontroll_jurdisk.md',
  './prod-sider/dsop_kontroll_om.md',
  './prod-sider/dsop_kontroll_onboarding_datakilde.md',
  './prod-sider/dsop_kontroll_onboarding_datakilde_2.md',
  './prod-sider/dsop_kontroll_operational_processes.md',
  './prod-sider/dsop_kontroll_specification_of_eoppslag.md',
  './prod-sider/dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk).md',
  './prod-sider/dsop_kontroll_test.md',
  './prod-sider/dsop_kontroll_validation.md',
  './prod-sider/dsop_kontrollinformasjon_jurdisk.md',
  './prod-sider/dsop_kundeforholdsregister_om.md',
  './prod-sider/dsop_kundeforholdsregister_onboarding.md',
  './prod-sider/dsop_saldostudielan_faq.md',
  './prod-sider/dsop_saldostudielan_informasjonsmodellLanekassen.md',
  './prod-sider/dsop_saldostudielan_integrasjonMaskinporten.md',
  './prod-sider/dsop_saldostudielan_integrasjonSamtykke.md',
  './prod-sider/dsop_saldostudielan_integrasjonstest.md',
  './prod-sider/dsop_saldostudielan_logoLanekassen.md',
  './prod-sider/dsop_saldostudielan_om.md',
  './prod-sider/dsop_saldostudielan_onboarding.md',
  './prod-sider/dsop_sbl_endringer.md',
  './prod-sider/dsop_sbl_faq.md',
  './prod-sider/dsop_sbl_integrasjonMaskinporten.md',
  './prod-sider/dsop_sbl_integrasjonSamtykkeløsningen.md',
  './prod-sider/dsop_sbl_integrasjonstest.md',
  './prod-sider/dsop_sbl_onboarding.md',
  './prod-sider/dsop_su_faq.md',
  './prod-sider/dsop_su_forvaltningsrutiner.md',
  './prod-sider/dsop_su_integrasjonMaskinporten.md',
  './prod-sider/dsop_su_integrasjonstest.md',
  './prod-sider/dsop_su_om.md',
  './prod-sider/dsop_su_onboarding.md',
  './prod-sider/dsop_v2fellesstandard_accountdetails.md',
  './prod-sider/dsop_v2fellesstandard_accounts.md',
  './prod-sider/dsop_v2fellesstandard_accountservicingprovider.md',
  './prod-sider/dsop_v2fellesstandard_architecturedocument.md',
  './prod-sider/dsop_v2fellesstandard_cards.md',
  './prod-sider/dsop_v2fellesstandard_customerrelationships.md',
  './prod-sider/dsop_v2fellesstandard_datamodel.md',
  './prod-sider/dsop_v2fellesstandard_faq.md',
  './prod-sider/dsop_v2fellesstandard_functionalspecification.md',
  './prod-sider/dsop_v2fellesstandard_glossary.md',
  './prod-sider/dsop_v2fellesstandard_om.md',
  './prod-sider/dsop_v2fellesstandard_onboarding.md',
  './prod-sider/dsop_v2fellesstandard_operational_processes.md',
  './prod-sider/dsop_v2fellesstandard_roles.md',
  './prod-sider/dsop_v2fellesstandard_specification_of_eoppslag.md',
  './prod-sider/dsop_v2fellesstandard_test.md',
  './prod-sider/dsop_v2fellesstandard_transactions.md',
  './prod-sider/dsop_v2konkurs_about.md',
  './prod-sider/dsop_v2konkurs_changelog.md',
  './prod-sider/dsop_v2konkurs_functionalspecification.md',
  './prod-sider/dsop_v2konkurs_jurdisk.md',
  './prod-sider/dsop_v2konkurs_løsningsbeskrivelse.md',
  './prod-sider/dsop_v2konkurs_onboarding.md',
  './prod-sider/dsop_v2konkurs_onboarding_konkursvarsel.md',
  './prod-sider/dsop_v2konkurs_operational_processes.md',
  './prod-sider/dsop_v2kontroll_skatt_about.md',
  './prod-sider/dsop_v2kontroll_skatt_changelog.md',
  './prod-sider/dsop_v2kontroll_skatt_løsningsbeskrivelse.md',
  './prod-sider/dsop_v2kontroll_skatt_onboarding.md',
  './prod-sider/dsop_v2kontroll_skatt_operational_processes.md',
  './prod-sider/dsop_v2oed_about.md',
  './prod-sider/dsop_v2oed_changelog.md',
  './prod-sider/dsop_v2oed_juridisk.md',
  './prod-sider/dsop_v2oed_løsningsbeskrivelse.md',
  './prod-sider/dsop_v2oed_onboarding.md',
  './prod-sider/dsop_v2oed_operational_processes.md',
  './prod-sider/dsop_v2oed_test.md',
  './prod-sider/dsop_v2politi-utlevering_about.md',
  './prod-sider/dsop_v2politi-utlevering_løsningsbeskrivelse.md',
  './prod-sider/dsop_v2politi-utlevering_onboarding.md',
  './prod-sider/dsop_v2politi-utlevering_operational_processes.md',
  './prod-sider/dsop_v2politi-utlevering_test.md',
  './prod-sider/dsop_v2politi-utlevering_utleveringspålegg.md',
  './prod-sider/dsop_v2vergekontroll_about.md',
  './prod-sider/dsop_v2vergekontroll_changelog.md',
  './prod-sider/dsop_v2vergekontroll_juridisk.md',
  './prod-sider/dsop_v2vergekontroll_løsningsbeskrivelse.md',
  './prod-sider/dsop_v2vergekontroll_onboarding.md',
  './prod-sider/dsop_v2vergekontroll_operational_processes.md',
  './prod-sider/dsop_v2vergekontroll_test.md',
  './beta-sider/dsop_beta_om.md',
  './beta-sider/dsop_v2kontroll_skatt_about_BETA.md',
  './beta-sider/dsop_v2kontroll_skatt_changelog_BETA.md',
  './beta-sider/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.md',
  './beta-sider/dsop_v2kontroll_skatt_onboarding_BETA.md',
  './beta-sider/dsop_v2kontroll_skatt_operational_processes_BETA.md'
];

console.log(`🔧 Starting aggressive MDX fixes for ${errorFiles.length} specific error files...\n`);

let totalFixedFiles = 0;
const fixes = [];

function fixFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let fileFixed = false;
        let fixTypes = [];

        console.log(`Processing: ${filePath}`);

        // Fix 1: Replace backslashes with forward slashes (most common error)
        const backslashCount = (content.match(/\\/g) || []).length;
        if (backslashCount > 0) {
            content = content.replace(/\\/g, '/');
            fixTypes.push(`Fixed ${backslashCount} backslashes`);
        }

        // Fix 2: Fix ampersands that should be escaped in JSX contexts
        const ampersandMatches = content.match(/&(?![a-zA-Z]+;|#\d+;)/g);
        if (ampersandMatches) {
            content = content.replace(/&(?![a-zA-Z]+;|#\d+;)/g, '&amp;');
            fixTypes.push(`Fixed ${ampersandMatches.length} unescaped ampersands`);
        }

        // Fix 3: Remove or fix invalid JSX expressions
        const invalidJSXCount = (content.match(/\{[^}]*[\\<>&][^}]*\}/g) || []).length;
        if (invalidJSXCount > 0) {
            content = content.replace(/\{[^}]*[\\<>&][^}]*\}/g, '');
            fixTypes.push(`Removed ${invalidJSXCount} invalid JSX expressions`);
        }

        // Fix 4: Fix HTML comments with invalid syntax
        content = content.replace(/<!--[^>]*--[^>]*>/g, (match) => {
            return match.replace(/--([^>]+)>/g, '-->');
        });

        // Fix 5: Remove invalid characters from JSX-like tags
        content = content.replace(/<([^>]*)[\\#$]([^>]*)>/g, '<$1$2>');

        // Fix 6: Fix URLs and paths
        content = content.replace(/https:\/\/\/\//g, 'https://');
        content = content.replace(/http:\/\/\/\//g, 'http://');

        // Fix 7: Clean up repeated slashes
        content = content.replace(/\/\/+/g, '/');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            totalFixedFiles++;
            fileFixed = true;
            fixes.push({
                file: filePath,
                fixes: fixTypes,
                fixesApplied: true
            });
            console.log(`  ✅ Fixed: ${fixTypes.join(', ')}`);
        } else {
            console.log(`  ➖ No changes needed`);
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        fixes.push({
            file: filePath,
            error: error.message
        });
    }
}

// Process each error file
errorFiles.forEach(fixFile);
        return '{/* Missing image comment removed */}';
    });

    // Fix 4: Fix other problematic escape sequences
    content = content.replace(/&amp;amp;/g, '&amp;');
    content = content.replace(/&amp;gt;/g, '&gt;');
    content = content.replace(/&amp;lt;/g, '&lt;');

    // Fix 5: Fix unclosed or malformed JSX expressions
    content = content.replace(/\{[^}]*(?=\s*$)/gm, (match) => {
        console.log(`  Fixing unclosed expression: ${match}`);
        return match + '}';
    });

    // Fix 6: Fix problematic character sequences that break MDX
    content = content.replace(/[\u200B-\u200D\uFEFF]/g, ''); // Remove zero-width characters
    content = content.replace(/\uFEFF/g, ''); // Remove BOM characters

    // Fix 7: Fix frontmatter with invalid YAML
    content = content.replace(/^---\n([\s\S]*?)\n---/m, (match, frontmatter) => {
        try {
            // Fix common YAML issues
            let fixed = frontmatter
                .replace(/^\s*﻿/gm, '') // Remove BOM at line start
                .replace(/:\s*$/gm, ': ""') // Fix empty values
                .replace(/([^:]\s*):\s*([^"\n]*[^\s"\n])\s*$/gm, '$1: "$2"') // Quote unquoted strings
                .replace(/: "([^"]*)""/g, ': "$1"'); // Fix double quotes
            
            return '---\n' + fixed + '\n---';
        } catch (e) {
            return match;
        }
    });

    // Fix 8: Fix markdown table formatting issues
    content = content.replace(/\|\s*\|\s*\|/g, '| | |');
    content = content.replace(/\|([^|\n]*)\|([^|\n]*)\|([^|\n]*)\|/g, (match, col1, col2, col3) => {
        return `| ${col1.trim()} | ${col2.trim()} | ${col3.trim()} |`;
    });

    // Fix 9: Fix problematic HTML tags
    content = content.replace(/<([^>]*?)&([^>]*?)>/g, (match, before, after) => {
        if (after.match(/^(amp|lt|gt|quot|apos);/)) {
            return match;
        }
        return `<${before}&amp;${after}>`;
// Save the fix log
fs.writeFileSync('aggressive-mdx-fixes-log.json', JSON.stringify(fixes, null, 2));

console.log(`\n📊 Summary:`);
console.log(`  Total files checked: ${errorFiles.length}`);
console.log(`  Files fixed: ${totalFixedFiles}`);
console.log(`  Fix log saved to: aggressive-mdx-fixes-log.json`);

console.log(`\n🚀 Next steps:`);
console.log(`  1. Run: npm run build`);
console.log(`  2. Check for any remaining errors`);
console.log(`  3. If needed, manually fix remaining issues`);
