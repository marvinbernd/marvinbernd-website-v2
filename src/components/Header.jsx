import { React, Component } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import MenuButton from "./common/MenuButton"

import styled from "@emotion/styled"
import tw from "twin.macro"

const HeaderWrapper = styled.header`
  ${tw`py-8 px-8 md:px-16 absolute w-full z-50`};
`
const NavBar = styled.nav`
  ${tw`flex items-center justify-between flex-wrap`};
`
const NavBarLeft = styled.div`
  ${tw`flex items-center flex-grow text-white mr-6`};
`
const NavBarRight = styled.div`
  ${tw`w-full block flex-shrink-0 flex items-center w-auto`};
`
const Logo = styled.span`
  ${tw`text-white font-semibold text-xl tracking-tight transition duration-300 ease-in-out`};
  &.black {
    ${tw`text-black`}
  }
`

class Header extends Component {
  state = {}
  render() {
    const { showOffCanvas, onMenuButtonClick, pageId } = this.props
    return (
      <HeaderWrapper>
        <NavBar>
          <NavBarLeft>
            <AniLink paintDrip hex="#ffffff" to="/">
              <Logo
                className={
                  showOffCanvas ||
                  pageId === "index" ||
                  pageId === "imprint" ||
                  pageId === "privacy"
                    ? "black"
                    : null
                }
              >
                marvin bernd
              </Logo>
            </AniLink>
          </NavBarLeft>
          <NavBarRight>
            <MenuButton
              showOffCanvas={showOffCanvas}
              onMenuButtonClick={onMenuButtonClick}
              pageId={pageId}
            />
          </NavBarRight>
        </NavBar>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
