import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Contact = () => {
  const ContactP = styled.p`
    font-size: 1.4em;
    font-family: "Lato";
    font-weight: bold;
  `

  return (
    <Layout>
      <ContactP>Contact Page</ContactP>
    </Layout>
  )
}

export default Contact
