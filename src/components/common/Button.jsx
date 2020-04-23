import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Arrow from "../../assets/icons/arrow.svg"

const ButtonWrapper = styled.span`
  ${tw`inline-flex items-center font-bold overflow-hidden`};

  .animatedArrow {
    position: absolute;
    transform: translateX(-150%);
  }

  @keyframes arrow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(150%);
    }
  }

  @keyframes animatedArrow {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(0);
    }
  }

  &:hover,
  &:focus {
    .arrow {
      animation: arrow 1s forwards;
    }
    .animatedArrow {
      animation: animatedArrow 1s forwards;
    }
  }
`

const Button = ({ children }) => (
  <ButtonWrapper>
    {children}
    <div css={tw`relative overflow-hidden`}>
      <Arrow className="animatedArrow" css={tw`ml-2`} />
      <Arrow className="arrow" css={tw`ml-2`} />
    </div>
  </ButtonWrapper>
)

export default Button
