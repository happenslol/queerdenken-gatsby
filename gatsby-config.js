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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `${process.env.ANALYTICS_KEY}`,
            },
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `queerdenken`,
                accessToken: `${process.env.PRISMIC_API_KEY}`,
                linkResolver: ({ node, key, value }) => doc => `/${doc.id}`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {},
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
