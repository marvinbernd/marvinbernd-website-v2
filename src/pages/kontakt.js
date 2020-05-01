import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import tw from "twin.macro"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"

const ContactPage = ({ data }) => (
  <Layout pageId="contact">
    <SEO title="Kontakt" description="Haben Sie eine Projektidee oder bereits eine konkrete Anfrage? Gerne berate ich Sie bei der Planung Ihres nächsten Web-Projektes." />

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
        <div css={tw`mb-8 lg:mb-0`}>
          <h1>Kontakt</h1>
          <p>
            Haben Sie eine Projektidee oder bereits eine konkrete Anfrage?
            <br />
            Gerne berate ich Sie bei der Planung Ihres nächsten Web-Projektes.
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:hello@marvinbernd.de">hello@marvinbernd.de</a>
            <br />
            <strong>Telefon: </strong>
            <a href="tel:+4915206049110">+49 152 060 49 110</a>
          </p>
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    file(relativePath: { eq: "contact3.jpg" }) {
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
