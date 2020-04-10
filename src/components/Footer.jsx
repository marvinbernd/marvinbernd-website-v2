import React from "react"
import Container from "./common/Container"

import styled from "@emotion/styled"
import tw from "twin.macro"

const FooterWrapper = styled.footer`
  ${tw`text-sm`}
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <a href="https://www.gatsbyjs.org">Impressum</a>
    {` `}
    <a href="https://www.gatsbyjs.org">Datenschutz</a>
  </FooterWrapper>
)

export default Footer
