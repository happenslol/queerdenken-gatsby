import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "../styles/navbar.scss"

const pages = [
    {
        url: "/",
        key: "Home",
    },
    {
        url: "/workshops",
        key: "Workshops",
    },
    {
        url: "/about",
        key: "Über Mich",
    },
    {
        url: "/contact",
        key: "Kontakt",
    },
]

export default class Header extends Component {
    render() {
        return (
            <nav className={this.props.active ? "active" : ""}>
                <Link className="logo" to="/">
                    <StaticQuery
                        query={graphql`
                        query {
                            logo: file(relativePath: {eq: "logo-color-small.png"}) {
                                childImageSharp {
                                    fixed(height: 48, width: 41) { ...GatsbyImageSharpFixed }
                                }
                            }
                        }
                        `}
                        render={data => {
                            const imageData = data.logo.childImageSharp.fixed
                            return (
                                <Img fixed={imageData} alt="queerdenken logo" />
                            )
                        }}
                    />
                    <h1>qu<span>e</span>erdenken</h1>
                </Link>

                <div className="links">
                    {pages.map((it, index) => (
                        <Link
                            className={`
                                link fancy-link
                                ${it.key === this.props.activeKey ? "active" : ""}
                            `}
                            key={index}
                            to={it.url}
                        >{it.key}</Link>
                    ))}
                </div>
            </nav>
        )
    }
}
