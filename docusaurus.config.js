// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeMastermindHQ",
  tagline: "Experience the power of real-world coding with CodeMastermindHQ.",
  url: "https://codemastermindhq.vercel.app/",
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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      keywords: [
        "code",
        "coding",
        "Software development",
        "programming",
        "web development",
        "JavaScript",
        "React",
        "Node.js",
        "Full stack development",
        "MERN stack",
        "Web development tutorials",
        "Coding tutorials",
        "Learning to code",
        "Code bootcamp",
        "Code mentorship",
        "Code community",
        "MongoDB",
        "Express.js",
        "HTML",
        "CSS",
        "Java",
        "DSA",
      ],
      twitter: {
        site: "@CodeMastermindHQ",
        creator: "@AJAYDHA27250016",
        image: "img/log.png",
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
          { to: "/Projects", label: "Projects", position: "left" },
          { to: "/Learning Paths", label: "Learning Paths", position: "left" },
          {
            to: "/Coding Assessment",
            label: "Coding Assessment",
            position: "left",
          },
          {
            to: "/Live Coding Contests",
            label: "Live Coding Contests",
            position: "left",
          },
          { to: "/Resources", label: "Resources", position: "left" },
          { to: "/Contact", label: "Contact", position: "left" },
          {
            href: "https://github.com/Ajay-Dhangar/CodeMastermindHQ",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/18530900/ajay-dhangar",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ajay-dhangar/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AJAYDHA27250016",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "MERN Stack Developers Network",
                href: "https://www.linkedin.com/groups/14232119/",
              },
              {
                label: "GitHub",
                href: "https://github.com/Ajay-Dhangar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeMastermindHQ. All rights reserved. Made with ❤️ by <a href="https://ajay-dhangar.github.io" target="_blank">Ajay-Dhangar</a>`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
