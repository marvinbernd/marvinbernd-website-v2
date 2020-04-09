import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Button = styled.button`
  ${tw`lg:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`};
`

const MenuButton = ({ onMenuButtonClick }) => (
  <Button onClick={() => onMenuButtonClick()}>
    <svg
      css={tw`fill-current h-3 w-3`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </Button>
)

export default MenuButton
