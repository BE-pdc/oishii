import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import MenuItem from "../components/MenuItem"
import MenuOption from "../components/MenuOption"

import { images } from "./../constants"

const Menu = () => {
  return (
    <Layout>
      <BackgroundImage>
        <MenuContainer>
          <div className="oishii-menu-options-wrapper">
            <h1>menu</h1>
            <div className="oishii-menu-options">
              <MenuOption name="dranken" image={images.BEVERAGES.default} />
              <MenuOption
                name="voorgerechten"
                image={images.APPETIZERS.default}
              />
              <MenuOption name="sushi" image={images.SUSHI.default} />
              <MenuOption
                name="noedelsoeps"
                image={images.NOODLESOUPS.default}
              />
              <MenuOption name="desserts" image={images.DESSERTS.default} />
            </div>
          </div>
          <DrankenSection id="sect-dranken">
            <h2>DRANKEN</h2>
            <MenuItems>
              <MenuItem
                item="Matcha"
                desc="Groene thee gemaakt van poederthee"
                image={images.MATCHA.default}
                price="2.90"
              />
              <MenuItem
                item="Genmaicha"
                desc="Groene theebladen met geroosterd bruine thee"
                image={images.GENMAICHA.default}
                price="2.90"
              />
              <MenuItem
                item="Ryokucha"
                desc="Gestoomde groene thee"
                image={images.RYOKUCHA.default}
                price="3.50"
              />
              <MenuItem
                item="Sakura Tea"
                desc="Gemaakt van eetbare kersenbloesems"
                image={images.SAKURA_TEA.default}
                price="3.95"
              />
              <MenuItem
                item="Kombucha"
                desc="Zeewier kelp thee"
                image={images.KOMBUCHA.default}
                price="3.95"
              />
              <MenuItem
                item="Sake"
                desc="Japanse rijstwijn"
                image={images.SAKE.default}
                price="3.95"
              />
              <MenuItem
                item="Amazake"
                desc="Traditionele alcoholische drank gemaakt van gefermenteerde rijst"
                image={images.AMAZAKE.default}
                price="4.30"
              />
            </MenuItems>
          </DrankenSection>
          <VoorgerechtenSection></VoorgerechtenSection>
          <SushiSection></SushiSection>
          <NoedelsoepsSection></NoedelsoepsSection>
          <DessertsSection></DessertsSection>
        </MenuContainer>
      </BackgroundImage>
    </Layout>
  )
}

const BackgroundImage = styled.div`
  background: url(${images.JAPANESE_RESTAURANT.default}), rgba(0, 0, 0, 0.55);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
`

const MenuContainer = styled.div`
  padding-top: 80px;
  font-family: "Lato";
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 3em;
    text-transform: uppercase;
    color: #fff;
  }

  & .oishii-menu-options-wrapper {
    display: flex;
    height: calc(100vh - 80px);
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  & .oishii-menu-options {
    width: 1500px;
    display: flex;
    justify-content: space-around;
  }
`

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  width: 1500px;
  flex-wrap: wrap;
  padding: 20px 100px;
`

const DrankenSection = styled.section`
  width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-size: 4em;
    margin: 50px 0 0 0;
  }
`
const VoorgerechtenSection = styled.section``
const SushiSection = styled.section``
const NoedelsoepsSection = styled.section``
const DessertsSection = styled.section``

export default Menu
