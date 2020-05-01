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
    <SEO
      title="Leistungen | Frontend Web Developer | Frankfurt"
      description="Meine Leistungen: Web Entwicklung, Webdesign, Online-Shops, OnPage SEO & Newsletter Entwicklung."
    />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`h-screen-1/2 md:h-screen-2/3 lg:h-full p-0 md:p-0`}>
        <Img
          fixed={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="Web Entwicklung & Webdesign"
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
                Von der Konzeption bis zur Optimierung. Ich helfe Ihnen bei der
                Umsetzung von modernen Webseiten und Anwendungen.
              </p>
            </div>
            <div>
              <Ecommerce css={tw`h-24 max-w-full mb-4`} />
              <h2>Online-Shops</h2>
              <p css={tw`text-sm`}>
                Mein Ziel ist es eine skalierbare Lösung zu entwickeln, die mit
                den Ansprüchen Ihrer Kunden mitwächst.
              </p>
            </div>
            <div>
              <OnpageSEO css={tw`h-24 max-w-full mb-4`} />
              <h2>OnPage SEO</h2>
              <p css={tw`text-sm`}>
                Eine optimale Darstellung Ihrer Inhalte in Suchmaschinen ist ein
                Grundfaktor für den Erfolg Ihrer Website.
              </p>
            </div>
            <div>
              <NewsletterDevelopment css={tw`h-24 max-w-full mb-4`} />
              <h2>Newsletter Entwicklung</h2>
              <p css={tw`text-sm`}>
                Ich programmiere responsive Newsletter für Ihre Kampagnen,
                welche auf allen Geräten optimal dargestellt werden.
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
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
