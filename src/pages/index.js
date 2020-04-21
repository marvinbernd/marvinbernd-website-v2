import React from "react"
import { Link } from "gatsby"

import tw from "twin.macro"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Image from "../components/common/Image"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Container from "../components/common/Container"
import Grid from "../components/common/Grid"
import ImageCarousel from "../components/common/ImageCarousel"

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />

      <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
        <Section
          css={tw`flex flex-col justify-between pt-24 pb-12 lg:pt-12 lg:pb-8`}
        >
          <div></div>
          <div>
            <h1>
              Ich bin selbstständiger Web Designer &amp; Entwickler aus
              Frankfurt, Deutschland.
            </h1>
            <p>
              Design, Entwicklung und Beratung. Mit diesen drei Themen
              unterstütze ich seit mehreren Jahren Firmen und Agenturen bei der
              Umsetzung von Web-Projekten. Von Newsletter-Kampagnen bis hin zu
              mehrsprachigen Online-Shops. Egal welcher Projektumfang, mir ist
              dabei immer wichtig ein einzigartiges Produkt mit einer hohen
              Qualität und langfristiger Skalierbarkeit zu entwickeln.
            </p>
            <Link to="/about/">Mehr erfahren</Link>
          </div>
          <div css={tw`hidden md:block`}>
            <Footer />
          </div>
        </Section>
        <Section css={tw`flex flex-col justify-center py-0 px-0 md:px-0`}>
          <ImageCarousel projects={projects} />
        </Section>
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            subtitle
            year
            client
            color
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
