import React from "react"
import styled from "styled-components"
import { images } from "./../constants"
const Hero = () => {
  return (
    <SectionHero>
      <p>hero text</p>
    </SectionHero>
  )
}

const SectionHero = styled.section`
  display: block;
  background: url(${images.HERO_SUSHI.default}), rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`

export default Hero
