import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.header.attrs({ className: "hero is-primary" })`
    margin-top: 5rem;
    position: relative;
    overflow: hidden;
`

const Title = styled.div.attrs({ className: "hero-body" })`z-index: 2;`
const Logo = styled(Img)`
    padding-top: 5rem;
    position: absolute;
    z-index: 1;
    min-height: 100%;
    width: 100vw;
`

export default props => (
    <Wrapper>
        <Logo fluid={props.imageData} alt="header" />
        <Title>
            <div className="container has-text-centered is-size-2">
                <h1 className="has-text-weight-semibold">{props.title}</h1>
            </div>
        </Title>
    </Wrapper>
)
