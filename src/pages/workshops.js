import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Sep from "../components/separator"
import Sec from "../components/section"

export const key = "Workshops"
export const query = graphql`
query {
    background: file(relativePath: {eq: "workshops-bg.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 144) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
    students: file(relativePath: {eq: "students-thumb.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
    teachersT: file(relativePath: {eq: "teachers-thumb.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
    teachers: file(relativePath: {eq: "teachers.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid_withWebp }
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
            <div className="columns is-centered">
                <div className="column is-10 content is-size-5">
                    <p>
                        <strong>Genderkompetenzen und gendersensibles Lernen und Lehren</strong> – das sind Stichworte, die immer häufiger in Lehrplänen, Stellenbeschreibungen und Leistungsprofilen, aber immer noch sehr selten in Lehramtsseminaren, Fortbildungen oder anderen Bildungsangeboten zu finden sind.<br />Gerade in <strong>Schule</strong> und <strong>Kita</strong>, <strong>Ausbildungsstätte</strong> und <strong>Universität</strong>, <strong>Sportverein</strong> und <strong>Jugendclub</strong> lernen Kinder und Jugendliche jedoch jeden Tag auf's Neue, was es heißt ein <i>"richtiger Junge"</i> oder ein <i>"richtiges Mädchen"</i> zu sein und erfahren Ausgrenzungen, wenn sie diesem Bild nicht entsprechen.
                    </p>

                    <p>
                        <strong><i>Queerdenken</i></strong> setzt an diesem Punkt an, um <strong>individuelle Entfaltungsmöglichkeiten und Vielfalt</strong> unabhängig von gesellschaftlich anerkannten Ideen von Weiblichkeit und Männlichkeit in den Mittelpunkt zu stellen.<br /><br />In Workshops und Fortbildungen sowohl für Lernende als auch Lehrende wird geschlechtliche <i>"Normalität"</i> reflektiert und als Konstruktion sowie sozialer Platzanweiser sichtbar gemacht, um daraus Schlussfolgerungen für einen respektvollen und reflektierten Umgang mit der Vielfalt von Identitäten und Lebensweisen zu ziehen, die uns im Alltag begegnen. 
                    </p>

                    <Sep margin="4rem 0 0 0" />
                </div>
            </div>
        </section>

        <Sec>
            <h3>Schwerpunkte für Schulklassen und Jugendgruppen</h3>

            <Img
                fluid={data.students.childImageSharp.fluid} alt="students"
                style={{ borderRadius: "6px", margin: "2rem 0" }}
            />

            <ul>
                <li>
                    <h4>Gender Awareness</h4>

                    <p style={{ marginBottom: "2rem" }}>
                    In diesem Angebot wird die Wahrnehmung für Geschlecht als soziale Konstruktion und als gesellschaftlicher Platzanweiser geschult. Scheinbar natürliche Vorstellungen von Gender werden als historisch und kulturell variabel aufgedeckt und damit Normalität hinterfragt, ein kritisches Bewusstsein für gesellschaftliche Prozesse gefördert und Ungleichheiten sichtbar gemacht.
                    </p>
                </li>

                <li>
                    <h4>
                        Geschlechtliche und sexuelle Vielfalt
                    </h4>

                    <p style={{ marginBottom: "2rem" }}>
                    Die Einheit macht das Leben von Personen mit nicht-normativen L(i)ebensentwürfen und Identitäten sichtbar und stellt in der Auseinandersetzung mit deren Vielfalt heteronormative Vorstellung einer scheinbaren Normalität von Heterosexualität und Weiblichkeit bzw. Männlichkeit infrage.
                    </p>
                </li>
            </ul>

            <p>
            <strong>Folgende Formate eignen sich für die Behandlung dieser Themen:</strong>
            </p>

            <ul>
                <li>Workshops (ab 3 Zeitstunden)</li>
                <li>Projekttage</li>
                <li>Projektwochen</li>
                <li>Infoveranstaltungen für Eltern</li>
            </ul>

            <p>
            Die Einheiten richten sich explizit an alle Altersgruppen und Schulformen und sind individuell auf altersgerechte Bedürfnisse abgestimmt. Sie sind geeignet für den schulischen Kontext, aber auch für die offene Jugendarbeit, (Sport-) Vereine oder die außerschulische Bildungsarbeit. Elternbriefe und weitere Informationen stelle ich Ihnen gerne zur Verfügung.
            </p>

            <p>
            Alle Angebote sind <strong>zeitlich flexibel</strong> und finden bei Ihnen <strong>vor Ort</strong> statt.
            </p>
        </Sec>


        <Sec>
            <h3>Schwerpunkte für Lehrende und Betreuungspersonen</h3>

            <Img
                fluid={data.teachers.childImageSharp.fluid} alt="teachers"
                style={{ borderRadius: "6px", margin: "2rem 0" }}
            />

            <ul>
                <li>Gendersensibles Lernen und Lehren</li>
                <li>Umgang mit sexueller und geschlechtlicher Vielfalt</li>
                <li>Gender und Medienkompetenzen</li>
            </ul>

            <p>
            Zur Auseinandersetzung mit diesen Themen biete ich folgende Formate an:
            </p>

            <ul>
                <li>Fortbildungen in Workshopform (ab 3 Zeitstunden)</li>
                <li>Pädagogische Tage</li>
                <li>Mehrtägige Seminare</li>
                <li>Informationsvorträge</li>
                <li>Supervision und Fallberatung</li>
            </ul>

            <p>
            Die Einheiten richten sich vorwiegend, aber nicht ausschließlich, an Lehrende (egal ob bereits im Berufsleben oder in der Ausbildung) sowie an Personen oder Gruppen, die mit der Betreuung und Ausbildung von Kindern und Jugendlichen betreut sind.
            </p>

            <p>
            Alle Angebote sind <strong>zeitlich flexibel</strong> und finden bei Ihnen <strong>vor Ort</strong> statt. Bei Bedarf kann ein geeigneter Raum angemietet werden.
            </p>
                    </Sec>

                    <section className="section container">
                        <div className="columns is-centered">
                            <div className="column is-10 content is-size-5">
                                <Sep margin="0 0 4rem 0" />

                                <h3>Methodischer Zugang</h3>

            <p>
            Egal, ob für Lehrende oder Lernende – meine Workshops, Fortbildungen und Seminare sollen zur selbständigen Auseinandersetzung mit dem Thema Gender und seinen Auswirkungen auf unseren Alltag, unseren Beruf und unsere Gesellschaft anregen.
            </p>

            <p>
            Problem- und Handlungsorientierung, Alltagsnähe, kreative Methoden, entdeckendes Lernen sowie ein offense Ohr für Fragen und Hinterfragen stellen dabei den Kern meiner Methodik dar. Auf diese Weise sollen Erfahrungen und Mechanismen nachvollziehbar gemacht und reflektiert und ein kritisches Bewusstsein für strukturelle Diskriminierungsprozesse sowie Handlungsoptionen für einen respektvollen Umgang mit Differenz geschaffen werden.
            </p>

            <p>
            Ich verstehe meine Angebote insbesondere als Sensibilisierungsmaßnahmen und damit als Teil politischer und demokratischer Bildung. Sie verbinden Ansätze gendersensibler Pädagogik und der Pädagogik vielfältiger Lebensweisen mit Antidiskriminerungsarbeit. Sie sind damit keine expliziten Aufklärungs- oder Gewaltpräventionskurse, auch wenn Aspekte beider Bereiche thematisiert werden können und sich meist aus dem Themengebiet ergeben. 
            </p>

            <Img
                fluid={data.teachersT.childImageSharp.fluid} alt="teachersT"
                style={{ borderRadius: "6px", margin: "2rem 0 0 0" }}
            />
                </div>
            </div>
        </section>

        <Sec>
            <Sep margin="0 0 4rem 0" />
            <h3>Buchung</h3>

<p className="is-size-4">
Sie wollen einen Workshop oder eine Fortbildung buchen oder sich unverbindlich über meine Angebote informieren?
</p>

<p className="is-size-4">
Dann <Link to="/contact">kontaktieren Sie mich wahlweise über das Kontaktformular, per Mail oder per Telefon</Link> und teilen Sie mir Ihre Wünsche und Ideen mit.<br /><br /><strong>Ich passe mein Angebot gern individuell an Ihre Bedürfnisse an!</strong>
</p>
        </Sec>


        <Footer />
    </div>
)
