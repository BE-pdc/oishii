import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Menu = () => {
  const MenuP = styled.p`
    font-size: 1.4em;
    font-family: "Lato";
    font-weight: bold;
  `

  return (
    <Layout>
      <MenuP>Menu Page</MenuP>
    </Layout>
  )
}

export default Menu
