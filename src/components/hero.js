import React from "react"
import Img from "gatsby-image"

export default props => (
    <header className="hero is-primary" style={{
        marginTop: "5rem",
        position: "relative",
        overflow: "hidden",
    }}>
        <Img
            fluid={props.imageData}
            style={{
                paddingTop: "5rem",
                position: "absolute",
                zIndex: 1,
                minHeight: "100%",
                width: "100vw",
            }}
            alt="header"
        />
        <div className="hero-body" style={{ zIndex: 2 }}>
            <div className="container has-text-centered is-size-2">
                <h1 className="has-text-weight-semibold">{props.title}</h1>
            </div>
        </div>
    </header>
)
