import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./../components/styles/GlobalStyles.css"

const IndexPage = () => {
  const IndexP = styled.p`
    font-size: 1.4em;
    font-family: "Lato";
    font-weight: bold;
  `
  return (
    <Layout>
      <SEO title="Home" />
      <IndexP>Index Page</IndexP>
    </Layout>
  )
}

export default IndexPage
