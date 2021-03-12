import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import MenuOption from "../components/MenuOption"

import { images } from "./../constants"

const Menu = () => {
  return (
    <Layout>
      <MenuContainer>
        <h1>menu</h1>
        <div className="oishii-menu-options">
          {/* <p>{images.BEVERAGES.default}</p> */}
          <MenuOption name="dranken" image={images.BEVERAGES.default} />
          <MenuOption name="voorgerechten" image={images.APPETIZERS.default} />
          <MenuOption name="sushi" image={images.SUSHI.default} />
          <MenuOption name="noedelsoeps" image={images.NOODLESOUPS.default} />
          <MenuOption name="desserts" image={images.DESSERTS.default} />
        </div>
      </MenuContainer>
    </Layout>
  )
}

const MenuContainer = styled.div`
  padding-top: 80px;
  height: 100vh;
  font-family: "Lato";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & h1 {
    font-size: 3em;
    text-transform: uppercase;
  }

  & .oishii-menu-options {
    width: 1500px;
    display: flex;
    justify-content: space-around;
  }
`

export default Menu
