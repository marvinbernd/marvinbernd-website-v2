import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { Global, css } from "@emotion/core"
// import styled from "@emotion/styled"
import tw from "twin.macro"
import Layout from "../components/Layout"
import SEO from "../components/common/SEO"
import Footer from "../components/Footer"
import Grid from "../components/common/Grid"
import Section from "../components/common/Section"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Button from "../components/common/Button"

/* const MoreProjects = styled.span`
  position: fixed;
  bottom: 0;
  right: 3rem;
  padding-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`

const AnimatedLine = styled.span`
  display: block;
  height: 100%;
  width: 2px;
  position: absolute;
  top: 5px;
  right: -1rem;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #000;
    transform: translateY(-100%);
    animation: animatedLine 2s linear infinite;
  }

  @keyframes animatedLine {
    0% { transform: translateY(-100%) }
    100% { transform: translateY(100%) }
  }
` */

const FullpageSection = ({ subarray }) => {
  return subarray.map(function(project, index) {
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
            css={
              index === 0
                ? css`${tw`relative lg:h-screen-1/2 px-8 py-4 pt-16 lg:pt-4 flex items-center`} background-color: ${
                    project.node.frontmatter.color
                  }`
                : css`${tw`relative lg:h-screen-1/2 px-8 py-4 flex items-center`} background-color: ${
                    project.node.frontmatter.color
                  }`
            }
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
    licenseKey={"315633C4-FDAB4EFA-BBBFAFC7-CB4E9D7D"}
    scrollingSpeed={1000} /* Options here */
    responsiveWidth={1024}
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
      <SEO title="Projekte" description="Website & Online-Shops Projekte mit JavaScript, React, PHP, WordPress, Shopify & Contao." />
      <Fullpage projectsArray={projectsArray} />
      <Section css={tw`lg:fixed left-1/2 bottom-0 lg:w-1/2`}>
        <Footer />
        {/*<MoreProjects>Weitere Projekte<AnimatedLine /></MoreProjects>*/}      
      </Section>
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
