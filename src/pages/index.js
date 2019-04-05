import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import MainHero from "../components/main-hero"
import "@fortawesome/fontawesome-free/css/all.css"

export const key = "Home"
export const query = graphql`
fragment fluidImage on File {
    childImageSharp { fluid(maxWidth: 600) { ...GatsbyImageSharpFluid_withWebp }}
}

query {
    img1: file(relativePath: { eq: "front1.jpg" }) { ...fluidImage }
    img2: file(relativePath: { eq: "front2.jpg" }) { ...fluidImage }
    img3: file(relativePath: { eq: "front3.jpg" }) { ...fluidImage }
}
`

const sections = [
    {
        image: "img1",
        content: (
            <React.Fragment>
                <h2 className="is-size-4" style={{ marginBottom: "1rem" }}>Social Media</h2>
                <p>
                    Folgen Sie mir auf meinen Social Media-Kanälen für regelmäßige Updates und jede Menge Informatives rund um die Themen Gender und Sexualität. 
                </p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "2rem 0",
                }}>
                    <a href="https://twitter.com/queerdenkende"><i className="fab fa-3x fa-twitter" /></a>
                    <a href="https://twitter.com/queerdenkende"><i className="fab fa-3x fa-facebook-square" /></a>
                    <a href="https://www.facebook.com/Queerdenken/"><i className="fab fa-3x fa-linkedin" /></a>
                    <a href="https://www.instagram.com/queerdenken.de/"><i className="fab fa-3x fa-instagram" /></a>
                </div>
            </React.Fragment>
        ),
    },
    {
        image: "img2",
        content: (
            <React.Fragment>
                <h2 className="is-size-4" style={{ marginBottom: "1rem" }}>Andere Initiativen und Projekte</h2>
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
                    Falls Sie also Interesse haben sich nicht nur mit mir auszutauschen, sondern auch auf dieser Website zu erscheinen, dann melden Sie sich bitte jederzeit. Egal ob Mädchenarbeit, Gewaltprävention, Bildung und Aufklärung -
                </p>
                <p><strong>ich bin gespannt von Ihnen zu hören!</strong></p>
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
        return (
            <div className="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Queerdenken</title>
                    
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>

                <Header activeKey="none" active={this.state.scrolled} />
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
                <MainHero />

                <section className="section container" style={{ marginTop: "4rem" }}>
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
                </section>

                <section className="section container">
                    {sections.map((it, index) => {
                        const imageData = this.props.data[it.image].childImageSharp.fluid
                        return (
                            <div
                                className="columns is-centered"
                                style={{
                                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                                    marginBottom: "2rem",
                                    justifyContent: "space-evenly",
                                }}
                                key={index}
                            >
                                <div
                                    className="column is-4"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    {it.content}
                                </div>
                                <div className="column is-4">
                                    <Img fluid={imageData} style={{ borderRadius: "6px" }} alt="some" />
                                </div>
                            </div>
                        )
                    })}
                </section>

                <Footer />
            </div>
        )
    }
}
