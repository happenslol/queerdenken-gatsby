import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import { Hero } from "../components/hero"
import { ContentTube, Page, Content, mobile } from "../components/common"
import { RichText } from "prismic-reactjs"

export default props => {
  const pageData = props.data.prismic.allPages.edges[0].node

  return (
    <Page>
      <Meta title={`${RichText.asText(pageData.link_title)} • Queerdenken`} />
      <Navbar active={true} url={pageData._meta.uid} />
      <Hero
        title={RichText.asText(pageData.link_title)}
        backgroundSrc={pageData.hero_image.url}
      />

      <ContentTube>
        {pageData.body.map((slice, index) => {
          switch (slice.type) {
            case "text":
              return (
                <section className="section" key={index}>
                  {slice.fields.map(field => (
                    <Content data={field.text_segment} />
                  ))}
                </section>
              )
            case "text_with_image":
              return (
                <section className="section" key={index}>
                  <h3 className="is-size-3">
                    {RichText.asText(slice.primary.section_title)}
                  </h3>
                  <SectionImg
                    src={slice.primary.section_image.url}
                    alt={slice.primary.section_image.alt}
                  />
                  <Content data={slice.primary.section_content} />
                </section>
              )
            case "text_with_image_left":
              return (
                <section className="section" key={index}>
                  <div className="columns">
                    <ColImage className="column is-4">
                      <img
                        src={slice.primary.image.url}
                        alt={slice.primary.image.alt}
                      />
                    </ColImage>

                    <div className="column is-8">
                      <Content data={slice.primary.content} />
                    </div>
                  </div>
                </section>
              )
            case "colored_sections":
              return (
                <div>
                  <section className="section">
                    <ResumeTitle className="is-size-3">
                      {RichText.asText(slice.primary.title)}
                    </ResumeTitle>
                  </section>

                  {slice.fields.map((section, sectionIndex) => (
                    <ResumeSection
                      color={section.section_color}
                      key={sectionIndex}
                    >
                      <ResumeSectionTitle>
                        {RichText.asText(section.section_title)}
                      </ResumeSectionTitle>
                      <Content data={section.section_content} />
                    </ResumeSection>
                  ))}
                </div>
              )
            case "centered_text":
              return (
                <section className="section has-text-centered">
                  <Content data={slice.primary.text} />
                </section>
              )
            case "3_text_columns":
              return (
                <section className="section">
                  <div className="columns is-centered has-text-centered">
                    {slice.fields.map((field, fieldIndex) => (
                      <div className="column is-third" key={fieldIndex}>
                        <Content data={field.text} />
                      </div>
                    ))}
                  </div>
                </section>
              )
            case "contact":
              return (
                <form
                  className="form section"
                  method="POST"
                  data-netlify="true"
                  name="Contact"
                  action={`${props.location.pathname}?thanks`}
                >
                  <div className="field columns">
                    <div className="column is-half">
                      <label className="label" htmlFor="name">Ihr Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Ihr Name"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field columns">
                    <div className="column is-half">
                      <label className="label" htmlFor="_replyto">Ihre E-Mail</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="adresse@email.de"
                          name="_replyto"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field columns">
                    <div className="column is-third">
                      <label className="label" htmlFor="message">Ihre Anfrage</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          placeholder="Ihre Nachricht"
                          name="message"
                        />
                      </div>
                    </div>
                  </div>

                  {props.location.search.indexOf("thanks") !== -1 && (
                    <NotifContainer>
                      <Notif>{RichText.asText(slice.primary.thanks)}</Notif>
                    </NotifContainer>
                  )}

                  <div className="field">
                    <input
                      className="button is-primary"
                      type="submit"
                      value="Absenden"
                    />
                  </div>
                </form>
              )
            default:
              return <></>
          }
        })}
      </ContentTube>

      <Footer />
    </Page>
  )
}

const NotifContainer = styled.div`
  position: fixed;
  z-index: 300;
  color: #fff;
  bottom: 10%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const fade = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Notif = styled.div`
  max-width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  animation: 0.5s linear 5s 1 ${fade} forwards;
  border-radius: 6px;
`

const ResumeSectionTitle = styled.h3.attrs({ className: "is-size-4" })`
  margin-bottom: 2rem;
`

const ResumeSection = styled.section.attrs({ className: "section" })`
  padding-left: 5rem;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    display: block;
    height: calc(100% - 3rem);
    background-color: ${props => props.color};
    width: 6px;
    border-radius: 10px;
    left: 1.5rem;
    top: 1.5rem;
  }
`

const ResumeTitle = styled.h2`
  margin-bottom: -3rem;
`

const ColImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;

  ${mobile`
    padding-right: 0;
    max-height: 400px;
  `}

  img {
    border-radius: 10px;
    object-fit: contain;

    ${mobile`
      height: 400px;
      margin-bottom: 4rem;
    `}
  }
`

const SectionImg = styled.img`
  margin: 2rem 0;
`

export const query = graphql`
  query($uid: String!) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            hero_image
            link_title
            _meta {
              uid
            }
            body {
              ... on PRISMIC_PageBodyText {
                type
                fields {
                  text_segment
                }
              }
              ... on PRISMIC_PageBodyText_with_image {
                type
                primary {
                  section_title
                  section_content
                  section_image
                }
              }
              ... on PRISMIC_PageBodyText_with_image_left {
                type
                primary {
                  image
                  content
                }
              }
              ... on PRISMIC_PageBodyColored_sections {
                type
                primary {
                  title
                }
                fields {
                  section_title
                  section_color
                  section_content
                }
              }
              ... on PRISMIC_PageBodyCentered_text {
                type
                primary {
                  text
                }
              }
              ... on PRISMIC_PageBody3_text_columns {
                type
                fields {
                  text
                }
              }
              ... on PRISMIC_PageBodyContact {
                type
                primary {
                  thank_you
                }
              }
            }
          }
        }
      }
    }
  }
`
