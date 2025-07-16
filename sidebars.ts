import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'DSOP',
      items: [
        'dsop/index',
        'dsop/dsop_dsop_kontakt',
        'dsop/dsop_dsop_avtaler_og_juridisk',
        'dsop/dsop_dsop_fagutvalg',
        'dsop/dsop_dsop_endringslogg'
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
        'syke-og-uforeopplysninger/dsop_su_integrasjontest',
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
    }
  ],
};

export default sidebars;
