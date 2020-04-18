import React from "react"
import Menu from "./common/Menu"

import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

const FooterWrapper = styled.footer`
  ${tw`text-sm`}
  nav {
    ${tw`-m-2`}
    a {
      ${tw`font-normal px-2`}
    }
  }
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <Menu
      menuLinks={[
        {
          name: "Impressum",
          link: "mailto:hello@marvinbernd.de",
        },
        {
          name: "Datenschutz",
          link: "mailto:hello@marvinbernd.de",
        },
      ]}
    />
  </FooterWrapper>
)

export default Footer
