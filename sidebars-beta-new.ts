import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  betaSidebar: [
    {
      type: 'category',
      label: 'Om betasiden',
      collapsed: false,
      items: [
        'beta/dsop_beta_om',
      ],
    },
    {
      type: 'category',
      label: 'Skatt-Kontroll BETA',
      collapsed: true,
      items: [
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_about_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_juridisk_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_onboarding_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_operational_processes_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_faq_BETA',
        'skatt-kontroll-beta/dsop_v2kontroll_skatt_changelog_BETA',
      ],
    },
  ],
};

export default sidebars;
