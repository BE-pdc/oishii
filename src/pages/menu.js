import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import MenuOption from "../components/MenuOption"

import MenuOptionCard from "../components/MenuOptionCard"

import { images } from "./../constants"

const Menu = () => {
  const theMenu = [
    {
      id: "dranken",
      bgImg: images.BEVERAGES,
      items: [
        {
          name: "Matcha",
          description: "Groene thee gemaakt van poederthee",
          image: images.MATCHA,
          price: 2.9,
        },
        {
          name: "Genmaicha",
          description: "Groene theebladen met geroosterd bruine thee",
          image: images.GENMAICHA,
          price: 2.9,
        },
        {
          name: "Ryokucha",
          description: "Gestoomde groene thee",
          image: images.RYOKUCHA,
          price: 3.5,
        },
        {
          name: "Sakura Tea",
          description: "Gemaakt van eetbare kersenbloesems",
          image: images.SAKURA_TEA,
          price: 3.95,
        },
        {
          name: "Kombucha",
          description: "Zeewier kelp thee",
          image: images.KOMBUCHA,
          price: 3.95,
        },
        {
          name: "Sake",
          description: "Japanse rijstwijn",
          image: images.SAKE,
          price: 3.95,
        },
        {
          name: "Amazake",
          description:
            "Traditionele alcoholische drank gemaakt van gefermenteerde rijst",
          image: images.AMAZAKE,
          price: 4.3,
        },
      ],
    },
    {
      id: "voorgerechten",
      bgImg: images.APPETIZERS,
      items: [
        {
          name: "Harumaki",
          description: "Japanse loempia's",
          image: images.HARUMAKI,
          price: 5.0,
        },
        {
          name: "Gyoza",
          description: "Japanse knoedels",
          image: images.GYOZA,
          price: 5.1,
        },
        {
          name: "Spicy Edamame",
          description:
            "Vurige en pittige bonen, gebakken met chilipasta, knoflook en miso",
          image: images.SPICY_EDAMAME,
          price: 5.4,
        },
        {
          name: "Agedashi Tofu",
          description:
            "Knapperige gefrituurde tofu, gereserveerd in smaakvolle tsuyu-saus met geraspte radijs, groene ui en bonitovlokken als toppings",
          image: images.AGEDASHI_TOFU,
          price: 5.9,
        },
        {
          name: "Shumai",
          description:
            "Gemalen varkensvlees en gehakt, bruine ui met een groene erwt bovenop elk",
          image: images.SHUMAI,
          price: 6.3,
        },
        {
          name: "Teba Shio",
          description: "Gezouten kippenvleugeltjes",
          image: images.TEBA_SHIO,
          price: 6.5,
        },
        {
          name: "Karaage",
          description: "Japanse gebakken kip",
          image: images.KARAAGE,
          price: 6.5,
        },
      ],
    },
    {
      id: "sushi",
      bgImg: images.SUSHI,
      items: [
        {
          name: "Tonijn",
          image: images.SUSHI_TUNA,
          price: 8.5,
        },
        {
          name: "Zalm",
          image: images.SUSHI_SALMON,
          price: 8.5,
        },
        {
          name: "Inktvis",
          image: images.SUSHI_SQUID,
          price: 8.5,
        },
        {
          name: "Zoetwater Paling",
          image: images.SUSHI_FRESHWATER_EEL,
          price: 8.5,
        },
        {
          name: "Garnaal",
          image: images.SUSHI_SHRIMP,
          price: 8.7,
        },
        {
          name: "Ei",
          image: images.SUSHI_EGG,
          price: 8.7,
        },
        {
          name: "Zeepaling",
          image: images.SUSHI_SEA_EEL,
          price: 9.0,
        },
      ],
    },
    {
      id: "noedelsoeps",
      bgImg: images.NOODLESOUPS,
      items: [
        {
          name: "Champon",
          description:
            "Noedelsoepgerecht bestaande uit varkensvlees, zeevruchten en groenten geserveerd bovenop de noedels",
          image: images.CHAMPON,
          price: 10.9,
        },
        {
          name: "Hoto",
          description:
            "Gevuld met zetmeelrijke groenten, vlees en platte noedels in dashi bouillon op basis van miso",
          image: images.HOTO,
          price: 11.9,
        },
        {
          name: "Okinawa Soba",
          description:
            "Taaie noedels, gedrenkt in heerlijk varkensvlees en dashi bouillon",
          image: images.OKINAWA_SOBA,
          price: 12.9,
        },
        {
          name: "Udon Noedels",
          description: "Japanse tarwebloemnoedels",
          image: images.UDON_NOODLES,
          price: 12.9,
        },
        {
          name: "Butajiru",
          description: "Varkensvleessoep",
          image: images.BUTAJIRU,
          price: 13.5,
        },
      ],
    },
    {
      id: "desserts",
      bgImg: images.DESSERTS,
      items: [
        {
          name: "Daifuku",
          description: "Kleine ronde mochi gevuld met zoete rode bonenpasta",
          image: images.DAIFUKU,
          price: 6.1,
        },
        {
          name: "Dorayaki",
          description: "Mini pannenkoeken gevuld met bonenpasta",
          image: images.DORAYAKI,
          price: 6.1,
        },
        {
          name: "Dango",
          description: "Gekookte deegbal gemaakt van rijstbloem",
          image: images.DANGO,
          price: 6.3,
        },
        {
          name: "Anmitsu",
          description:
            "Gelei gegarneerd met fruit, dango, azuki bonenpasta, ijs en donkerbruin gekleurde siroop",
          image: images.ANMITSU,
          price: 7.0,
        },
        {
          name: "Anko",
          description: "Zoete bonenpasta",
          image: images.ANKO,
          price: 7.0,
        },
        {
          name: "Ohagi",
          description: "Kleefrijstpasta",
          image: images.OHAGI,
          price: 7.2,
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
                <MenuOptionCard
                  key={card.id}
                  name={card.id}
                  bgImg={card.bgImg}
                />
              ))}
            </div>
          </div>

          {theMenu.map(option => (
            <MenuOption
              key={option.id}
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
  background: url(${images.JAPANESE_RESTAURANT}), rgba(0, 0, 0, 0.55);
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

export default Menu
