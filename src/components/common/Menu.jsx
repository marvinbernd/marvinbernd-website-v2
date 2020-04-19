import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Nav = styled.nav``

const List = styled.ul`
  ${tw`flex items-center flex-col md:flex-row md:flex-wrap`}
`
const Item = styled.li`
  ${tw`list-none mb-2 md:mb-0`}
`

const Menu = ({ menuLinks, showOffCanvas }) => (
  <Nav css={tw`-mx-4 py-2`}>
    <List>
      {menuLinks.map((link, index) => (
        <Item key={link.name}>
          <AniLink paintDrip to={link.link} css={tw`text-gray px-4`}>
            {link.name}
          </AniLink>
        </Item>
      ))}
    </List>
  </Nav>
)

export default Menu
