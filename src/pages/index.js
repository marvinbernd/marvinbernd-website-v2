import React from "react"
import tw from "twin.macro"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Button from "../components/common/Button"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"
import ImageCarousel from "../components/common/ImageCarousel"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  return (
    <Layout pageId="index">
      <SEO
        title="Marvin Bernd | Frontend Web Developer | Frankfurt"
        description="Ich bin selbständiger Frontend Web Developer aus Frankfurt. Seit mehreren Jahren unterstütze ich Agenturen und Firmen bei der Umsetzung von modernen Web-Projekten."
      />

      <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
        <Section
          css={tw`flex flex-col justify-between pt-24 pb-12 lg:pt-12 lg:pb-8`}
        >
          <div></div>
          <div className="animated fadeInLeft">
            <h1 css={tw`font-normal`}>
              Ich bin selbstständiger
              <br />
              <strong>Frontend Web Developer</strong>
              <br />
              aus Frankfurt, Deutschland.
            </h1>
            <p>
              Seit mehreren Jahren unterstütze ich Agenturen und Firmen bei der
              Umsetzung von modernen Web-Projekten. Von Newsletter-Kampagnen bis
              hin zu mehrsprachigen Online-Shops. Egal welcher Projektumfang,
              mir ist dabei immer wichtig ein einzigartiges Produkt mit einer
              hohen Qualität und einfachen Skalierbarkeit zu entwickeln.
            </p>
            <AniLink to="/ueber-mich/" paintDrip hex="#ffffff">
              <Button>Mehr erfahren</Button>
            </AniLink>
          </div>
          <div css={tw`hidden lg:block`}>
            <Footer />
          </div>
        </Section>
        <Section css={tw`flex flex-col justify-center py-0 px-0 md:px-0`}>
          <ImageCarousel projects={projects} />
        </Section>
        <Section css={tw`lg:hidden`}>
          <Footer />
        </Section>
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
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
                fluid(maxWidth: 800, quality: 90) {
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
