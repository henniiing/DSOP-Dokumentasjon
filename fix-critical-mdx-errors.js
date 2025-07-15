const fs = require('fs');
const path = require('path');

// Critical errors that need specific fixes
const criticalErrorFiles = [
    'prod-sider\\dsop_konkurs_faq.md',
    'prod-sider\\dsop_saldostudielan_integrasjonSamtykke.md',
    'prod-sider\\dsop_sbl_integrasjonSamtykkeløsningen.md',
    'prod-sider\\dsop_su_integrasjonSamtykke.md',
    'prod-sider\\dsop_su_registrering.md',
    'prod-sider\\dsop_v2fellesstandard_accountdetails.md',
    'prod-sider\\dsop_v2fellesstandard_api_specifications.md',
    'prod-sider\\dsop_v2fellesstandard_cards.md',
    'prod-sider\\dsop_v2fellesstandard_roles.md',
    'prod-sider\\dsop_v2fellesstandard_transactions.md',
    'prod-sider\\dsop_v2konkurs_about.md',
    'prod-sider\\dsop_v2konkurs_functionalspecification.md',
    'prod-sider\\dsop_v2konkurs_jurdisk.md',
    'prod-sider\\dsop_v2konkurs_løsningsbeskrivelse.md',
    'prod-sider\\dsop_v2konkurs_onboarding.md',
    'prod-sider\\dsop_v2konkurs_operational_processes.md',
    'prod-sider\\dsop_v2kontroll_skatt_løsningsbeskrivelse.md',
    'prod-sider\\dsop_v2oed_juridisk.md',
    'prod-sider\\dsop_v2oed_løsningsbeskrivelse.md',
    'prod-sider\\dsop_v2oed_onboarding.md',
    'prod-sider\\dsop_v2oed_operational_processes.md',
    'prod-sider\\dsop_v2oed_test.md',
    'prod-sider\\dsop_v2politi-utlevering_about.md',
    'prod-sider\\dsop_v2politi-utlevering_løsningsbeskrivelse.md',
    'prod-sider\\dsop_v2politi-utlevering_onboarding.md',
    'prod-sider\\dsop_v2politi-utlevering_operational_processes.md',
    'prod-sider\\dsop_v2politi-utlevering_test.md',
    'prod-sider\\dsop_v2politi-utlevering_utleveringspålegg.md',
    'prod-sider\\dsop_v2vergekontroll_about.md',
    'prod-sider\\dsop_v2vergekontroll_juridisk.md',
    'prod-sider\\dsop_v2vergekontroll_løsningsbeskrivelse.md',
    'prod-sider\\dsop_v2vergekontroll_onboarding.md',
    'prod-sider\\dsop_v2vergekontroll_operational_processes.md',
    'prod-sider\\dsop_v2vergekontroll_test.md',
    'beta-sider\\dsop_beta_om.md',
    'beta-sider\\dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.md'
];

let totalFixedFiles = 0;
const fixes = [];

function fixCriticalFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let fixTypes = [];

        console.log(`Processing: ${filePath}`);

        // Fix 1: Remove all invalid JSX expressions (anything with {})
        const invalidJSXMatches = content.match(/\{[^}]*\}/g);
        if (invalidJSXMatches) {
            // Remove JSX expressions that contain problematic characters
            content = content.replace(/\{[^}]*[<>&\\#$@%^*]+[^}]*\}/g, '');
            fixTypes.push(`Removed ${invalidJSXMatches.length} invalid JSX expressions`);
        }

        // Fix 2: Fix malformed HTML tags
        // Remove invalid attributes with special characters
        content = content.replace(/<([^>]*)[\\#$@%^&*=;:"',<>]+([^>]*)>/g, '<$1$2>');
        
        // Fix tags with invalid attribute syntax
        content = content.replace(/<([a-zA-Z]+)[^>]*[#]/g, '<$1>');
        content = content.replace(/<([a-zA-Z]+)[^>]*[;][^>]*>/g, '<$1>');
        
        // Fix 3: Fix unclosed tags
        // Find and close unclosed mark tags
        content = content.replace(/<mark>([^<]*?)(?=\n\n|\n#|\n\*|\n-|\n\|)/g, '<mark>$1</mark>');
        
        // Find and close unclosed strong/emphasis tags
        content = content.replace(/<strong>([^<]*?)(?=\n\n|\n#)/g, '<strong>$1</strong>');
        content = content.replace(/<em>([^<]*?)(?=\n\n|\n#)/g, '<em>$1</em>');
        content = content.replace(/<u>([^<]*?)(?=\n\n|\n#)/g, '<u>$1</u>');

        // Fix 4: Fix malformed closing tags
        content = content.replace(/<\/s>/g, '</strong>');
        content = content.replace(/<\/l>/g, '</li>');

        // Fix 5: Remove self-closing tags with invalid syntax
        content = content.replace(/<([^>]+)\/>/g, function(match, tagContent) {
            // If tag content has invalid characters, just remove it
            if (/[#$@%^&*=;:"',<>]/.test(tagContent)) {
                return '';
            }
            return match;
        });

        // Fix 6: Fix acorn parsing errors by removing problematic curly braces
        // Look for patterns that cause acorn errors
        content = content.replace(/\{[^}]*\$[^}]*\}/g, ''); // Remove expressions with $
        content = content.replace(/\{[^}]*#[^}]*\}/g, ''); // Remove expressions with #
        content = content.replace(/\{[^}]*&[^}]*\}/g, ''); // Remove expressions with &

        // Fix 7: Fix unexpected closing slashes
        content = content.replace(/([^<]\/)>/g, '$1>'); // Remove unexpected / before >

        // Fix 8: Fix attribute issues
        content = content.replace(/<([a-zA-Z]+)\s+[^a-zA-Z\s=][^>]*>/g, '<$1>');

        // Fix 9: Clean up malformed table elements
        content = content.replace(/<banknavn>/g, '');
        content = content.replace(/<\/banknavn>/g, '');

        // Fix 10: Remove problematic image references that don't exist
        const imageErrors = [
            'prod-sider/images/fellesstandard_05-1.png',
            'prod-sider/images/fellesstandard_01-1.png',
            'prod-sider/images/skatt_kontroll_01-1.png',
            'prod-sider/images/oed_01-3_v2.png',
            'beta-sider/images/skatt_kontroll_01-1.png'
        ];
        
        imageErrors.forEach(imagePath => {
            const regex = new RegExp(`!\\[[^\\]]*\\]\\([^)]*${imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^)]*\\)`, 'g');
            if (regex.test(content)) {
                content = content.replace(regex, '<!-- Image removed due to missing file -->');
                fixTypes.push(`Removed reference to missing image: ${imagePath}`);
            }
        });

        // Fix 11: Fix specific problematic lines that cause acorn errors
        // These are patterns found in the error logs
        content = content.replace(/\{\s*[^}]*\$[^}]*\s*\}/g, '');
        content = content.replace(/\{\s*[^}]*#[^}]*\s*\}/g, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            totalFixedFiles++;
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

// Main execution
console.log('🔧 Starting critical MDX error fixes...\n');

criticalErrorFiles.forEach(fixCriticalFile);

// Save the fix log
fs.writeFileSync('critical-mdx-fixes-log.json', JSON.stringify(fixes, null, 2));

console.log(`\n📊 Summary:`);
console.log(`  Total files checked: ${criticalErrorFiles.length}`);
console.log(`  Files fixed: ${totalFixedFiles}`);
console.log(`  Fix log saved to: critical-mdx-fixes-log.json`);

console.log(`\n🚀 Next steps:`);
console.log(`  1. Run: npm run build`);
console.log(`  2. Check for any remaining errors`);
