import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    {
      type: 'category',
      label: 'DSOP',
      collapsed: false,
      items: [
        'dsop/index',
        'dsop/dsop_dsop_kontakt',
        'dsop/dsop_dsop_avtaler_og_juridisk',
        'dsop/dsop_dsop_fagutvalg',
        'dsop/dsop_dsop_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Samtykkebasert lånesøknad',
      collapsed: true,
      items: [
        'samtykkebasert-lanesoknad/dsop_sbl_om',
        'samtykkebasert-lanesoknad/dsop_sbl_onboarding',
        {
          type: 'category',
          label: 'Felleskomponenter',
          items: [
            'samtykkebasert-lanesoknad/dsop_sbl_integrasjonMaskinporten',
            'samtykkebasert-lanesoknad/dsop_sbl_integrasjonSamtykkeløsningen',
          ],
        },
        'samtykkebasert-lanesoknad/dsop_sbl_integrasjonstest',
        'samtykkebasert-lanesoknad/dsop_sbl_faq',
        'samtykkebasert-lanesoknad/dsop_sbl_endringer',
        'samtykkebasert-lanesoknad/dsop_sbl_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Kontrollinformasjon Fellesstandard',
      collapsed: true,
      items: [
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_om',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_onboarding',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_test',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_functionalspecification',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_specification_of_eoppslag',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_architecturedocument',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_securitydesign',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_datamodel',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_api_specifications',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_validation',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_operational_processes',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_glossary',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_faq',
        'kontrollinformasjon-fellesstandard/dsop_v2fellesstandard_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Konkursbehandling',
      collapsed: true,
      items: [
        'konkursbehandling/dsop_v2konkurs_about',
        'konkursbehandling/dsop_v2konkurs_jurdisk',
        'konkursbehandling/dsop_v2konkurs_løsningsbeskrivelse',
        'konkursbehandling/dsop_v2konkurs_onboarding',
        'konkursbehandling/dsop_v2konkurs_operational_processes',
        'konkursbehandling/dsop_v2konkurs_faq',
        'konkursbehandling/dsop_v2konkurs_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Politi-Utlevering',
      collapsed: true,
      items: [
        'politi-utlevering/dsop_v2politi-utlevering_about',
        'politi-utlevering/dsop_v2politi-utlevering_juridisk',
        'politi-utlevering/dsop_v2politi-utlevering_løsningsbeskrivelse',
        'politi-utlevering/dsop_v2politi-utlevering_utleveringspålegg',
        'politi-utlevering/dsop_v2politi-utlevering_onboarding',
        'politi-utlevering/dsop_v2politi-utlevering_operational_processes',
        'politi-utlevering/dsop_v2politi-utlevering_faq',
        'politi-utlevering/dsop_v2politi-utlevering_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Skatt-Kontroll',
      collapsed: true,
      items: [
        'skatt-kontroll/dsop_v2kontroll_skatt_about',
        'skatt-kontroll/dsop_v2kontroll_skatt_juridisk',
        'skatt-kontroll/dsop_v2kontroll_skatt_løsningsbeskrivelse',
        'skatt-kontroll/dsop_v2kontroll_skatt_onboarding',
        'skatt-kontroll/dsop_v2kontroll_skatt_operational_processes',
        'skatt-kontroll/dsop_v2kontroll_skatt_faq',
        'skatt-kontroll/dsop_v2kontroll_skatt_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Vergekontroll',
      collapsed: true,
      items: [
        'vergekontroll/dsop_v2vergekontroll_about',
        'vergekontroll/dsop_v2vergekontroll_juridisk',
        'vergekontroll/dsop_v2vergekontroll_løsningsbeskrivelse',
        'vergekontroll/dsop_v2vergekontroll_onboarding',
        'vergekontroll/dsop_v2vergekontroll_operational_processes',
        'vergekontroll/dsop_v2vergekontroll_faq',
        'vergekontroll/dsop_v2vergekontroll_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Oppgjør etter dødsfall',
      collapsed: true,
      items: [
        'oppgjor-etter-dodsfall/dsop_v2oed_about',
        'oppgjor-etter-dodsfall/dsop_v2oed_juridisk',
        'oppgjor-etter-dodsfall/dsop_v2oed_løsningsbeskrivelse',
        'oppgjor-etter-dodsfall/dsop_v2oed_onboarding',
        'oppgjor-etter-dodsfall/dsop_v2oed_operational_processes',
        'oppgjor-etter-dodsfall/dsop_v2oed_faq',
        'oppgjor-etter-dodsfall/dsop_v2oed_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Syke- og uføreopplysninger fra NAV',
      collapsed: true,
      items: [
        'syke-og-uforeopplysninger/dsop_su_om',
        'syke-og-uforeopplysninger/dsop_su_onboarding',
        'syke-og-uforeopplysninger/dsop_su_API_referanse',
        'syke-og-uforeopplysninger/dsop_su_integrasjonstest',
        {
          type: 'category',
          label: 'Felleskomponenter',
          items: [
            'syke-og-uforeopplysninger/dsop_su_integrasjonMaskinporten',
            'syke-og-uforeopplysninger/dsop_su_integrasjonSamtykke',
          ],
        },
        'syke-og-uforeopplysninger/dsop_su_forvaltningsrutiner',
        'syke-og-uforeopplysninger/dsop_su_faq',
        'syke-og-uforeopplysninger/dsop_su_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Kundeforholdsregister',
      collapsed: true,
      items: [
        'kundeforholdsregister/dsop_kundeforholdsregister_om',
        'kundeforholdsregister/dsop_kundeforholdsregister_onboarding',
        'kundeforholdsregister/dsop_oversikt_kfr.html',
        'kundeforholdsregister/dsop_kundeforholdsregister_faq',
        'kundeforholdsregister/dsop_kundeforholdsregister_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Saldo på studielån',
      collapsed: true,
      items: [
        'saldo-studielan/dsop_saldostudielan_om',
        'saldo-studielan/dsop_saldostudielan_onboarding',
        'saldo-studielan/dsop_saldostudielan_integrasjonLanekassen',
        {
          type: 'category',
          label: 'Felleskomponenter',
          items: [
            'saldo-studielan/dsop_saldostudielan_integrasjonSamtykke',
            'saldo-studielan/dsop_saldostudielan_integrasjonMaskinporten',
          ],
        },
        'saldo-studielan/dsop_saldostudielan_informasjonsmodellLanekassen',
        'saldo-studielan/dsop_saldostudielan_integrasjonstest',
        'saldo-studielan/dsop_saldostudielan_logoLanekassen',
        'saldo-studielan/dsop_saldostudielan_faq',
        'saldo-studielan/dsop_saldostudielan_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Data for ajourhold av OTP i privat sektor',
      collapsed: true,
      items: [
        'ajourhold/dsop_ajourhold_om',
        'ajourhold/dsop_ajourhold_onboarding',
        'ajourhold/dsop_Ajourhold_skatteetaten_api',
        'ajourhold/dsop_ajourhold _Nav_api',
        {
          type: 'category',
          label: 'Felleskomponenter',
          items: [
            'ajourhold/dsop_Ajourhold_Integrasjon_Maskinporten',
          ],
        },
        'ajourhold/dsop_Ajourhold_Integrasjonstest',
        'ajourhold/dsop_ajourhold_Forvaltningsrutiner',
        'ajourhold/dsop_ajourhold_faq',
        'ajourhold/dsop_ajourhold_endringer',
        'ajourhold/dsop_Ajourhold_Endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'FI - Krav og betalinger',
      collapsed: true,
      items: [
        'fi-krav-betalinger/dsop_fi_om',
        'fi-krav-betalinger/dsop_fi_onboarding',
        {
          type: 'category',
          label: 'Felleskomponenter',
          items: [
            'fi-krav-betalinger/dsop_fi_integrasjonMaskinporten',
          ],
        },
        'fi-krav-betalinger/dsop_fi_faq',
        'fi-krav-betalinger/dsop_fi_forvaltningsrutiner',
        'fi-krav-betalinger/dsop_fi_endringslogg',
        'fi-krav-betalinger/dsop_fi_endringer',
      ],
    },
    {
      type: 'category',
      label: 'FI-utlegg',
      collapsed: true,
      items: [
        'fi-utlegg/dsop_fi-utlegg_om',
        'fi-utlegg/dsop_fi-utlegg_juridisk',
        'fi-utlegg/dsop_fi-utlegg_løsningsbeskrivelse_saldo',
        'fi-utlegg/dsop_fi-utlegg_onboarding',
        'fi-utlegg/dsop_fi-utlegg_operational_processes',
        'fi-utlegg/dsop_fi-utlegg_changelog',
      ],
    },
    {
      type: 'category',
      label: 'Transportløyvegaranti',
      collapsed: true,
      items: [
        'transportloyvegaranti/dsop_transportloyvegaranti_om',
        'transportloyvegaranti/dsop_transportloyvegaranti_onboarding',
      ],
    },
    {
      type: 'category',
      label: 'Digital samhandling ved eiendomshandel',
      collapsed: true,
      items: [
        'digital-eiendomshandel/dsop_digitaleiendomshandel_om',
        'digital-eiendomshandel/dsop_digitaleiendomshandel_endringslogg',
      ],
    },
    {
      type: 'category',
      label: 'Digital selskapsetablering',
      collapsed: true,
      items: [
        'digital-selskapsetablering/dsop_dse_om',
      ],
    },
    {
      type: 'category',
      label: 'Altinn 3.0',
      collapsed: true,
      items: [
        'altinn3/dsop_altinn3.0_about',
        'altinn3/dsop_altinn3.0_tilgangspakker',
        'altinn3/dsop_altinn3.0_samtykkeløsningen',
        'altinn3/dsop_altinn3.0_systembruker',
        'altinn3/dsop_altinn3.0_dialogporten',
        'altinn3/dsop_altinn3.0_innboks',
      ],
    },
  ],
};

export default sidebars;
