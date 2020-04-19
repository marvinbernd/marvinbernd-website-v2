import { React, Component } from "react"
import { Link } from "gatsby"

import Section from "../components/common/Section"
import MainMenu from "./common/MainMenu"
import Menu from "./common/Menu"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`absolute w-full bg-white z-40`};
  height: 100vh;
  top: -100%;
  transition: all 0.3s ease-in-out;
  @media screen and (min-width: 1280px) {
    height: 70vh;
  }
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
        <MainMenu menuLinks={menuLinks} showOffCanvas={showOffCanvas} />
      </div>
      <div css={tw`flex flex-col md:flex-row justify-between`}>
        <Menu
          menuLinks={[
            {
              name: "hello@marvinbernd.de",
              link: "mailto:hello@marvinbernd.de",
            },
            {
              name: "+49 (0)152 060 49 110",
              link: "mailto:hello@marvinbernd.de",
            },
          ]}
        />
        <div>
          <Menu
            menuLinks={[
              {
                name: "Blog",
                link: "mailto:hello@marvinbernd.de",
              },
              {
                name: "LinkedIn",
                link: "mailto:hello@marvinbernd.de",
              },
              {
                name: "Xing",
                link: "mailto:hello@marvinbernd.de",
              },
              {
                name: "Twitter",
                link: "mailto:hello@marvinbernd.de",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  </Wrapper>
)

export default OffCanvas
