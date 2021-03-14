import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import MenuOption from "../components/MenuOption"

import MenuOptionCard from "../components/MenuOptionCard"

import { images } from "./../constants"

const Menu = () => {
  const theMenu = [
    {
      id: "dranken",
      image: images.BEVERAGES.default,
      items: [
        {
          name: "Matcha",
          description: "Groene thee gemaakt van poederthee",
          image: images.MATCHA.default,
          price: 2.9,
        },
        {
          name: "Genmaicha",
          description: "Groene theebladen met geroosterd bruine thee",
          image: images.GENMAICHA.default,
          price: 2.9,
        },
        {
          name: "Ryokucha",
          description: "Gestoomde groene thee",
          image: images.RYOKUCHA.default,
          price: 3.5,
        },
        {
          name: "Sakura Tea",
          description: "Gemaakt van eetbare kersenbloesems",
          image: images.SAKURA_TEA.default,
          price: 3.95,
        },
        {
          name: "Kombucha",
          description: "Zeewier kelp thee",
          image: images.KOMBUCHA.default,
          price: 3.95,
        },
        {
          name: "Sake",
          description: "Japanse rijstwijn",
          image: images.SAKE.default,
          price: 3.95,
        },
        {
          name: "Amazake",
          description:
            "Traditionele alcoholische drank gemaakt van gefermenteerde rijst",
          image: images.AMAZAKE.default,
          price: 4.3,
        },
      ],
    },
    {
      id: "voorgerechten",
      image: images.APPETIZERS.default,
      items: [
        {
          name: "Harumaki",
          description: "Japanse loempia's",
          image: images.HARUMAKI.default,
          price: 5.0,
        },
        {
          name: "Gyoza",
          description: "Japanse knoedels",
          image: images.GYOZA.default,
          price: 5.1,
        },
        {
          name: "Spicy Edamame",
          description:
            "Vurige en pittige bonen, gebakken met chilipasta, knoflook en miso",
          image: images.SPICY_EDAMAME.default,
          price: 5.4,
        },
        {
          name: "Agedashi Tofu",
          description:
            "Knapperige gefrituurde tofu, gereserveerd in smaakvolle tsuyu-saus met geraspte radijs, groene ui en bonitovlokken als toppings",
          image: images.AGEDASHI_TOFU.default,
          price: 5.9,
        },
        {
          name: "Shumai",
          description:
            "Gemalen varkensvlees en gehakt, bruine ui met een groene erwt bovenop elk",
          image: images.SHUMAI.default,
          price: 6.3,
        },
        {
          name: "Teba Shio",
          description: "Gezouten kippenvleugeltjes",
          image: images.TEBA_SHIO.default,
          price: 6.5,
        },
        {
          name: "Karaage",
          description: "Japanse gebakken kip",
          image: images.KARAAGE.default,
          price: 6.5,
        },
      ],
    },
    {
      id: "sushi",
      image: images.SUSHI.default,
      items: [
        {
          name: "Tonijn",
          image: images.SUSHI_TUNA.default,
          price: 8.5,
        },
        {
          name: "Zalm",
          image: images.SUSHI_SALMON.default,
          price: 8.5,
        },
        {
          name: "Inktvis",
          image: images.SUSHI_SQUID.default,
          price: 8.5,
        },
        {
          name: "Zoetwater Paling",
          image: images.SUSHI_FRESHWATER_EEL.default,
          price: 8.5,
        },
        {
          name: "Garnaal",
          image: images.SUSHI_SHRIMP.default,
          price: 8.7,
        },
        {
          name: "Ei",
          image: images.SUSHI_EGG.default,
          price: 8.7,
        },
        {
          name: "Zeepaling",
          image: images.SUSHI_SEA_EEL.default,
          price: 9.0,
        },
      ],
    },
    {
      id: "noedelsoeps",
      image: images.NOODLESOUPS.default,
      items: [
        {
          name: "Harumaki",
          description: "Japanse loempia's",
          image: images.MATCHA.default,
          price: 5.0,
        },
      ],
    },
    {
      id: "desserts",
      image: images.DESSERTS.default,
      items: [
        {
          name: "Harumaki",
          description: "Japanse loempia's",
          image: images.MATCHA.default,
          price: 5.0,
        },
      ],
    },
  ]
  return (
    <Layout>
      <BackgroundImage>
        <MenuContainer>
          <div className="oishii-menu-options-wrapper">
            <h1>menu</h1>
            <div className="oishii-menu-options">
              {theMenu.map(card => (
                <MenuOptionCard name={card.id} image={card.image} />
              ))}
            </div>
          </div>

          {theMenu.map(option => (
            <MenuOption
              id={option.id}
              title={option.id}
              menuItems={option.items}
            />
          ))}
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
    font-size: 5em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1.2em;
  }

  & .oishii-menu-options-wrapper {
    display: flex;
    height: calc(100vh - 80px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .oishii-menu-options {
    width: 1500px;
    display: flex;
    justify-content: space-around;
  }
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

export default Menu
