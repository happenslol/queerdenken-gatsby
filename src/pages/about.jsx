import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import { Hero } from "../components/hero"
import { ContentTube, Page, Content, mobile } from "../components/common"

export default ({ data: { prismicAbout: { uid, data }}}) => (
    <Page>
        <Meta title={`${data.page_title.text} • Queerdenken`} />
        <Navbar active={true} url={uid} />
        <Hero
            title={data.title.text}
            imageData={data.hero_image.localFile.childImageSharp.fluid}
        />

        <ContentTube>
            <section className="section">
                <div className="columns">
                    <MeImage className="column is-4">
                        <Img fixed={data.me_image.localFile.childImageSharp.fixed} />
                    </MeImage>

                    <div className="column is-8">
                        <Content html={data.me_text.html} />
                    </div>
                </div>
            </section>

            <div>
                <section className="section">
                    <ResumeTitle className="is-size-3">{data.resume_title.text}</ResumeTitle>
                </section>

                {data.resume_sections.map(({
                    resume_section_title,
                    resume_section_content,
                    section_color,
                }) => (
                    <ResumeSection color={section_color}>
                        <h3 className="is-size-4">{resume_section_title.text}</h3>
                        <Content html={resume_section_content.html} />
                    </ResumeSection>
                ))}
            </div>
        </ContentTube>

        <Footer />
    </Page>
)

export const query = graphql`
query {
  prismicAbout {
    uid
    data {
      page_title {
        text
      }
      title {
        text
      }
      hero_image {
        localFile {
          childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
      me_text {
        html
      }
      me_image {
        localFile {
          childImageSharp {
              fixed(width: 250, height: 400) {
                ...GatsbyImageSharpFixed_withWebp
              }
          }
        }
      }
      resume_title {
        text
      }
      resume_sections {
        resume_section_title {
          text
        }
        resume_section_content {
          html
        }
        section_color
      }
    }
  }
}
`

const MeImage = styled.div`
    ${mobile`
        display: flex;
        justify-content: center;
    `}

    img {
        border-radius: 10px;
    }
`

const ResumeTitle = styled.h2`
    margin-bottom: -3rem;
`

const ResumeSection = styled.section.attrs({ className: "section" })`
    padding-left: 5rem;
    position: relative;

    &::before {
        content: " ";
        position: absolute;
        display: block;
        height: calc(100% - 5rem);
        background-color: ${props => props.color};
        width: 6px;
        border-radius: 10px;
        left: 1.5rem;
    }
`
