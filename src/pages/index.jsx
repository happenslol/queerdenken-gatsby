import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"
import ScrollDetector from "../components/scroll-detector"
import { RichText } from "prismic-reactjs"
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
  const doc = props.data.prismic.allHomes.edges.slice(0, 1).pop()
  if (!doc) return null

  const homeData = doc.node

  return (
    <Page>
      <Meta title="Queerdenken" />
      <ScrollDetector render={scrolled => <Navbar active={scrolled} />} />

      <FullsizeHero backgroundSrc={homeData.hero_image.url}>
        <LogoImg src={props.data.logo.publicURL} alt="Queerdenken" />
        <LogoSubtitle>
          qu<span>e</span>erdenken
        </LogoSubtitle>
      </FullsizeHero>

      <ContentTube>
        <Intro>
          <Content data={homeData.intro_text} />
        </Intro>

        <Separator />

        <section className="section">
          <MailchimpWrapper
            dangerouslySetInnerHTML={{
              __html: mailchimpHtml(
                RichText.asText(homeData.newsletter_title),
                RichText.asText(homeData.newsletter_submit)
              ),
            }}
          />
        </section>

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

const mailchimpHtml = (title, submit) => `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<div id="mc_embed_signup">
<form action="https://queerdenken.us4.list-manage.com/subscribe/post?u=29fce605dd34a45e5e20610ef&amp;id=fd725cce98" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="form validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">${title}</label>
	<input type="email" value="" name="EMAIL" class="email control" id="mce-EMAIL" placeholder="E-Mail Adresse" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_29fce605dd34a45e5e20610ef_fd725cce98" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="${submit}" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
`

const MailchimpWrapper = styled.div`
  #mc_embed_signup {
    background: #fff;
    clear: left;
    font: 14px Helvetica, Arial, sans-serif;
    width: 100%;

    label {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }
`

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo-white.png" }) {
      publicURL
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
            newsletter_title
            newsletter_submit
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

const LogoImg = styled.img`
  width: 150px;
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
