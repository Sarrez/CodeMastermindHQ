// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeMastermindHQ",
  tagline: "Experience the power of real-world coding with CodeMastermindHQ.",
  url: "https://codemastermindhq.vercel.app/",
  // url: "http://localhost:3000/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ajay-Dhangar", // Usually your GitHub org/user name.
  projectName: "CodeMastermindHQ", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Ajay-Dhangar/CodeMastermindHQ/blob/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Ajay-Dhangar/CodeMastermindHQ/blob/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "Java, cooking, Express.js, HTML, CSS, MERN stack, MongoDB, Code community, Code mentorship, Code bootcamp, Learning to code, Coding tutorials, Web development tutorials, blog, code, coding, Software development, programming, web development, JavaScript, React,Node.js, Full stack development,DSA",
        },
      ],

      // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML

      twitter: {
        site: "@CodeMastermindHQ",
        creator: "@AJAYDHA27250016",
        image: "img/log.png",
      },

      algolia:{
        appId: "3EH6TJCID4",
        apiKey: "ad19335c8a5507b62282984061a68689",
        indexName: "CodeMasterMindHQ",
        contextualSearch: true,
        placeholder:'Search in My Website',
      },

      navbar: {
        title: "CodeMastermindHQ",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-6.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },

          { to: "/blog", label: "Blog", position: "left" },

          {
            href: "https://github.com/Ajay-Dhangar/CodeMastermindHQ",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/sponsors/Ajay-Dhangar",
            label: "Sponsor this project",
            position: "right",
          },
        ],
        // algolia: {
        //   // The application ID provided by Algolia
        //   appId: "YOUR_APP_ID",

        //   // Public API key: it is safe to commit it
        //   apiKey: "YOUR_SEARCH_API_KEY",

        //   indexName: "YOUR_INDEX_NAME",

        //   // Optional: see doc section below
        //   contextualSearch: true,

        //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //   externalUrlRegex: "external\\.com|domain\\.com",

        //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //   replaceSearchResultPathname: {
        //     from: "/docs/", // or as RegExp: /\/docs\//
        //     to: "/",
        //   },

        //   // Optional: Algolia search parameters
        //   searchParameters: {},

        //   // Optional: path for search page that enabled by default (`false` to disable it)
        //   searchPagePath: "search",

        //   //... other Algolia params
        // },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Projects",
                to: "/",
              },
              {
                label: "Js Interview Q/A",
                to: "https://javascript-mastery.github.io/javascript-mastery/Js-Interview/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflowteams.com/c/codemastermindhq",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/BFkPKMsfuZ",
              },

              {
                label: "Whatsapp",
                href: "https://chat.whatsapp.com/HzbYP9F1Sn3ASPW4NCIAkL",
              },
              {
                label: "MERN Stack Developers Network",
                href: "https://www.linkedin.com/groups/14232119/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Ajay-Dhangar",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AJAYDHA27250016",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ajay-dhangar/",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/18530900/ajay-dhangar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeMastermindHQ. Made with ❤️ by <a href="https://ajay-dhangar.github.io" target="_blank">Ajay-Dhangar</a>`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
