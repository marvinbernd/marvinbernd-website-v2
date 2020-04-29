import React from "react"
import tw from "twin.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import TransitionLink from "gatsby-plugin-transition-link"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Section from "./Section"

const AnimatedLine = styled.span`
  display: block;
  height: 100%;
  width: 2px;
  position: absolute;
  top: 5px;
  left: -1rem;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #fff;
    transform: translateY(-100%);
    animation: animatedLine 2s linear infinite;
  }

  @keyframes animatedLine {
    0% { transform: translateY(-100%) }
    100% { transform: translateY(100%) }
  }
`

const ProjectImage = ({ pathContext, transitionStatus, image, color }) => {
  const { next } = pathContext
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
        <AnimatedLine />
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
