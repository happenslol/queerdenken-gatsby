import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import { FaBars } from "react-icons/fa"
import { mobile, colors } from "./common"
import { RichText } from "prismic-reactjs"

export default function Navbar(props) {
  const [opened, setOpened] = useState(false)

  return (
    <NavData
      render={({ logoData, pages }) => (
        <Nav isActive={props.active || opened}>
          <LogoWrapper to="/" isActive={props.active || opened}>
            <Img fixed={logoData} alt="queerdenken logo" />
            <h1>
              qu<span>e</span>erdenken
            </h1>
          </LogoWrapper>

          <Toggle
            onClick={() => setOpened(!opened)}
            isActive={props.active || opened}
          >
            <FaBars size="2.5em" />
          </Toggle>

          <LinksWrapper isToggled={opened}>
            {pages.map(([url, link]) => (
              <NavLink
                to={`/${url}`}
                key={url}
                isActive={props.url === url}
                isDark={props.active}
              >
                {link}
              </NavLink>
            ))}
          </LinksWrapper>
        </Nav>
      )}
    />
  )
}

const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo-color-small.png" }) {
      childImageSharp {
        fixed(height: 48, width: 41) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prismic {
      allHomes {
        edges {
          node {
            link_title
          }
        }
      }
      allPages {
        edges {
          node {
            link_title
            _meta {
              uid
            }
          }
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
        data.prismic.allHomes.edges[0].node,
        ...data.prismic.allPages.edges.map(it => it.node),
      ].map(it => {
        return [(it._meta || {}).uid || ``, RichText.asText(it.link_title)]
      })

      return render({ logoData, pages })
    }}
  />
)

const navbarHeight = "5rem"
const Nav = styled(({ isActive, ...props }) => <nav {...props} />)`
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

  transition: all 0.25s ease-in-out;
  transition-property: background-color, color, box-shadow;

  ${props =>
    props.isActive &&
    css`
      background-color: #fff;
      box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.18);
    `}
`

const LogoWrapper = styled(({ isActive, ...props }) => <Link {...props} />)`
  display: flex;
  align-items: center;
  opacity: 0;
  color: #111;
  cursor: default;

  transition: all 0.25s ease-in-out;
  transition-property: opacity margin;

  h1 {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Amatic SC", cursive;
    margin-left: 0.8rem;

    span {
      color: ${colors.accent};
    }
  }

  ${props =>
    props.isActive &&
    css`
      cursor: pointer;
      opacity: 1;
      margin-top: -0.4rem;
    `}
`

const Toggle = styled(({ isActive, ...props }) => <div {...props} />)`
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

  ${props =>
    props.isActive &&
    css`
      color: #111;
    `}
`

const LinksWrapper = styled(({ isToggled, ...props }) => <div {...props} />)`
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
        height: calc(100vh - 5rem);
        width: 100vw;
        border-radius: 6px;
        border-top-right-radius: 0;
        font-size: 1.7rem;
        border: 1px solid #CCC;

        flex-direction: column;
        justify-content: space-around;

        ${props =>
          props.isToggled &&
          css`
            display: flex;
          `}
    `}
`

const NavLink = styled(({ isDark, isActive, ...props }) => <Link {...props} />)`
  position: relative;
  display: flex;
  justify-content: center;

  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 1.5rem;
  height: ${navbarHeight};
  line-height: ${navbarHeight};

  &:hover {
    color: #fff;
  }
  &:hover::after {
    width: 60%;
  }

  ${props =>
    props.isDark &&
    css`
      color: #111;
      &:hover {
        color: #111;
      }
    `}

  ${mobile`
        margin: 0;
        color: #111;
        &:hover { color: #111; }
    `}

    &::after {
    display: block;
    content: " ";
    position: absolute;
    height: 0.3em;
    width: 0;
    background-color: ${colors.primary};
    border-radius: 4px;
    bottom: 1em;
    transition: width 0.2s ease-in-out;

    ${mobile`
            bottom: 0;
        `}
  }

  ${props =>
    props.isActive &&
    css`
      &::after {
        width: 60%;
      }
    `}
`
