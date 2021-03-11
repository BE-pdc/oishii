import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.6em;
    font-family: "Lato";
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 0;
    margin: 0 50px;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
  `

  return (
    <Nav>
      <NavLink id="link-home" to="/">
        home
      </NavLink>
      <NavLink id="link-menu" to="/">
        menu
      </NavLink>
      <NavLink id="link-recensies" to="/">
        recensies
      </NavLink>
      <NavLink id="link-contact" to="/">
        contact
      </NavLink>
      <NavLink id="link-download" to="/">
        download onze app
      </NavLink>
    </Nav>
  )
}

export default Header
