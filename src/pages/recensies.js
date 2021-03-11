import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Recensies = () => {
  const RecensiesP = styled.p`
    font-size: 1.4em;
    font-family: "Lato";
    font-weight: bold;
  `

  return (
    <Layout>
      <RecensiesP>Recensies Page</RecensiesP>
    </Layout>
  )
}

export default Recensies
