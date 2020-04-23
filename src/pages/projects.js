import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"
import Layout from "../components/Layout"
import SEO from "../components/common/SEO"
import Grid from "../components/common/Grid"
import Section from "../components/common/Section"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Button from "../components/common/Button"

const FullpageSection = ({ subarray }) => {
  return subarray.map(function(project) {
    return (
      <div css={tw`lg:h-screen-1/2`}>
        <Global
          styles={css`
            .fp-tableCell {
              ${tw`align-top`}
            }
          `}
        />
        <Grid css={tw`lg:grid-cols-2 lg:h-screen-1/2 overflow-y-hidden`}>
          <Section
            css={css`${tw`relative lg:h-screen-1/2 px-8 py-4 flex items-center`} background-color: ${
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
              css={tw`w-full h-auto`}
            />
          </Section>
          <Section css={tw`flex items-center`}>
            <div>
              <h1 css={tw`mb-0`}>{project.node.frontmatter.title}</h1>
              <h2 css={tw`font-normal`}>{project.node.frontmatter.subtitle}</h2>
              <p>
                <strong>Jahr:</strong> {project.node.frontmatter.year}
                <br />
                <strong>Kunde:</strong> {project.node.frontmatter.client}
              </p>
              <p>
                <AniLink
                  cover
                  bg={project.node.frontmatter.color}
                  to={project.node.frontmatter.path}
                  css={tw`font-bold`}
                >
                  <Button>Zum Projekt</Button>
                </AniLink>
              </p>
            </div>
          </Section>
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
    responsiveWidth={768}
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
    <Layout pageId="projects">
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
