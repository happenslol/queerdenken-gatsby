import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Meta from "../components/meta"
import { Content } from "../components/common"

export default ({ data: { prismicWorkshops: { uid, data }}}) => (
    <div className="main">
        <Meta title={`${data.page_title.text} | Queerdenken`} />
        <Navbar active={true} activeKey={uid} />
        <Hero
            title={data.title.text}
            imageData={data.hero_image.localFile.childImageSharp.fluid}
        />
    
        <section className="section container">
            <Content html={data.intro.html} />
        </section>

        {data.sections.map(({ section_image, section_title, section_content }) => (
            <section className="section container">
                <h3>{section_title.text}</h3>
                <Img fluid={section_image.localFile.childImageSharp.fluid} />
                <Content html={section_content.html} />
            </section>
        ))}

        <section className="section container">
            <Content html={data.call_to_action.html} />
        </section>
    
        <Footer />
    </div>
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
