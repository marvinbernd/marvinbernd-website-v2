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
    <SEO
      title="Über mich | Frontend Web Developer | Frankfurt"
      description="Selbstständiger Frontend Web Developer aus Frankfurt. Ich entwickle Webseiten & Online-Shops mit JavaScript, React, PHP, WordPress, Shopify & Contao."
    />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`h-screen-1/2 md:h-screen-2/3 lg:h-full p-0 md:p-0`}>
        <Img
          fixed={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 0%"
          alt="Marvin Bernd | Frontend Web Developer aus Frankfurt"
          css={tw`w-full h-full`}
        />
      </Section>
      <Section css={tw`flex flex-col justify-between pt-12`}>
        <div></div>
        <div css={tw`mb-8 lg:mb-0`}>
          <h1>Über mich</h1>
          <p>
            Seit 2015 arbeite ich als selbstständiger Web Designer & Entwickler.
            Dabei unterstütze ich Agenturen und KMUs bei der Planung und
            Umsetzung von modernen Webseiten und Online-Shops. Da jedes Projekt
            verschiedene Anforderungen hat, ist es mir immer wichtig, nicht auf
            Standard-Lösungen zurückzugreifen, sondern ein passendes Konzept zu
            entwickeln.
          </p>
          <p>
            Seit längerem beschäftige ich mich daher mit der{" "}
            <a
              href="https://jamstack.org/"
              target="_blank"
              rel="noopener noreferrer"
              css={tw`underline`}
            >
              Jamstack Entwicklung
            </a>
            . Dadurch kann ich ein individuelles Produkt anbieten, welches
            zusätzlich eine bessere Performance, Skalierbarkeit und Sicherheit
            bietet.
          </p>
          <h2>Kenntnisse</h2>
          <div css={tw`grid grid-cols-3 gap-4`}>
            <ul>
              <li>CSS (Sass)</li>
              <li>JavaScript (ES6)</li>
              <li>TypeScript</li>
              <li>React (Native)</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>REST APIs</li>
              <li>Gatsby.js</li>
              <li>Next.js</li>
              <li>Jekyll</li>
              <li>Hugo</li>
            </ul>
            <ul>
              <li>WordPress</li>
              <li>Drupal</li>
              <li>Contentful</li>
              <li>Prismic</li>
              <li>Shopify</li>
            </ul>
          </div>
          {/* <h2 css={tw`mt-4`}>Awards</h2>
          <CSSDA /> */}
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "marvin-bernd-profile-2.jpg" }) {
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
