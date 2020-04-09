import { React, Component } from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import Container from "./common/Container"
import Button from "./common/Button"
import MenuButton from "./common/MenuButton"

import { css } from "@emotion/core"
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

class Header extends Component {
  state = {
    showMenuMobile: false,
  }

  handleMenuButtonClick = () => {
    this.setState({
      showMenuMobile: !this.state.showMenuMobile,
    })
  }

  render() {
    const { siteTitle } = this.props
    const { showMenuMobile } = this.state
    return (
      <HeaderWrapper>
        <Container>
          <NavBar>
            <NavBarLeft>
              <Logo>{siteTitle}</Logo>
            </NavBarLeft>
            <MenuButton onMenuButtonClick={this.handleMenuButtonClick} />
            <NavBarRight
              css={
                showMenuMobile
                  ? ""
                  : css`
                      @media screen and (max-width: 1023px) {
                        display: none;
                      }
                    `
              }
            >
              <Menu>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/page-2/">Page 2</MenuItem>
                <Button>Contact</Button>
              </Menu>
            </NavBarRight>
          </NavBar>
        </Container>
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
