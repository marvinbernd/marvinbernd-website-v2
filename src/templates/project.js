import React from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"

import ProjectImage from "../components/common/ProjectImage"
import ProjectContent from "../components/common/ProjectContent"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  transitionStatus,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const image = frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={frontmatter.title + " | " + frontmatter.subtitle}
        description={excerpt}
      />
      <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
        <ProjectImage
          transitionStatus={transitionStatus}
          pageContext={pageContext}
          color={frontmatter.color}
          image={image}
          alt={frontmatter.title + " | " + frontmatter.subtitle}
        />
        <Section
          css={tw`flex flex-col justify-between pt-8 lg:pt-12`}
          className={transitionStatus}
        >
          <ProjectContent frontmatter={frontmatter} html={html} />
          <Footer css={tw`self-end`} />
        </Section>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        year
        client
        url
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
`
