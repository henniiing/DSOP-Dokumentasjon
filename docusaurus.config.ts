import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DSOP Dokumentasjon',
  tagline: 'Digital Samhandling Offentlig-Privat',
  favicon: 'img/bits-logo-uten-tekst.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'main',
          path: 'prod-sider',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined, // Remove edit links
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false, // Disable blog
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'beta',
        path: 'beta-sider',
        routeBasePath: '/beta',
        sidebarPath: './sidebars-beta.ts',
        editUrl: undefined,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DSOP dokumentasjon',
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Dokumentasjon',
        },
        {
          to: '/beta',
          label: 'Beta',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `©${new Date().getFullYear()} Bits AS<br/>Sist oppdatert: ${new Date().toLocaleDateString('no-NO', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })}<br/><br/><a href="https://bits.no/" target="_blank" rel="noopener noreferrer"><img src="/img/bits-logo-med-tekst.png" alt="Bits AS Logo" style="width: 200px; height: 80px;" /></a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
