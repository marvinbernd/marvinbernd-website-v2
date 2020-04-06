import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./common/Container"
import Button from "./common/Button"

import styled from "@emotion/styled"
import tw from "twin.macro"

const HeaderWrapper = styled.header`
  ${tw`bg-teal-500 p-6`};
`
const NavBar = styled.nav`
  ${tw`flex items-center justify-between flex-wrap`};
`
const NavBarLeft = styled.div`
  ${tw`flex items-center flex-grow text-white mr-6`};
`
const NavBarRight = styled.div`
  ${tw`w-full block flex-shrink-0 lg:flex lg:items-center lg:w-auto`};
`
const Logo = styled.span`
  ${tw`font-semibold text-xl tracking-tight`};
`
const Menu = styled.div`
  ${tw`text-sm lg:flex-grow`};
`
const MenuItem = styled(Link)`
  ${tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`};
`
const MenuButton = styled.button`
  ${tw`lg:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`};
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <NavBar>
        <NavBarLeft>
          <Logo>{siteTitle}</Logo>
        </NavBarLeft>
        <MenuButton>
          <svg
            css={tw`fill-current h-3 w-3`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </MenuButton>
        <NavBarRight>
          <Menu>
            <MenuItem to="/page-2/">Go to page 2</MenuItem>
            <MenuItem to="/page-2/">Go to page 2</MenuItem>
            <MenuItem to="/page-2/">Go to page 2</MenuItem>
            <Button>Download</Button>
          </Menu>
        </NavBarRight>
      </NavBar>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
