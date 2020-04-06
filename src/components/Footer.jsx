import React from "react"
import Container from "./common/Container"

import styled from "@emotion/styled"
import tw from "twin.macro"

const FooterWrapper = styled.footer`
  ${tw`p-6`};
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </FooterWrapper>
)

export default Footer
