import React from "react"
import tw from "twin.macro"
import { css } from "@emotion/core"
import TransitionLink from "gatsby-plugin-transition-link"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Section from "./Section"

const ProjectImage = ({ pathContext, transitionStatus, image, color }) => {
  const { next, prev } = pathContext
  return (
    <Section
      className={transitionStatus}
      css={css`${tw`flex flex-col justify-center p-8 pt-20 md:pt-8`} background-color: ${color}`}
    >
      <Img fluid={image || {} || [] || ""} />
      <TransitionLink
        to={next.frontmatter.path}
        css={tw`text-white absolute bottom-0 pb-4 hidden lg:block`}
      >
        <strong>Nächstes Projekt</strong>
        <br />
        {next.frontmatter.title}
      </TransitionLink>
    </Section>
  )
}

export default ProjectImage

ProjectImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

ProjectImage.defaultProps = {
  image: false,
}
