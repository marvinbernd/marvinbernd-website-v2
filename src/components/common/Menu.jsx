import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          {link.target ? (
            <a
              href={link.link}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : null}
              css={tw`text-gray px-4`}
            >
              {link.name}
            </a>
          ) : (
            <AniLink
              paintDrip
              hex="#ffffff"
              to={link.link}
              css={tw`text-gray px-4`}
            >
              {link.name}
            </AniLink>
          )}
        </Item>
      ))}
    </List>
  </Nav>
)

export default Menu
