import { css } from "styled-components"

export const mobile = (...args) => css`
    @media (max-width: 1000px) { ${css(...args)} }
`

export const colors = {
    primary: "#9282FD",
    accent: "#CA2131",
    link: "#D4CEFD",
}
