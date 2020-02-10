import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.header.attrs({ className: "hero is-primary" })`
  position: relative;
  overflow: hidden;
  margin: 0 0 4rem 0;
  height: 30rem;
  width: 100vw;
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
  opacity: 0.5;
`

const Background = styled.img`
  position: absolute;
  z-index: 1;
  min-height: 100%;
  width: 100vw;
  object-fit: cover;

  ${props =>
    props.padded &&
    css`
      padding-top: 5rem;
    `}
`

export const Hero = props => (
  <Wrapper>
    <Background src={props.backgroundSrc} alt="header" padded={true} />
    <Body>
      <HeroTitleContainer>
        <h1 className="has-text-weight-semibold">{props.title}</h1>
      </HeroTitleContainer>
    </Body>
    <Overlay />
  </Wrapper>
)

const HeroTitleContainer = styled.div.attrs({ className: "has-text-centered is-size-2" })`
  padding-top: 4rem;
`

const FullsizeWrapper = styled.header.attrs({
  className: "hero is-primary",
})`
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
  width: 100vw;
  height: 80vh;
  min-height: 50rem;

  > div {
    height: 80vh;
    min-height: 50rem;
  }
`

export const FullsizeHero = props => (
  <FullsizeWrapper>
    <Background
      src={props.backgroundSrc}
      alt="header"
      padded={false}
    />
    <Body>
      <div className="has-text-centered">{props.children}</div>
    </Body>
    <Overlay />
  </FullsizeWrapper>
)
