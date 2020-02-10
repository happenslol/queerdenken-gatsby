const path = require(`path`)
require("dotenv").config({ path: `.env` })

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-source-prismic-graphql`,
            options: {
                repositoryName: "queerdenken",
                accessToken: `${process.env.PRISMIC_API_KEY}`,
                previews: true,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {},
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Queerdenken`,
            short_name: `Queerdenken`,
            start_url: `/`,
            background_color: `#FFFFFF`,
            theme_color: `#FFFFFF`,
            display: `standalone`,
          },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
