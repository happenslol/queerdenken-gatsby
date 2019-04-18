import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/hero"
import { Section, Hr } from "../components/common"
import Meta from "../components/meta"

export const key = "Kontakt"
export const query = graphql`
query {
    background: file(relativePath: {eq: "contact-bg.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 144) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
}
`

export default ({ data }) => (
    <div className="main">
        <Meta title={`${key} | Queerdenken`} />
        <Navbar active={true} activeKey={key} />
        <Hero title={key} imageData={data.background.childImageSharp.fluid} />

        <Section>
            <p>
                Sie wollen einen Workshop oder eine Fortbildung buchen?<br />
                Sie brauchen Hilfe bei Fragen rund um das Thema Gender?<br />
                Sie haben Anregungen, Ideen und Feedback für mich?<br />
            </p>

            <p>
                Dann melden Sie sich einfach über das folgende Kontaktformular oder die angegeben Kontaktdaten.
            </p>
            <p style={{ textAlign: "center", marginTop: "4rem" }}>
                <strong>Ich freue mich darauf von Ihnen zu hören!</strong>
            </p>
        </Section>

        <section className="section container">
            <div className="columns is-centered has-text-centered">
                <div className="column is-third content">
                    <p>
                    <strong>Postanschrift:</strong><br />
                    Queerdenken<br />
                    c/o Julia Wirth<br />
                    Willemerstr. 25<br />
                    60594 Frankfurt am Main<br />
                    </p>
                </div>

                <div className="column is-third content">
                    <p className="is-size-4"><a href="mailto:info@queerdenken.de">info@queerdenken.de</a></p>

                    <p>
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/queerdenken.de/">instagram.com/queerdenken.de</a><br />
                        <strong>Twitter:</strong> <a href="https://twitter.com/queerdenkende">twitter.com/queerdenkende</a><br />
                        <strong>Facebook:</strong> <a href="https://www.facebook.com/Queerdenken/">facebook.com/Queerdenken</a><br />
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/julia-wirth/">linkedin.com/in/julia-wirth</a><br />
                    </p>
                </div>

                <div className="column is-third content">
                    <p>
                    <strong>Bankverbindung:</strong><br />
                    Kontoinhaberin: Julia Wirth<br />
                    IBAN: DE74 1001 1001 2628 8729 85<br />
                    BIC: NTSBDEB1XXX<br />
                    </p>
                </div>
            </div>

            <div className="columns is-centered">
                <div className="column is-10"><Hr /></div>
            </div>
        </section>

        <form className="form section container" action="https://formspree.io/contact@queerdenken.de" method="POST">
            <div className="columns">
                <div className="field column is-5 is-offset-1">
                    <label className="label">Dein Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Dein Name" name="name"/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-5 is-offset-1">
                    <label className="label">Deine E-Mail</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="deine@email.de" name="_replyto"/>
                    </div>
                </div>
            </div>

            <div className="columns is-centered">
                <div className="field column is-10">
                    <label className="label">Deine Anfrage</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Deine Nachricht"></textarea>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-5 is-offset-1">
                    <input className="button is-primary" type="submit" value="Absenden" />
                </div>
            </div>
        </form>

        <Footer />
    </div>
)