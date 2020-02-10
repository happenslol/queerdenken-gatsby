const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      prismic {
        allPages {
          edges {
            node {
              link_title
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)

  result.data.prismic.allPages.edges.map(({ node: page }) => {
    actions.createPage({
      path: page._meta.uid,
      component: path.resolve("./src/templates/Page.jsx"),
      context: {
        uid: page._meta.uid,
      },
    })
  })
}