import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "@emotion/styled"
import tw from "twin.macro"

const Nav = styled.nav``

const List = styled.ul``
const Item = styled.li`
  ${tw`inline-block list-none mb-2 md:mb-0`}
`

const FooterMenu = ({ menuLinks, showOffCanvas }) => (
  <Nav css={tw`-mx-4 py-2`}>
    <List>
      {menuLinks.map((link, index) => (
        <Item key={link.name}>
          <AniLink
            paintDrip
            hex="#ffffff"
            to={link.link}
            css={tw`text-gray px-4`}
          >
            {link.name}
          </AniLink>
        </Item>
      ))}
    </List>
  </Nav>
)

export default FooterMenu
