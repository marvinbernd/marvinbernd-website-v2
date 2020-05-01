module.exports = {
  siteMetadata: {
    title: `Marvin Bernd | Frontend Web Developer | Frankfurt`,
    description: `Ich bin selbständiger Frontend Web Developer aus Frankfurt. Seit mehreren Jahren unterstütze ich Agenturen und Firmen bei der Umsetzung von modernen Web-Projekten.`,
    author: `@marvinbernd`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Projekte",
        link: "/projekte",
      },
      {
        name: "Leistungen",
        link: "/leistungen",
      },
      {
        name: "Über mich",
        link: "/ueber-mich",
      },
      {
        name: "Kontakt",
        link: "/kontakt",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/mb-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    /* {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }, */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
