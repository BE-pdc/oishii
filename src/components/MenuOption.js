import React from "react"
import MenuItem from "./MenuItem"

import styled from "styled-components"

const MenuOption = props => {
  return (
    <StyledMenuOption id={props.id}>
      <h2>{props.title.toUpperCase()}</h2>

      <MenuItems>
        {props.menuItems.map(item => (
          <MenuItem
            item={item.name}
            desc={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </MenuItems>
    </StyledMenuOption>
  )
}

const StyledMenuOption = styled.section`
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

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  width: 1500px;
  flex-wrap: wrap;
  padding: 20px 100px;
`

export default MenuOption
