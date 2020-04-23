import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

import "hamburgers/dist/hamburgers.css"

const Button = styled.button`
  ${tw`flex items-center p-0 text-black`};
`
const HamburgerInner = styled.span`
  ${tw`bg-black rounded-none`};
  &.white {
    ${tw`lg:bg-white`}
  }
  &::before,
  &::after {
    background: inherit;
    ${tw`rounded-none`};
  }
`

const MenuButton = ({ showOffCanvas, onMenuButtonClick, pageId }) => (
  <Button onClick={() => onMenuButtonClick()}>
    <button
      className={
        showOffCanvas
          ? "hamburger hamburger--spring is-active"
          : "hamburger hamburger--spring"
      }
      type="button"
      css={css`
        padding: 0;
        opacity: 1 !important;
      `}
    >
      <span className="hamburger-box">
        <HamburgerInner
          className={
            pageId === "index" ? "hamburger-inner white" : "hamburger-inner"
          }
        ></HamburgerInner>
      </span>
    </button>
  </Button>
)

export default MenuButton
