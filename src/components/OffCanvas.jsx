import { React, Component } from "react"
import { Link } from "gatsby"

import Section from "../components/common/Section"
import Menu from "./common/Menu"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`absolute w-full bg-white z-40`};
  height: 70%;
  top: -100%;
  transition: all 0.3s ease-in-out;
`

const OffCanvas = ({ showOffCanvas, menuLinks }) => (
  <Wrapper
    css={
      showOffCanvas
        ? css`
            top: 0;
          `
        : css`
            transition-delay: 0.5s;
          `
    }
  >
    <Section css={tw`flex flex-col justify-between h-full`}>
      <div></div>
      <div>
        <Menu menuLinks={menuLinks} showOffCanvas={showOffCanvas} />
      </div>
      <div></div>
    </Section>
  </Wrapper>
)

export default OffCanvas
