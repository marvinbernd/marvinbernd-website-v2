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

const ServicesPage = ({ data }) => (
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
          <h1>Leistungen</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div css={tw`grid grid-cols-2 gap-4`}>
            <div>
              <h2>Web Entwicklung</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <h2>App Entwicklung</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <h2>OnPage SEO</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <h2>Newsletter Entwicklung</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default ServicesPage

export const query = graphql`
  query {
    file(relativePath: { eq: "marvin-bernd-services@2x.jpg" }) {
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
