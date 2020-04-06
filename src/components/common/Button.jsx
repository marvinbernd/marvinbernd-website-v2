import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Button = styled(Link)`
  ${tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`};
`

export default Button
