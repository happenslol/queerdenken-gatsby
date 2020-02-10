import React from "react"
import styled, { css } from "styled-components"
import { RichText } from "prismic-reactjs"

export const mobile = (...args) => css`
    @media (max-width: 1000px) { ${css(...args)} }
`

export const Separator = styled.hr`
    margin: 3rem auto;
    width: 50%;
    border-radius: 4px;
    height: 2px;
    background-color: #ccc;

    ${mobile`
        width: 80%;
    `}
`

export const colors = {
    primary: "#9282FD",
    accent: "#CA2131",
    link: "#D4CEFD",
}

const ContentBase = ({ data, className }) => (
    <div className={`content ${className}`}>
      {RichText.render(data)}
    </div>
)

export const Content = styled(ContentBase)`
    a {
        color: #313131;

        background-image: linear-gradient(to right, #D4CEFD 0%, #D4CEFD 100%);
        background-repeat: repeat-x;
        background-position: 0 100%;
        background-size: 100% 4px;

        &:hover {
            background-image: linear-gradient(to right, #c5bcff 0%, #c5bcff 100%);
        }
    }
`

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
`

export const ContentTube = styled.main`
    width: 60rem;

    ${mobile`
        width: 100%;
    `}
`
