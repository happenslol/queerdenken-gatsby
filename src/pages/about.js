import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/hero"
import { Hr } from "../components/common"

import meImg from "../images/me.jpg"

export const key = "Über Mich"
export const query = graphql`
query {
    background: file(relativePath: {eq: "about-bg.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 144) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
    mee: file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 600) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
}
`

export default ({ data }) => (
    <div className="main">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{key} | Queerdenken</title>

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Helmet>

        <Navbar active={true} activeKey={key} />
        <Hero title={key} imageData={data.background.childImageSharp.fluid} />

        <section className="section container">
            <div className="columns">
                <div
                    className="column is-5"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        alt="Julia Wirth"
                        src={meImg}
                        style={{ borderRadius: "6px" }}
                    />
                </div>

                <div className="column is-7 content is-size-5">
                    <p>
                        <strong>Unterrichten war schon immer mein Traum.</strong><br /><br />Dass ich das nicht klassisch in der Schule oder an der Uni tun würde, hatte ich zunächst gar nicht auf dem Schirm. Dann kam die Hessische Schülerakademie und meine erste Gelegenheit einen Kurs zum Thema Gender selbst zu gestalten - und dabei blieb ich hängen.<br />Nicht nur, weil ich das Gefühl hatte, Inhalte zu vermitteln, die eine unmittelbare Auswirkung auf die Gruppe hatten, sondern auch, weil mich das Thema schon seit Jahren beschäftigt, fasziniert und frustriert.
                    </p>

                    <p>
                        Bereits während meines Studiums habe ich an verschiedenen Schulformen und mit verschiedenen Altersgruppen gearbeitet, an der Universität Studierende unterrichtet und im Rahmen von Ausstellungen und Projekten Bildungsangebote erarbeitet.<br />Und egal ob in der Schule, der Uni, in der Vereinsarbeit oder in der außerschulischen Bildungsarbeit: Ich merke immer wieder, wie wenig Bewusstsein für den fundamentalen Einfluss von Geschlechterkategorien auf unser Leben überhaupt vorhanden ist und wie viel daran schlicht auf fehlendem Wissen beruht.<br /><br /><strong>Diese Wissenslücke möchte ich gerne angehen - einen Workshop nach dem anderen.</strong> 
                    </p>
                </div>
            </div>

            <div className="columns is-centered">
                <div className="column is-10"><Hr margin="4rem 0 0 0" /></div>
            </div>
        </section>

        <section className="section container">
            <div className="columns is-centered">
                <div className="column is-10 content">
                    <h2>Werdegang</h2>

                    <ul>
                        <li style={{ marginTop: "2rem" }}>
                            <h4>Beruflich</h4>

                            <p>
                                Seit 01/2019: <strong>Hessische Schülerakademie für die Mittelstufe</strong><br />
                                Kursleitung im Wahlkurs „Gender und Gesellschaft“
                            </p>

                            <p>
                                Seit 04/2018: <strong>Institut für Stadtgeschichte Frankfurt am Main</strong><br />
                                Archivpädagogin
                            </p>

                            <p>
                                04/2017 – 01/2018: <strong>Montessori-Schule Mühlheim</strong><br />
                                Lernbegleiterin Jahrgangsstufe 4 bis 6
                            </p>

                            <p>
                                09/2016 – 03/2018: <strong>Hessische Schülerakademie für Oberstufe</strong><br />
                                Kursleitung im Fachkurs Geschichte
                            </p>

                            <p>
                                09/2015 – 08/2016: <strong>Hessische Schülerakademie für die Oberstufe</strong><br />
                                Kursleitung „Gender und Gesellschaft“ und Assistenz der Akademieleitung
                            </p>

                            <p>
                                06/2011 – 09/2017: <strong>Goethe-Universität Frankfurt am Main</strong><br />
                                Studentische Hilfskraft und Tutorin am Historischen Seminar und Institut für England- und Amerikastudien
                            </p>

                            <p>
                                03/2010 – 06/2011: <strong>Albert-Schweitzer-Schule Offenbach am Main</strong><br />
                                Unterrichtsgarantie U-Plus
                            </p>
                        </li>

                        <li style={{ marginTop: "2rem" }}>
                            <h4>Studium</h4>

                            <p>
                                04/2009 - 12/2017:
                                <strong> Gymnasiallehramt Englisch und Geschichte, Abschluss: Erstes Staatsexamen</strong><br />
                                Geschichte, Anglistik und Amerikanistik, Abschluss: Magistra artium<br />
                                Praktika
                            </p>

                            <p>
                                09/2012 – 10/2012: <strong>Ziehenschule Frankfurt am Main</strong>
                            </p>

                            <p>
                                02/2010 – 03/3010: <strong>Schillerschule Offenbach am Main</strong>
                            </p>

                            <p>
                                03/2009 – 04/2009: <strong>Heinrich-Hoffmann-Schule für Kranke Frankfurt am Main</strong>
                            </p>
                        </li>

                        <li style={{ marginTop: "2rem" }}>
                            <h4>Ehrenamtliche Tätigkeiten</h4>

                            <p>
                                01/2013 – 08/2015: <strong>Hessische Schülerakademie für Oberstufe</strong><br />
                                Studentische Betreuerin im Fachkurs Geschichte
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <Footer />
    </div>
)
