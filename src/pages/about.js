import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import tw from "twin.macro"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Image from "../components/common/Image"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Container from "../components/common/Container"
import Grid from "../components/common/Grid"
import ImageCarousel from "../components/common/ImageCarousel"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`p-0`}>
        <Img
          fixed={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
          css={tw`w-full h-full`}
        />
      </Section>
      <Section css={tw`flex flex-col justify-between pt-24 lg:pt-12`}>
        <div></div>
        <div>
          <h1>Über mich</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
          </p>
          <p>
            JAMstack Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.
          </p>
          <p>
            <strong>Kenntnisse</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "marvin-bernd-profile@2x.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
