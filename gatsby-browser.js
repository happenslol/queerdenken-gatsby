import "./src/main.scss"

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const linkResolver = ({ node, key, value }) => doc => `/${doc.uid}`
registerLinkResolver(linkResolver)