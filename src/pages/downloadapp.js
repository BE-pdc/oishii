import React from "react"
import styled from "styled-components"
import Layout from "./../components/Layout"

const DownloadApp = () => {
  const DownloadAppP = styled.p`
    font-size: 1.4em;
    font-family: "Lato";
    font-weight: bold;
  `

  return (
    <Layout>
      <DownloadAppP>Download App Page</DownloadAppP>
    </Layout>
  )
}

export default DownloadApp
