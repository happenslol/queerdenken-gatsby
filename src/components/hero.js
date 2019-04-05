import React from "react"
import Img from "gatsby-image"

export default props => (
    <section className="hero is-primary" style={{
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
                height: "144px",
                width: "1920px",
            }}
            alt="header"
        />
        <div className="hero-body" style={{ zIndex: 2 }}>
            <div className="container has-text-centered is-size-3">
                <h1 className="has-text-weight-semibold">{props.title}</h1>
            </div>
        </div>
    </section>
)
