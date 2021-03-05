module.exports = {
  siteMetadata: {
    title: `Letras Virtuales`,
    subtitle: `Rutas para la escritura auténtica`,
    description: `Letras Virtuales es una propuesta de talleres de motivación literaria a cargo de Gabriela Onetto. La comuna, su comunidad, está formada por escritores de todo el mundo y gente que, aún sin dedicarse a la literatura, disfruta de escribir y conocerse por esta vía.`,
    social: {
      twitter: `@raul`,
      instagram: `@raul`,
      youtube: `@raul`,
      facebook: `@raul`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`
  ],
}
