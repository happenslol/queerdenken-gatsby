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
    state = { opened: false }

    toggle(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState({ opened: !this.state.opened })
    }

    render() {
        return (
            <nav className={this.props.active || this.state.opened ? "active" : ""}>
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

                <div onClick={e => this.toggle(e)} className="toggle">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=" alt="menu" />
                </div>

                <div className={`links ${this.state.opened ? "toggled" : ""}`}>
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
