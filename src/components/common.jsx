import React from "react"
import styled, { css } from "styled-components"

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

export const Content = ({ html }) => (
    <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
)

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
