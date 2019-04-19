import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import { Hero } from "../components/hero"
import { ContentTube, Separator, Page, Content } from "../components/common"

export default ({ data: { prismicWorkshops: { uid, data }}}) => (
    <Page>
        <Meta title={`${data.page_title.text} • Queerdenken`} />
        <Navbar active={true} url={uid} />
        <Hero
            title={data.title.text}
            imageData={data.hero_image.localFile.childImageSharp.fluid}
        />
    
        <ContentTube>
            <Intro>
                <Content html={data.intro.html} />
            </Intro>

            <Separator />

            {data.sections.map(({ section_image, section_title, section_content }) => (
                <section className="section">
                    <h3 className="is-size-3">{section_title.text}</h3>
                    <SectionImg fluid={section_image.localFile.childImageSharp.fluid} />
                    <Content html={section_content.html} />
                </section>
            ))}

            <section className="section">
                <Content html={data.call_to_action.html} />
            </section>
        </ContentTube>
    
        <Footer />
    </Page>
)

export const query = graphql`
query {
    prismicWorkshops {
        uid
        data {
            title {
                text
            }
            hero_image {
                localFile {
                    childImageSharp {
                        fluid(maxWidth:1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            intro {
                html
            }
            sections {
                section_title {
                    text
                }
                section_content {
                    html
                }
                section_image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth:1400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
            page_title {
                text
            }
            link_title {
                text
            }
            call_to_action {
                html
            }
        }
    }
}
`

const SectionImg = styled(Img)`
    margin: 2rem 0;
`

const Intro = styled.section.attrs({ className: "section" })`
    font-size: 1.4em;
`
