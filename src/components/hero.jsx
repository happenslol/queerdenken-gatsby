import React from "react"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

const Wrapper = styled.header.attrs({ className: "hero is-primary" })`
    position: relative;
    overflow: hidden;
    margin: 5rem 0 4rem 0;
`

const Body = styled.div`
    position: absolute;
    z-index: 3;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Overlay = styled.div`
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100%;

    background-color: #000;
    opacity: .5;
`

const Background = styled(Img)`
    position: absolute;
    z-index: 1;
    min-height: 100%;
    width: 100vw;

    ${props => props.padded && css`
        padding-top: 5rem;
    `}
`

export const Hero = props => (
    <Wrapper>
        <Background fluid={props.imageData} alt="header" padded={true}/>
        <Body>
            <div className="has-text-centered is-size-2">
                <h1 className="has-text-weight-semibold">{props.title}</h1>
            </div>
        </Body>
        <Overlay />
    </Wrapper>
)

const FullsizeWrapper = styled.header.attrs({ className: "hero is-fullheight is-primary" })`
    position: relative;
    overflow: hidden;
    margin-bottom: 4rem;
`

export const FullsizeHero = props => (
    <FullsizeWrapper>
        <Background fluid={props.imageData} alt="header" padded={false} />
        <Body>
            <div className="has-text-centered">
                {props.children}
            </div>
        </Body>
        <Overlay />
    </FullsizeWrapper>
)
