import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Nav = styled.nav``

const List = styled.ul`
  ${tw`flex items-center justify-between flex-col md:flex-row md:flex-wrap`}
`
const Item = styled.li`
  ${tw`list-none mb-4`}
`

const MainMenu = ({ menuLinks, showOffCanvas }) => (
  <Nav>
    <List>
      {menuLinks.map((link, index) => (
        <Item
          key={link.name}
          css={
            showOffCanvas
              ? css`
                  opacity: 1;
                  transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0);
                  transition: all 0.3s ease-in-out ${index * 100 + 300}ms;
                `
              : css`
                  opacity: 0;
                  transform: translate(0%, -50%) matrix(1, 0, 0, 1, 0, 0);
                  transition: all 0.3s ease-in-out ${index * 100}ms;
                `
          }
        >
          <AniLink
            paintDrip
            hex="#ffffff"
            to={link.link}
            css={tw`text-2xl lg:text-3xl font-bold`}
          >
            {link.name}
          </AniLink>
        </Item>
      ))}
    </List>
  </Nav>
)

export default MainMenu
