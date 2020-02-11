import "./src/main.scss"

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const linkResolver = function(doc) {
  if (doc.type === "home") return "/"
  return `/${doc.uid}`
}

registerLinkResolver(linkResolver)