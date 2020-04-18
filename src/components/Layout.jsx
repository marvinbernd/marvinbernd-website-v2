/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { React, Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

import OffCanvas from "./OffCanvas"
import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
`

class Layout extends Component {
  state = {
    showOffCanvas: false,
    isMenuBtnWhite: false,
  }

  handleMenuButtonClick = () => {
    this.setState({
      showOffCanvas: !this.state.showOffCanvas,
    })
  }
  render() {
    const { children } = this.props
    const { showOffCanvas } = this.state
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <Wrapper
            css={
              showOffCanvas
                ? css`
                    &::before  {
                      visibility: visible;
                      opacity: 1;
                      transition: visibility 0s linear 0s, opacity 300ms;
                    }
                  `
                : css`
                    &::before  {
                      visibility: hidden;
                      opacity: 0;
                      transition: visibility 0.5s linear 0.5s, opacity 0.5s;
                      transition-delay: 0.5s;
                    }
                  `
            }
          >
            <OffCanvas
              showOffCanvas={showOffCanvas}
              menuLinks={data.site.siteMetadata.menuLinks}
            />
            <Header
              siteTitle={data.site.siteMetadata.title}
              showOffCanvas={showOffCanvas}
              onMenuButtonClick={this.handleMenuButtonClick}
            />
            <main>{children}</main>
          </Wrapper>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
