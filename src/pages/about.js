import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import tw from "twin.macro"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"
import CSSDA from "../components/common/CSSDA"

const AboutPage = ({ data }) => (
  <Layout pageId="about">
    <SEO title="Home" />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`h-screen-1/2 md:h-screen-2/3 lg:h-full p-0 md:p-0`}>
        <Img
          fixed={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 0%"
          alt=""
          css={tw`w-full h-full`}
        />
      </Section>
      <Section css={tw`flex flex-col justify-between pt-12`}>
        <div></div>
        <div>
          <h1>Über mich</h1>
          <p>
            Seit 2015 arbeite ich als selbstständiger Web Designer & Entwickler.
            Dabei unterstütze ich Agenturen und KMUs bei der Planung und
            Umsetzung von modernen Webseiten und Online-Shops. Dabei hat jedes
            Projekt verschiedene Anforderungen und benötigt einen einzigartigen
            Lösungsansatz.
          </p>
          <p>
            Seit längerem beschäftige ich mich daher mit der{" "}
            <a href="#" css={tw`underline`}>
              Jamstack Entwicklung
            </a>
            . Dadurch kann ich ein individuelles Produkt anbieten, welches nicht
            an vordefinierte Systeme gebunden ist.
          </p>
          <h2>Kenntnisse</h2>
          <div css={tw`grid grid-cols-3 gap-4`}>
            <ul>
              <li>HTML5</li>
              <li>CSS3 (Sass)</li>
              <li>JavaScript (ES6)</li>
              <li>React.js</li>
              <li>PHP</li>
            </ul>
            <ul>
              <li>APIs (REST)</li>
              <li>Gatsby.js</li>
              <li>Next.js</li>
              <li>Jekyll</li>
              <li>Hugo</li>
            </ul>
            <ul>
              <li>Kirby</li>
              <li>WordPress</li>
              <li>Contao</li>
              <li>Shopware</li>
              <li>Shopify</li>
            </ul>
          </div>
          <h2 css={tw`mt-4`}>Awards</h2>
          <CSSDA />
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
