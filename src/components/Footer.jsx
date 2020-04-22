import React from "react"
import FooterMenu from "./common/FooterMenu"

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
    <FooterMenu
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
