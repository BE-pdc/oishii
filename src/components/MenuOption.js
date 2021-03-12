import React, { useState } from "react"
import styled from "styled-components"

const MenuOption = props => {
  const OishiiMenuOption = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
    width: 275px;
    background: url(${props.image}),
      linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
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
      cursor: pointer;
    }
  `
  return (
    <OishiiMenuOption>
      <p>{props.name}</p>
    </OishiiMenuOption>
  )
}

export default MenuOption
