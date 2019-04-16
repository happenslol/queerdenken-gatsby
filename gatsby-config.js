const path = require(`path`)

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
                trackingId: "UA-124189525-2",
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
