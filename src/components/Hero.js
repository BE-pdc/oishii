import React from "react"
import styled from "styled-components"
import { images } from "./../constants"
const Hero = () => {
  return (
    <SectionHero>
      <span className="oishii-welcome">Welcome bij Oishii</span>
      <br />
      <span className="oishii-desc">Authentiek japans eten</span>
      <br />
      <span className="oishii-desc-2">
        Het populairste Japanese eetcafé in New York
      </span>
      <br />
      <DownloadButton>download onze app hier!</DownloadButton>
      <OpeningHours>
        <span>Alle dagen open</span>
        <span className="oishii-hours">12.00u tot 19.00u</span>
      </OpeningHours>
    </SectionHero>
  )
}

const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${images.HERO_OISHII}), rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding-top: 80px;
  color: #fff;
  font-family: "Lato";
  font-weight: bold;

  & .oishii-welcome {
    font-size: 3em;
    word-spacing: 0.1em;
    text-transform: uppercase;
  }

  & .oishii-desc {
    font-size: 5em;
    margin-top: 30px;
    word-spacing: 0.2em;
    text-transform: uppercase;
  }

  & .oishii-desc-2 {
    font-size: 2em;
    margin-top: 20px;
  }
`

const DownloadButton = styled.button`
  margin-top: 100px;
  font-size: 2em;
  font-weight: bold;
  padding: 25px 50px;
  border-radius: 9px;
  border: none;
`
const OpeningHours = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 50px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;
  & > span {
    font-size: 2em;
  }

  & .oishii-hours {
    margin-top: 10px;
  }
`

export default Hero
