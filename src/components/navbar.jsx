import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import { FaBars } from "react-icons/fa"
import { mobile, colors } from "./common"

export default function Navbar(props) {
    const [opened, setOpened] = useState(false)

    return (
        <NavData render={({ logoData, pages }) => (
            <Nav active={props.active || opened}>
                <LogoWrapper to="/" active={props.active}>
                    <Img fixed={logoData} alt="queerdenken logo" />
                    <h1>qu<span>e</span>erdenken</h1>
                </LogoWrapper>

                <Toggle
                    onClick={() => setOpened(!opened)}
                    active={props.active || opened}
                >
                    <FaBars size="2.5em" />
                </Toggle>

                <LinksWrapper toggled={opened}>
                    {pages.map(([url, link]) => (
                        <NavLink
                            to={`/${url}`}
                            key={url}
                            active={props.url === url}
                            dark={props.active}
                        >
                            {link}
                        </NavLink>
                    ))}
                </LinksWrapper>
            </Nav>
        )} />
    )
}

const query = graphql`
    query {
        logo: file(relativePath: {eq: "logo-color-small.png"}) {
            childImageSharp {
                fixed(height: 48, width: 41) { ...GatsbyImageSharpFixed }
            }
        }
        prismicHome {
            data {
                link_title {
                    text
                }
            }
        }
        prismicWorkshops {
            uid
            data {
                link_title {
                    text
                }
            }
        }
        prismicAbout {
            uid
            data {
                link_title {
                    text
                }
            }
        }
        prismicContact {
            uid
            data {
                link_title {
                    text
                }
            }
        }
    }
`

const NavData = ({ render }) => (
    <StaticQuery
        query={query}
        render={data => {
            const logoData = data.logo.childImageSharp.fixed
            const pages = [
                data.prismicHome,
                data.prismicWorkshops,
                data.prismicAbout,
                data.prismicContact,
            ].map(it => [it.uid || ``, it.data.link_title.text])

            return render({ logoData, pages })
        }}
    />
)

const navbarHeight = "5rem"
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    display: flex;

    height: ${navbarHeight};
    background-color: rgba(0, 0, 0, 0);

    justify-content: space-between;
    padding: 0 1.5rem;

    transition: all .25s ease-in-out;
    transition-property: background-color, color, box-shadow;

    ${props => props.active && css`
        background-color: #FFF;
        box-shadow: 0 2px 2px 1px rgba(0, 0, 0, .18);
    `}
`

const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    opacity: 0;
    color: #111;
    cursor: default;

    transition: all .25s ease-in-out;
    transition-property: opacity margin;

    h1 {
        display: block;
        font-size: 3rem;
        font-weight: bold;
        font-family: 'Amatic SC', cursive;
        margin-left: .8rem;

        span {
            color: ${colors.accent};
        }
    }

    ${props => props.active && css`
        cursor: pointer;
        opacity: 1;
        margin-top: -.4rem;
    `}
`

const Toggle = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    color: #fff;
    justify-content: center;
    align-content: center;
    padding: 1.5rem 1.5rem 0 0;

    ${mobile`
        display: flex;
    `}

    ${props => props.active && css`
        color: #111;
    `}
`

const LinksWrapper = styled.div`
    height: 100%;
    display: none;
    font-size: 1.1rem;

    align-items: center;
    display: flex;
    white-space: nowrap;

    ${mobile`
        display: none;
        position: fixed;
        top: 5rem;
        right: 0;
        padding: 0 4rem;
        background-color: #FFF;
        height: auto;
        border-radius: 6px;
        border-top-right-radius: 0;
        font-size: 1.7rem;
        border: 1px solid #CCC;

        ${props => props.toggled && css`
            display: block;
        `}
    `}
`

const NavLink = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;

    color: #FFF;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1.5rem;
    height: ${navbarHeight};
    line-height: ${navbarHeight};

    &:hover { color: #FFF; }
    &:hover::after { width: 60%; }

    ${props => props.dark && css`
        color: #111;
        &:hover { color: #111; }
    `}

    ${mobile`
        margin: 2rem 0;
        color: #111;
        &:hover { color: #111; }
    `}

    &::after {
        display: block;
        content: ' ';
        position: absolute;
        height: .3em;
        width: 0;
        background-color: ${colors.primary};
        border-radius: 4px;
        bottom: 1em;
        transition: width .2s ease-in-out;

        ${mobile`
            bottom: 0;
        `}
    }

    ${props => props.active && css`
        &::after { width: 60%; }
    `}
`

