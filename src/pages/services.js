import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import tw from "twin.macro"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"
import WebDevelopment from "../assets/icons/web-development.svg"
import Ecommerce from "../assets/icons/e-commerce.svg"
import OnpageSEO from "../assets/icons/onpage-seo.svg"
import NewsletterDevelopment from "../assets/icons/newsletter-development.svg"

const ServicesPage = ({ data }) => (
  <Layout pageId="services">
    <SEO title="Home" />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`h-screen-1/2 md:h-screen-2/3 lg:h-full p-0 md:p-0`}>
        <Img
          fixed={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
          css={tw`w-full h-full`}
        />
      </Section>
      <Section css={tw`flex flex-col justify-between pt-12`}>
        <div></div>
        <div>
          <h1>Leistungen</h1>
          <div css={tw`grid grid-cols-2 gap-4`}>
            <div>
              <WebDevelopment css={tw`h-24 max-w-full mb-4`} />
              <h2>Web Entwicklung</h2>
              <p css={tw`text-sm`}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <Ecommerce css={tw`h-24 max-w-full mb-4`} />
              <h2>App Entwicklung</h2>
              <p css={tw`text-sm`}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <OnpageSEO css={tw`h-24 max-w-full mb-4`} />
              <h2>OnPage SEO</h2>
              <p css={tw`text-sm`}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <NewsletterDevelopment css={tw`h-24 max-w-full mb-4`} />
              <h2>Newsletter Entwicklung</h2>
              <p css={tw`text-sm`}>
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
    file(relativePath: { eq: "services.jpg" }) {
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
