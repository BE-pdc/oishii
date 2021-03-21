import React from "react"
import styled from "styled-components"

const MenuItem = props => {
  return (
    <StyledMenuItem bgImg={props.image}>
      <div>
        <span>{props.item}</span>
        <p>{props.desc}</p>
      </div>
      <span className="price">${props.price.toFixed(2)}</span>
    </StyledMenuItem>
  )
}

const StyledMenuItem = styled.div`
  background: url(${props => props.bgImg}), rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 310px;
  width: 500px;
  margin: 35px;
  padding: 40px;
  border-radius: 10px;
  & div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & span,
  p {
    color: #fff;
    font-family: "Lato";
  }

  & span {
    font-size: 3em;
  }

  & p {
    padding-top: 15px;
    font-size: 1.5em;
  }
  & .price {
  }
`

export default MenuItem
