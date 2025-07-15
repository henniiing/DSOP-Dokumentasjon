const fs = require('fs');
const path = require('path');

function createCorrectSidebar() {
  const sidebarContent = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'DSOP',
      items: [
        'dsop/dsop_dsop_avtaler_og_juridisk',
        'dsop/dsop_dsop_endringslogg',
        'dsop/dsop_dsop_fagutvalg',
        'dsop/dsop_dsop_kontakt',
        'dsop/dsop_dsop_nyheter'
      ],
    },
    {
      type: 'category',
      label: 'Samtykkebasert Lånesøknad',
      items: [
        'samtykkebasert-lanesoknad/dsop_sbl_om',
        'samtykkebasert-lanesoknad/dsop_sbl_onboarding',
        'samtykkebasert-lanesoknad/dsop_sbl_faq',
        'samtykkebasert-lanesoknad/dsop_sbl_endringslogg',
        'samtykkebasert-lanesoknad/dsop_sbl_endringer',
        'samtykkebasert-lanesoknad/dsop_sbl_integrasjonMaskinporten',
        'samtykkebasert-lanesoknad/dsop_sbl_integrasjonSamtykkeløsningen',
        'samtykkebasert-lanesoknad/dsop_sbl_integrasjonstest',
        'samtykkebasert-lanesoknad/dsop_sbl_listefinansforetak'
      ],
    },
    {
      type: 'category',
      label: 'Kontrollinformasjon Fellesstandard',
      items: [
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_om',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_onboarding',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_faq',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_changelog',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_operational_processes',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_test',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_validation',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_api_specification',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_architecturedocument',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_functionalspecification',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_securitydesign',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_specification_of_eoppslag',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_datamodel',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_glossary',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_accounts',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_accountdetails',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_accountservicingprovider',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_cards',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_customerrelationships',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_roles',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_transactions'
      ],
    },
    {
      type: 'category',
      label: 'Konkursbehandling',
      items: [
        'konkursbehandling/dsop_v2konkurs_about',
        'konkursbehandling/dsop_v2konkurs_onboarding',
        'konkursbehandling/dsop_v2konkurs_onboarding_konkursvarsel',
        'konkursbehandling/dsop_v2konkurs_faq',
        'konkursbehandling/dsop_v2konkurs_changelog',
        'konkursbehandling/dsop_v2konkurs_løsningsbeskrivelse',
        'konkursbehandling/dsop_v2konkurs_operational_processes',
        'konkursbehandling/dsop_v2konkurs_test',
        'konkursbehandling/dsop_v2konkurs_functionalspecification',
        'konkursbehandling/dsop_v2konkurs_jurdisk'
      ],
    },
    {
      type: 'category',
      label: 'Politi Utlevering',
      items: [
        'politi-utlevering/dsop_v2politi-utlevering_about',
        'politi-utlevering/dsop_v2politi-utlevering_onboarding',
        'politi-utlevering/dsop_v2politi-utlevering_løsningsbeskrivelse',
        'politi-utlevering/dsop_v2politi-utlevering_juridisk',
        'politi-utlevering/dsop_v2politi-utlevering_utleveringspålegg',
        'politi-utlevering/dsop_v2politi-utlevering_BETA_changelog',
        'politi-utlevering/dsop_v2politi-utlevering_BETA_faq',
        'politi-utlevering/dsop_v2politi-utlevering_BETA_test',
        'politi-utlevering/dsop_v2politi-utlevering_operational_BETA_processes'
      ],
    },
    {
      type: 'category',
      label: 'Skatt Kontroll',
      items: [
        'skatt-kontroll/dsop_v2kontroll_skatt_about',
        'skatt-kontroll/dsop_v2kontroll_skatt_onboarding',
        'skatt-kontroll/dsop_v2kontroll_skatt_faq',
        'skatt-kontroll/dsop_v2kontroll_skatt_changelog',
        'skatt-kontroll/dsop_v2kontroll_skatt_løsningsbeskrivelse',
        'skatt-kontroll/dsop_v2kontroll_skatt_operational_processes',
        'skatt-kontroll/dsop_v2kontroll_skatt_juridisk',
        'skatt-kontroll/dsop_v2kontroll_nav_about'
      ],
    },
    {
      type: 'category',
      label: 'Vergekontroll',
      items: [
        'vergekontroll/dsop_v2vergekontroll_about',
        'vergekontroll/dsop_v2vergekontroll_onboarding',
        'vergekontroll/dsop_v2vergekontroll_faq',
        'vergekontroll/dsop_v2vergekontroll_changelog',
        'vergekontroll/dsop_v2vergekontroll_løsningsbeskrivelse',
        'vergekontroll/dsop_v2vergekontroll_operational_processes',
        'vergekontroll/dsop_v2vergekontroll_test',
        'vergekontroll/dsop_v2vergekontroll_juridisk',
        'vergekontroll/dsop_v2vergekontroll_validering_av_freg'
      ],
    },
    {
      type: 'category',
      label: 'Oppgjør etter Dødsfall',
      items: [
        'oppgjor-etter-dodsfall/dsop_v2oed_about',
        'oppgjor-etter-dodsfall/dsop_v2oed_onboarding',
        'oppgjor-etter-dodsfall/dsop_v2oed_faq',
        'oppgjor-etter-dodsfall/dsop_v2oed_changelog',
        'oppgjor-etter-dodsfall/dsop_v2oed_løsningsbeskrivelse',
        'oppgjor-etter-dodsfall/dsop_v2oed_operational_processes',
        'oppgjor-etter-dodsfall/dsop_v2oed_test',
        'oppgjor-etter-dodsfall/dsop_v2oed_juridisk',
        'oppgjor-etter-dodsfall/dsop_oed_om'
      ],
    },
    {
      type: 'category',
      label: 'Syke- og Uføreopplysninger',
      items: [
        'syke-og-uforeopplysninger/dsop_su_om',
        'syke-og-uforeopplysninger/dsop_su_onboarding',
        'syke-og-uforeopplysninger/dsop_su_faq',
        'syke-og-uforeopplysninger/dsop_su_endringslogg',
        'syke-og-uforeopplysninger/dsop_su_forvaltningsrutiner',
        'syke-og-uforeopplysninger/dsop_su_registrering',
        'syke-og-uforeopplysninger/dsop_su_integrasjonMaskinporten',
        'syke-og-uforeopplysninger/dsop_su_integrasjonSamtykke',
        'syke-og-uforeopplysninger/dsop_su_integrasjonstest',
        'syke-og-uforeopplysninger/dsop_su_api_dokumentasjon'
      ],
    },
    {
      type: 'category',
      label: 'Kundeforholdsregister',
      items: [
        'kundeforholdsregister/dsop_kundeforholdsregister_om',
        'kundeforholdsregister/dsop_kundeforholdsregister_onboarding',
        'kundeforholdsregister/dsop_kundeforholdsregister_faq',
        'kundeforholdsregister/dsop_kundeforholdsregister_endringslogg',
        'kundeforholdsregister/dsop_kundeforholdsregister_interntesting',
        'kundeforholdsregister/dsop_oversikt_kfr.html'
      ],
    },
    {
      type: 'category',
      label: 'Saldo Studielån',
      items: [
        'saldo-studielan/dsop_saldostudielan_om',
        'saldo-studielan/dsop_saldostudielan_onboarding',
        'saldo-studielan/dsop_saldostudielan_faq',
        'saldo-studielan/dsop_saldostudielan_endringslogg',
        'saldo-studielan/dsop_saldostudielan_integrasjonMaskinporten',
        'saldo-studielan/dsop_saldostudielan_integrasjonSamtykke',
        'saldo-studielan/dsop_saldostudielan_integrasjonstest',
        'saldo-studielan/dsop_saldostudielan_integrasjonLanekassen',
        'saldo-studielan/dsop_saldostudielan_informasjonsmodellLanekassen',
        'saldo-studielan/dsop_saldostudielan_logoLanekassen'
      ],
    },
    {
      type: 'category',
      label: 'Ajourhold',
      items: [
        'ajourhold/dsop_ajourhold_om',
        'ajourhold/dsop_ajourhold_onboarding',
        'ajourhold/dsop_ajourhold_faq',
        'ajourhold/dsop_ajourhold_Endringslogg',
        'ajourhold/dsop_ajourhold_endringer',
        'ajourhold/dsop_ajourhold_forvaltningsrutiner',
        'ajourhold/dsop_ajourhold_integrasjonstest',
        'ajourhold/dsop_ajourhold_Integrasjonmaskinporten',
        'ajourhold/dsop_Nav_api',
        'ajourhold/dsop_skatteetaten_api'
      ],
    },
    {
      type: 'category',
      label: 'FI Krav & Betalinger',
      items: [
        'fi-krav-betalinger/dsop_fi_om',
        'fi-krav-betalinger/dsop_fi_onboarding',
        'fi-krav-betalinger/dsop_fi_faq',
        'fi-krav-betalinger/dsop_fi_endringslogg',
        'fi-krav-betalinger/dsop_fi_endringer',
        'fi-krav-betalinger/dsop_fi_forvaltningsrutiner',
        'fi-krav-betalinger/dsop_fi_integrasjonMaskinporten'
      ],
    },
    {
      type: 'category',
      label: 'FI Utlegg',
      items: [
        'fi-utlegg/dsop_fi-utlegg_om',
        'fi-utlegg/dsop_fi-utlegg_onboarding',
        'fi-utlegg/dsop_fi-utlegg_changelog',
        'fi-utlegg/dsop_fi-utlegg_operational_processes',
        'fi-utlegg/dsop_fi-utlegg_juridisk',
        'fi-utlegg/dsop_fi-utlegg_løsningsbeskrivelse_saldo',
        'fi-utlegg/dsop_fi-utlegg_løsningsbeskrivelse_notification'
      ],
    },
    {
      type: 'category',
      label: 'Transportløyvegaranti',
      items: [
        'transportloyvegaranti/dsop_transportloyvegaranti_om',
        'transportloyvegaranti/dsop_transportloyvegaranti_onboarding'
      ],
    },
    {
      type: 'category',
      label: 'Digital Eiendomshandel',
      items: [
        'digital-eiendomshandel/dsop_digitaleiendomshandel_om',
        'digital-eiendomshandel/dsop_digitaleiendomshandel_endringslogg'
      ],
    },
    {
      type: 'category',
      label: 'Altinn 3.0',
      items: [
        'altinn3/dsop_altinn3.0_about',
        'altinn3/dsop_altinn3.0_systembruker',
        'altinn3/dsop_altinn3.0_tilgangspakker',
        'altinn3/dsop_altinn3.0_dialogporten',
        'altinn3/dsop_altinn3.0_innboks',
        'altinn3/dsop_altinn3.0_samtykkeløsningen'
      ],
    },
    {
      type: 'category',
      label: 'Legacy Documentation',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Konkurs Legacy',
          items: [
            'legacy/dsop_konkurs_om',
            'legacy/dsop_konkurs_onboarding_konkursbehanding',
            'legacy/dsop_konkurs_onboardingsguide',
            'legacy/dsop_konkurs_faq',
            'legacy/dsop_konkurs_endringslogg',
            'legacy/dsop_konkurs_forvaltningsrutiner',
            'legacy/dsop_konkurs_test',
            'legacy/dsop_konkurs_validering',
            'legacy/dsop_konkurs_juridisk',
            'legacy/dsop_konkurs_juridiskerammebetingelser',
            'legacy/dsop_konkurs_api',
            'legacy/dsop_konkurs_apispek_konkursbehandling',
            'legacy/dsop_konkurs_datamodell_konkursbehandling',
            'legacy/dsop_konkurs_eOppslag',
            'legacy/dsop_konkurs_funksjonellspesifikasjon',
            'legacy/dsop_konkurs_funksjonellspesifikasjon_konkursbehandling',
            'legacy/dsop_konkurs_sikkerhet'
          ],
        },
        {
          type: 'category',
          label: 'Kontroll Legacy',
          items: [
            'legacy/dsop_kontroll_om',
            'legacy/dsop_kontroll_onboarding_landingsside',
            'legacy/dsop_kontroll_onboarding_datakilde',
            'legacy/dsop_kontroll_onboarding_datakilde_2',
            'legacy/dsop_kontroll_faq',
            'legacy/dsop_kontroll_endringslogg',
            'legacy/dsop_kontroll_test',
            'legacy/dsop_kontroll_validation',
            'legacy/dsop_kontroll_jurdisk',
            'legacy/dsop_kontroll_api_specification',
            'legacy/dsop_kontroll_architecturedocument',
            'legacy/dsop_kontroll_arkitektur',
            'legacy/dsop_kontroll_functionalspecification',
            'legacy/dsop_kontroll_securitydesign',
            'legacy/dsop_kontroll_specification_of_eoppslag',
            'legacy/dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk)',
            'legacy/dsop_kontroll_datamodel',
            'legacy/dsop_kontroll_dataelementer',
            'legacy/dsop_kontroll_changelogdatamodel',
            'legacy/dsop_kontroll_apiaccountlist',
            'legacy/dsop_kontroll_apiaccountlist_v1_2',
            'legacy/dsop_kontroll_apiaccountdetails',
            'legacy/dsop_kontroll_apiaccountdetails_v1_2',
            'legacy/dsop_kontroll_apicards',
            'legacy/dsop_kontroll_apicards_v1_2',
            'legacy/dsop_kontroll_apiroles',
            'legacy/dsop_kontroll_apiroles_v1_2',
            'legacy/dsop_kontroll_apitransactions',
            'legacy/dsop_kontroll_apitransactions_v1_2',
            'legacy/dsop_kontroll_operational_processes',
            'legacy/dsop_kontroll_change_management',
            'legacy/dsop_kontroll_question_management',
            'legacy/dsop_kontroll_error_handling',
            'legacy/dsop_kontroll_information_from_and_to_public_agencies',
            'legacy/dsop_kontroll_funksjonalitet (utgått norsk)'
          ],
        },
        {
          type: 'category',
          label: 'Kontrollinformasjon Legacy',
          items: [
            'legacy/dsop_kontrollinformasjon_about',
            'legacy/dsop_kontrollinformasjon_onboarding',
            'legacy/dsop_kontrollinformasjon_faq',
            'legacy/dsop_kontrollinformasjon_changelog',
            'legacy/dsop_kontrollinformasjon_operational_processes',
            'legacy/dsop_kontrollinformasjon_test',
            'legacy/dsop_kontrollinformasjon_validation',
            'legacy/dsop_kontrollinformasjon_jurdisk',
            'legacy/dsop_kontrollinformasjon_api_specification',
            'legacy/dsop_kontrollinformasjon_architecturedocument',
            'legacy/dsop_kontrollinformasjon_functionalspecification',
            'legacy/dsop_kontrollinformasjon_securitydesign',
            'legacy/dsop_kontrollinformasjon_specification_of_eoppslag',
            'legacy/dsop_kontrollinformasjon_datamodel'
          ],
        }
      ],
    }
  ],
};

export default sidebars;
`;

  // Write the corrected sidebar
  fs.writeFileSync('./sidebars.ts', sidebarContent);
  console.log('✅ Generated corrected sidebars.ts');

  // Create beta sidebar
  const betaSidebarContent = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  betaSidebar: [
    {
      type: 'category',
      label: 'Beta Documentation',
      items: [
        'beta/dsop_beta_om'
      ],
    },
    {
      type: 'category',
      label: 'Skatt Kontroll Beta',
      items: [
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_about_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_onboarding_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_faq_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_changelog_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_operational_processes_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_juridisk_BETA'
      ],
    }
  ],
};

export default sidebars;
`;

  fs.writeFileSync('./sidebars-beta.ts', betaSidebarContent);
  console.log('✅ Generated corrected sidebars-beta.ts');

  console.log('📝 Sidebar configurations corrected successfully!');
}

createCorrectSidebar();
