import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import ScrollDetector from "../components/scroll-detector"
import { FullsizeHero } from "../components/hero"
import { Content, colors, mobile } from "../components/common"

import {
    FaTwitter,
    FaInstagram,
    FaFacebookSquare,
    FaLinkedin,
    FaChevronDown,
} from "react-icons/fa"

export default ({ data: { logo, prismicHome: { data }}}) => (
    <div className="main">
        <Meta title="Queerdenken" />
        <ScrollDetector render={scrolled => <Navbar active={scrolled} />} />
        
        <Chevron />
        
        <FullsizeHero imageData={data.hero_image.localFile.childImageSharp.fluid}>
            <Img fixed={logo.childImageSharp.fixed} alt="logo" />
            <LogoSubtitle>
                qu<span>e</span>erdenken
            </LogoSubtitle>
        </FullsizeHero>

        <section className="section container">
            <Content html={data.intro_text.html} />
        </section>

        <section className="section container">
        </section>

        <div>
            {data.sections.map(({ section_image, section_content }) => (
                <Section>
                    <div className="columns">
                        <div className="column is-half">
                            <Img fluid={section_image.localFile.childImageSharp.fluid} />
                        </div>

                        <div className="column is-half">
                            <Content html={section_content.html} />
                        </div>
                    </div>
                </Section>
            ))}
        </div>

        <Footer />
    </div>
)

export const query = graphql`
    query {
        logo: file(relativePath: {eq: "logo-white.png"}) {
            childImageSharp { fixed(width: 150) { ...GatsbyImageSharpFixed }}
        }
        prismicHome {
            data {
                hero_image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                intro_text {
                    html
                }
                sections {
                    section_image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    section_content {
                        html
                    }
                }
            }
        }
    }
`
    
const Chevron = styled(FaChevronDown)`
    position: absolute;
    z-index: 3;
    color: white;
    left: 50%;
    font-size: 3em;
    transform: translateX(-50%);
    top: calc(100vh - 6rem);
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

const Section = styled.div.attrs({ className: "section container" })`
    &:nth-child(even) > .columns {
        flex-direction: row-reverse;
    }
`
