const path = require(`path`)
require("dotenv").config({ path: `.env` })

const prismicRepo = "queerdenken"
const linkResolver = ({ node, key, value }) => doc => `/${doc.uid}`

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
                repositoryName: prismicRepo,
                accessToken: `${process.env.PRISMIC_API_KEY}`,
                linkResolver: linkResolver,
            },
        },
        {
            resolve: 'gatsby-plugin-prismic-preview',
            options: {
                repositoryName: prismicRepo,
                linkResolver: linkResolver,
                path: '/preview',
            }
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
