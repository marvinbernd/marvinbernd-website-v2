import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import "hamburgers/dist/hamburgers.css"

const Button = styled.button`
  ${tw`flex items-center px-3 py-2 text-black`};
`

const MenuButton = ({ showOffCanvas, onMenuButtonClick }) => (
  <Button onClick={() => onMenuButtonClick()}>
    <button
      className={
        showOffCanvas
          ? "hamburger hamburger--spring is-active"
          : "hamburger hamburger--spring"
      }
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  </Button>
)

export default MenuButton
