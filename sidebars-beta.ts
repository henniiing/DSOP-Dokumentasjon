import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  betaSidebar: [
    {
      type: 'category',
      label: 'Om Beta',
      items: [
        'beta/dsop_beta_om'
      ],
    },
    {
      type: 'category',
      label: 'FI - Krav og Betalinger (Beta)',
      items: [
        'fi-krav-betalinger/dsop_fi_om',
        'fi-krav-betalinger/dsop_fi_onboarding',
        'fi-krav-betalinger/dsop_fi_integrasjonMaskinporten',
        'fi-krav-betalinger/dsop_fi_faq',
        'fi-krav-betalinger/dsop_fi_forvaltningsrutiner',
        'fi-krav-betalinger/dsop_fi_endringslogg'
      ],
    },
    {
      type: 'category',
      label: 'Politi-Utlevering (Beta)',
      items: [
        'politi-utlevering/dsop_v2politi-utlevering_about',
        'politi-utlevering/dsop_v2politi-utlevering_juridisk',
        'politi-utlevering/dsop_v2politi-utlevering_løsningsbeskrivelse',
        'politi-utlevering/dsop_v2politi-utlevering_utleveringspålegg',
        'politi-utlevering/dsop_v2politi-utlevering_onboarding',
        'politi-utlevering/dsop_v2politi-utlevering_operational_BETA_processes',
        'politi-utlevering/dsop_v2politi-utlevering_BETA_faq',
        'politi-utlevering/dsop_v2politi-utlevering_BETA_changelog'
      ],
    },
    {
      type: 'category',
      label: 'FI-Utlegg Saldo (Beta)',
      items: [
        'fi-utlegg/dsop_fi-utlegg_om',
        'fi-utlegg/dsop_fi-utlegg_juridisk',
        'fi-utlegg/dsop_fi-utlegg_løsningsbeskrivelse_saldo',
        'fi-utlegg/dsop_fi-utlegg_onboarding',
        'fi-utlegg/dsop_fi-utlegg_operational_processes',
        'fi-utlegg/dsop_fi-utlegg_changelog'
      ],
    },
    {
      type: 'category',
      label: 'Skatt Kontroll (Beta)',
      items: [
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_about_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_juridisk_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_onboarding_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_operational_processes_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_faq_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_changelog_BETA'
      ],
    }
  ],
};

export default sidebars;
