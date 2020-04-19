import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"
import Layout from "../components/Layout"
import SEO from "../components/common/SEO"
import Grid from "../components/common/Grid"
import Section from "../components/common/Section"
import Img from "gatsby-image"

const FullpageSection = ({ subarray }) => {
  return subarray.map(function(project) {
    console.log(project)
    return (
      <div css={tw`h-screen-1/2`}>
        <Global
          styles={css`
            .fp-tableCell {
              ${tw`align-top`}
            }
          `}
        />
        <Grid css={tw`lg:grid-cols-2 h-full`}>
          <Section
            css={css`${tw`relative md:h-full p-8`} background-color: ${
              project.node.frontmatter.color
            }`}
          >
            <Img
              fluid={
                project.node.frontmatter.image.childImageSharp.fluid ||
                {} ||
                [] ||
                ""
              }
            />
          </Section>
          <Section>a</Section>
        </Grid>
      </div>
    )
  })
}

const Fullpage = ({ projectsArray }) => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {projectsArray.map(function(subarray) {
            return (
              <div className="section">
                <FullpageSection subarray={subarray} />
              </div>
            )
          })}
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

const ProjectsPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark

  function chunkArray(myArray, chunk_size) {
    const arrayLength = myArray.length
    const tempArray = []
    let index = 0
    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size)
      tempArray.push(myChunk)
    }
    return tempArray
  }

  const projectsArray = chunkArray(projects, 2)

  return (
    <Layout>
      <SEO title="Home" />
      <Fullpage projectsArray={projectsArray} />
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                fluid(maxWidth: 1000, quality: 90) {
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
