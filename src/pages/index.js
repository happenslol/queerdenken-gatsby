import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Meta from "../components/meta"

import { FaTwitter, FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa"

export const key = "Home"
export const query = graphql`
    fragment fluidImage on File {
        childImageSharp { fluid(maxWidth: 600) { ...GatsbyImageSharpFluid_withWebp }}
    }

    query {
        background: file(relativePath: {eq: "main.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080) { ...GatsbyImageSharpFluid_withWebp }
            }
        }

        logo: file(relativePath: {eq: "logo-white.png"}) {
            childImageSharp { fixed(width: 150) { ...GatsbyImageSharpFixed }}
        }

        img1: file(relativePath: { eq: "front1.jpg" }) { ...fluidImage }
        img2: file(relativePath: { eq: "front2.jpg" }) { ...fluidImage }
        img3: file(relativePath: { eq: "front3.jpg" }) { ...fluidImage }
    }
`

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
`

const SegmentContainer = styled.div.attrs({
    className: "columns is-centered",
})`
    margin-bottom: 2rem;
    justify-content: space-evenly!important;

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`

const SegmentContent = styled.div.attrs({
    className: "column is-4",
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SegmentHeading = styled.h2.attrs({
    className: "is-size-4",
})`
    margin-bottom: 1rem;
`

const SegmentImage = styled.div.attrs({
    className: "column is-4",
})`
    > * {
        border-radius: 6px;
    }
`

const BoldPar = styled.p`font-weight: bold;`
const PaddedSection = styled.section.attrs({
    className: "section container",
})`
    margin-top: 4rem;
`

const sections = [
    {
        image: "img1",
        content: (
            <React.Fragment>
                <SegmentHeading>Social Media</SegmentHeading>

                <p>
                    Folgen Sie mir auf meinen Social Media-Kanälen für regelmäßige Updates und jede Menge Informatives rund um die Themen Gender und Sexualität. 
                </p>

                <SocialMediaContainer>
                    <a href="https://twitter.com/queerdenkende">
                        <FaTwitter size="3em" />
                    </a>

                    <a href="https://www.linkedin.com/in/julia-wirth/">
                        <FaLinkedin size="3em" />
                    </a>

                    <a href="https://www.facebook.com/Queerdenken/">
                        <FaFacebookSquare size="3em" />
                    </a>

                    <a href="https://www.instagram.com/queerdenken.de/">
                        <FaInstagram size="3em" />
                    </a>
                </SocialMediaContainer>
            </React.Fragment>
        ),
    },
    {
        image: "img2",
        content: (
            <React.Fragment>
                <SegmentHeading>Andere Initiativen und Projekte</SegmentHeading>
                <p>
                    Sie sind ebenfalls in der Bildungs- und Antidiskriminierungsarbeit zum Thema Gender beschäftigt? Diese Website soll langfristig ein Informationsportal werden, das Initiativen, Projekte und Vereine dieser Art in Hessen zusammenträgt und an einer Stelle auffindbar macht.
                </p>
            </React.Fragment>
        ),
    },
    {
        image: "img3",
        content: (
            <React.Fragment>
                <p>
                    Falls Sie also Interesse haben sich nicht nur mit mir auszutauschen, sondern auch auf dieser Website zu erscheinen, dann melden Sie sich bitte jederzeit. Egal ob Mädchenarbeit, Gewaltprävention, Bildung und Aufklärung&nbsp;-
                </p>
                <BoldPar>ich bin gespannt von Ihnen zu hören!</BoldPar>
            </React.Fragment>
        ),
    },
]

export default class IndexPage extends React.Component {
    state = { scrolled: false }

    onScroll() {
        if (window.scrollY > 0 && !this.state.scrolled) {
            this.setState({ scrolled: true })
        } else if (window.scrollY === 0 && this.state.scrolled) {
            this.setState({ scrolled: false })
        }
    }

    componentDidMount() {
        this.onScroll = this.onScroll.bind(this)
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
    }

    render() {
        const background = this.props.data.background.childImageSharp.fluid
        const logo = this.props.data.logo.childImageSharp.fixed

        return (
            <div className="main">
                <Meta title="Queerdenken" />
                <Navbar activeKey="none" active={this.state.scrolled} />

                <i
                    className="fas fa-3x fa-chevron-down"
                    style={{
                        position: "absolute",
                        zIndex: 3,
                        color: "white",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "calc(100vh - 6rem)",
                    }}
                />

                <header
                    className="hero is-fullheight is-primary main-hero"
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    <Img
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            minWidth: "100%",
                            minHeight: "100vh",
                        }}
                        fluid={background}
                        alt="background"
                    />
                    <div className="hero-body" style={{ zIndex: 2 }}>
                        <div className="container has-text-centered">
                            <Img
                                fixed={logo}
                                alt="logo"
                            />
                            <h1 style={{
                                fontWeight: "bold",
                                fontFamily: "Amatic SC, cursive",
                            }}>
                                qu
                                <span style={{ color: "#CA2131" }}>e</span>
                                erdenken
                            </h1>
                        </div>
                    </div>
                </header>

                <PaddedSection>
                    <div className="columns is-centered is-size-4">
                        <div className="column is-10">
                            <p style={{ marginBottom: "2rem" }}><strong>
                                Queerdenken ist ein Bildungs- und Aufklärungsprojekt, das zur kritischen Reflexion über gesellschaftlich normierte und normalisierte Geschlechterrollen befähigen will.
                            </strong></p> 
                            <p>
                                Zu diesem Thema biete ich Workshops, Fortbildungen und Vorträge sowohl für Schulklassen und Jugendgruppen als auch für Lehrkräfte im weitesten Sinne an - also alle Personen, die mit der (Aus-)Bildung und Betreuung von anderen Personen beschäftigt sind. Im Zentrum der Veranstaltungen steht eine alltagsnahe und übertragbare Vermittlung von Wissen und Kompetenzen zu den Wirkungsweisen von Geschlecht in unserem Leben, die für die Vielfalt von Geschlechtsentwürfen und -identitäten sensibilisieren und damit aktiv Vorurteile und Diskriminierung bekämpfen soll.
                            </p>

                            <p style={{ marginTop: "2rem" }}>
                                Erfahren Sie auf dieser Seite alles zum Projekt, zu den Angeboten und meiner Person.
                            </p>
                        </div>
                    </div>
                </PaddedSection>

                <section className="section container">
                    {sections.map((it, index) => {
                        const imageData = this.props.data[it.image].childImageSharp.fluid
                        return (
                            <SegmentContainer key={index}>
                                <SegmentContent>{it.content}</SegmentContent>
                                <SegmentImage>
                                    <Img fluid={imageData} alt="some"/>
                                </SegmentImage>
                            </SegmentContainer>
                        )
                    })}
                </section>

                <Footer />
            </div>
        )
    }
}
