import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import tw from "twin.macro"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"
import Button from "../components/common/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NotFoundPage = ({ data }) => (
  <Layout pageId="404">
    <SEO title="404: Not found" />

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
          <h1>404</h1>
          <p>
            Leider wurde die gewünschte Seite nicht gefunden.
          </p>
          <AniLink to="/" paintDrip hex="#ffffff">
              <Button>Zur Startseite</Button>
          </AniLink>
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
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