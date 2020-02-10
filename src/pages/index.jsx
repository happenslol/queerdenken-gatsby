import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import ScrollDetector from "../components/scroll-detector"
import { FullsizeHero } from "../components/hero"
import {
  Page,
  ContentTube,
  Content,
  Separator,
  colors,
  mobile,
} from "../components/common"

import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa"

export default props => {
  const homeData = props.data.prismic.allHomes.edges[0].node
  console.dir(homeData)

  return (
    <Page>
      <Meta title="Queerdenken" />
      <ScrollDetector render={scrolled => <Navbar active={scrolled} />} />

      <FullsizeHero backgroundSrc={homeData.hero_image.url}>
        <Img fixed={props.data.logo.childImageSharp.fixed} alt="logo" />
        <LogoSubtitle>
          qu<span>e</span>erdenken
        </LogoSubtitle>
      </FullsizeHero>

      <ContentTube>
        <Intro>
          <Content data={homeData.intro_text} />
        </Intro>

        <Separator />

        <Socials>
          <a href="https://twitter.com/queerdenkende">
            <FaTwitter size="3em" />
          </a>
          <a href="https://www.instagram.com/queerdenken.de/">
            <FaInstagram size="3em" />
          </a>
          <a href="https://www.facebook.com/Queerdenken/">
            <FaFacebookSquare size="3em" />
          </a>
          <a href="https://www.linkedin.com/in/julia-wirth/">
            <FaLinkedin size="3em" />
          </a>
        </Socials>

        <div>
          {homeData.sections.map(
            ({ section_image, section_content }, index) => (
              <Section key={index}>
                <div className="columns">
                  <div className="column is-half">
                    <img src={section_image.url} alt={section_image.alt} />
                  </div>

                  <div className="column is-half">
                    <Content data={section_content} />
                  </div>
                </div>
              </Section>
            )
          )}
        </div>
      </ContentTube>

      <Footer />
    </Page>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    prismic {
      allHomes {
        edges {
          node {
            title
            page_title
            link_title
            intro_text
            hero_image
            sections {
              section_content
              section_image
            }
          }
        }
      }
    }
  }
`

const LogoSubtitle = styled.h1`
  font-weight: bold;
  font-family: "Amatic SC", cursive;
  font-size: 8rem;

  span {
    color: ${colors.accent};
  }

  ${mobile`
        font-size: 5rem;
    `}
`

const Intro = styled.section.attrs({ className: "section" })`
  font-size: 1.4rem;
`

const Socials = styled.section.attrs({ className: "section" })`
  display: flex;
  justify-content: space-evenly;

  a {
    color: ${colors.primary};
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #313131;
    }
  }
`

const Section = styled.div.attrs({ className: "section" })`
  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    padding: 0 3em;
  }

  img {
    border-radius: 10px;
  }

  &:nth-child(odd) > .columns {
    flex-direction: row-reverse;
  }
`
