import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./../components/styles/GlobalStyles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
