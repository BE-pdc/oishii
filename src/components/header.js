import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { images } from "../constants"

const Header = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    background-color: rgba(0, 0, 0, 0.9);
  `

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1500px;
    margin: 0 auto;
  `

  const Nav = styled.nav`
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

  const Logo = styled.img`
    margin-left: 20px;
  `

  return (
    <HeaderWrapper>
      <Header>
        <Logo
          src={images.oishii_logo.default}
          alt="Oishii Logo"
          srcset=""
          height="60"
        />
        <Nav>
          <NavLink id="link-home" to="/">
            home
          </NavLink>
          <NavLink id="link-menu" to="/menu">
            menu
          </NavLink>
          <NavLink id="link-recensies" to="/recensies">
            recensies
          </NavLink>
          <NavLink id="link-contact" to="/contact">
            contact
          </NavLink>
          <NavLink id="link-download" to="/downloadapp">
            download onze app
          </NavLink>
        </Nav>
      </Header>
    </HeaderWrapper>
  )
}

export default Header
