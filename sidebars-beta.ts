import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  "mainSidebar": [
    {
      "type": "category",
      "label": "Om betasiden",
      "items": [
        {
          "type": "doc",
          "id": "dsop_beta_om",
          "label": "Bruk av betasiden"
        }
      ]
    },
    {
      "type": "category",
      "label": "Skatt-Kontroll",
      "items": [
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_about_BETA",
          "label": "Om Skatt-Kontroll"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_juridisk_BETA",
          "label": "Juridiske rammebetingelser"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA",
          "label": "Løsningsbeskrivelse"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_onboarding_BETA",
          "label": "Onboarding for datakilder"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_operational_processes_BETA",
          "label": "Forvaltningsrutiner"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_faq_BETA",
          "label": "FAQ"
        },
        {
          "type": "doc",
          "id": "dsop_v2kontroll_skatt_changelog_BETA",
          "label": "Endringslogg"
        }
      ]
    }
  ]
};

export default sidebars;
