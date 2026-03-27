// docusaurus.config.js
const config = {
  title: 'OpenCredit',
  tagline: 'Smarter Banking. Safer Experience. Seamless Access',
  url: 'https://Inshira-Shakeel.github.io',
  baseUrl: '/OpenCredit/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Inshira-Shakeel', // Usually your GitHub org/user name.
  projectName: 'OpenCredit',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      {
        docs: false, // We will handle docs via plugins
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
      },
    ],
  ],

  plugins: [
    // Overview plugin
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'overview',
        path: 'docs/Overview',
        routeBasePath: 'overview',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],

    // API plugin
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'docs/API',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarAPI.js'),
      },
    ],

    // Backoffice plugin
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backoffice',
        path: 'docs/Backoffice',
        routeBasePath: 'backoffice',
        sidebarPath: require.resolve('./sidebarBackoffice.js'),
      },
    ],

    // Functional Specs plugin
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'functionalSpecs',
        path: 'docs/FunctionalSpecs',
        routeBasePath: 'functional-specs',
        sidebarPath: require.resolve('./sidebarFunctional.js'),
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OpenCredit',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'overviewSidebar',
          docsPluginId: 'overview',
          label: 'Overview',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          docsPluginId: 'api',
          label: 'API Specifications',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'backofficeSidebar',
          docsPluginId: 'backoffice',
          label: 'Backoffice',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'functionalSidebar',
          docsPluginId: 'functionalSpecs',
          label: 'Functional Specifications',
          position: 'left',
        },
        {
          href: 'https://github.com/Inshira-Shakeel/credsys-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} OpenDigital.`,
    },
  },
};

module.exports = config;
