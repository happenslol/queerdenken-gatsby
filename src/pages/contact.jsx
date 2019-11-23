import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"

import Meta from "../components/meta"
import Navbar from "../components/navbar"
import { Hero } from "../components/hero"
import Footer from "../components/footer"
import { ContentTube, Page, Content } from "../components/common"

export default ({
  data: {
    prismicContact: { uid, data },
  },
  ...props
}) => (
  <Page>
    <Meta title={`${data.page_title.text} • Queerdenken`} />
    <Navbar active={true} url={uid} />
    <Hero
      title={data.title.text}
      imageData={data.hero_image.localFile.childImageSharp.fluid}
    />

    <ContentTube>
      <section className="section is-size-5 has-text-centered">
        <Content html={data.description.html} />
      </section>

      <section className="section is-size-4 has-text-weight-bold has-text-centered">
        <Content html={data.call_to_action.html} />
      </section>

      <section className="section">
        <div className="columns is-centered has-text-centered">
          <div className="column is-third">
            <Content html={data.left.html} />
          </div>

          <div className="column is-third content">
            <p className="is-size-4">
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>

            <p>
              {data.links.map(
                ({ link_item, link_description, link_text }, index) => (
                  <React.Fragment key={index}>
                    <strong>{link_description}</strong>
                    &nbsp;&bull;&nbsp;
                    <a href={link_item.url} target={link_item.target}>
                      {link_text}
                    </a>
                    <br />
                  </React.Fragment>
                )
              )}
            </p>
          </div>

          <div className="column is-third">
            <Content html={data.right.html} />
          </div>
        </div>
      </section>

      <form
        className="form section"
        method="POST"
        data-netlify="true"
        name="Contact"
        action={`${props.location.pathname}?thanks`}
      >
        <div className="field columns">
          <div className="column is-half">
            <label className="label">Dein Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Dein Name"
                name="name"
              />
            </div>
          </div>
        </div>

        <div className="field columns">
          <div className="column is-half">
            <label className="label">Deine E-Mail</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="deine@email.de"
                name="_replyto"
              />
            </div>
          </div>
        </div>

        <div className="field columns">
          <div className="column is-third">
            <label className="label">Deine Anfrage</label>
            <div className="control">
              <textarea className="textarea" placeholder="Deine Nachricht" />
            </div>
          </div>
        </div>

        <div className="field">
          <input className="button is-primary" type="submit" value="Absenden" />
        </div>
      </form>
    </ContentTube>

    {props.location.search.indexOf("thanks") !== -1 && (
      <NotifContainer>
        <Notif>{data.thanks_text.text}</Notif>
      </NotifContainer>
    )}

    <Footer />
  </Page>
)

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
  background: rgba(0, 0, 0, .7);
  padding: 20px 40px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  animation: 0.5s linear 5s 1 ${fade} forwards;
  border-radius: 6px;
`

export const query = graphql`
  query {
    prismicContact {
      uid
      data {
        thanks_text {
          text
        }
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
        description {
          html
        }
        call_to_action {
          html
        }
        left {
          html
        }
        right {
          html
        }
        email
        links {
          link_item {
            target
            url
          }
          link_description
          link_text
        }
      }
    }
  }
`
