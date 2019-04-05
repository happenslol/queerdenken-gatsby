import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                background: file(relativePath: {eq: "main.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080) { ...GatsbyImageSharpFluid_withWebp }
                    }
                }
                logo: file(relativePath: {eq: "logo-white.png"}) {
                    childImageSharp { fixed(width: 150) { ...GatsbyImageSharpFixed }}
                }
            }
        `}
        render={data => {
            const background = data.background.childImageSharp.fluid
            const logo = data.logo.childImageSharp.fixed

            return (
                <header
                    className="hero is-fullheight is-primary"
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
                                fontSize: "8rem",
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
            )
        }}
    />
)
