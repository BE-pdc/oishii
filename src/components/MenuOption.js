import React from "react"
import styled from "styled-components"

import { AnchorLink } from "gatsby-plugin-anchor-links"

const MenuOption = props => {
  const OishiiMenuOption = styled(AnchorLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    height: 600px;
    width: 275px;
    background: url(${props.image}),
      linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
    color: #fff;
    border-radius: 2px;
    transition: transform ease-in-out 0.5s;

    & > p {
      margin-top: 60px;
      font-size: 2.5em;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:hover {
      transform: scale(1.1);
    }
  `
  return (
    <OishiiMenuOption to="/menu#sect-dranken" title="Section Dranken">
      <p>{props.name}</p>
    </OishiiMenuOption>
  )
}

export default MenuOption
