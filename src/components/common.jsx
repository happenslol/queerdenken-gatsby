import React from "react"
import styled, { css } from "styled-components"

export const Hr = styled.hr`
    height: 3px;
    background-color: #CCC;
    border-radius: 2px;
    ${props => props.margin && css`
        margin: ${props => props.margin};
    `};
`

export const Section = ({ children }) => (
    <section className="section container">
        <div className="columns is-centered">
            <div className="column is-10 content is-size-5">
                {children}
            </div>
        </div>
    </section>
)

export const mobile = (...args) => css`
    @media (max-width: 1000px) { ${css(...args)} }
`

export const colors = {
    primary: "#9282FD",
    accent: "#CA2131",
    link: "#D4CEFD",
}

export const Content = ({ html }) => (
    <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
)
