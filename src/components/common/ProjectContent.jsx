import React from "react"
import tw from "twin.macro"
import TransitionLink from "gatsby-plugin-transition-link"
import Image from "./Image"
import Section from "./Section"

const ProjectContent = ({ frontmatter, html }) => {
  return (
    <>
      <div></div>
      <div>
        <h1 css={tw`mb-0`}>{frontmatter.title}</h1>
        <h2 css={tw`font-normal`}>{frontmatter.subtitle}</h2>
        <p>
          <strong>Jahr:</strong> {frontmatter.year}
          <br />
          <strong>Kunde:</strong> {frontmatter.client}
        </p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export default ProjectContent
