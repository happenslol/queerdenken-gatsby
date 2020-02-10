import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

const FooterBase = ({ className }) => (
  <footer className={`footer ${className}`}>
    <div className="content has-text-white">
      <StaticQuery
        query={linksQuery}
        render={data =>
          data.prismic.allPages.edges
            .sort((a, b) => a.node.index - b.node.index)
            .map((edge, index) => (
              <React.Fragment key={index}>
                <a href={edge.node._meta.uid}>
                  {RichText.asText(edge.node.link_title)}
                </a>
                <br />
              </React.Fragment>
            ))
        }
      />
      <p>
        &copy; 2019 Julia Wirth, Queerdenken
        <br />
        <a href="mailto:mail@juliawirth.me">mail@juliawirth.me</a>
      </p>

      <p>
        site design by <a href="https://github.com/happenslol">h.wiegand</a>
        <br />
        <a href="mailto:web@hwgnd.de">web@hwgnd.de</a>
      </p>
    </div>
  </footer>
)

const linksQuery = graphql`
  query {
    prismic {
      allPages(where: { link_location_fulltext: "Footer" }) {
        edges {
          node {
            link_title
            index
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

export default styled(FooterBase)`
  margin-top: 4rem;
  width: 100vw;
  background: #3b3b3b;
  padding-bottom: 2rem;

  > .content {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;

    a {
      color: #ddd;
    }
  }
`
