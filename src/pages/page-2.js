import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Container from "../components/common/Container"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Section>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Section>
  </Layout>
)

export default SecondPage
