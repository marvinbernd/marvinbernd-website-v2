import { React, Component } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class ImageCarousel extends Component {
  state = {
    activeSlide: 0,
  }
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      cssEase: "linear",
      afterChange: current => this.setState({ activeSlide: current }),
    }
    console.log(this.state.activeSlide)
    return (
      <div css={tw`relative h-full`}>
        <Global
          styles={css`
            .slick-slider {
              ${tw`lg:h-screen`}
              .slick-slide {
                ${tw`lg:h-screen relative border-0`}
                & > div,
                & > div > div {
                  ${tw`lg:h-full`}
                }
                &.slick-active {
                  ${tw`z-10`}
                }
                .gatsby-image-wrapper {
                  ${tw`lg:top-1/2 lg:transform lg:-translate-y-1/2`}
                }
              }
              .slick-dots {
                ${tw`py-2 top-0 bottom-auto left-1/2 transform -translate-x-1/2 lg:py-0 lg:w-auto lg:top-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:-translate-y-1/2`};
                li {
                  ${tw`inline-block mx-3 lg:block lg:mx-0 lg:mb-6`};
                  button {
                    ${tw`lg:h-8`};
                    &::before {
                      content: "";
                      ${tw`h-1 w-8 lg:h-8 lg:w-3px bg-white`};
                    }
                  }
                }
              }
            }
          `}
        />
        <Slider {...settings}>
          {this.props.projects.map(({ node }) => (
            <div
              key={node.id}
              css={css`${tw`relative lg:h-full p-8`} background-color: ${
                node.frontmatter.color
              }`}
            >
              <Img
                fluid={
                  node.frontmatter.image.childImageSharp.fluid || {} || [] || ""
                }
              />
              <div
                css={tw`lg:absolute lg:left-0 lg:bottom-0 lg:p-8 text-white flex justify-between flex-wrap content-end w-full z-10`}
              >
                <div css={tw`mb-4 lg:mb-0`}>
                  <strong>{node.frontmatter.title} </strong> <br />
                  {node.frontmatter.subtitle}
                </div>
                <div css={tw`w-full lg:w-auto self-end`}>
                  <AniLink
                    cover
                    bg={node.frontmatter.color}
                    to={node.frontmatter.path}
                    css={tw`font-bold`}
                  >
                    Zum Projekt
                  </AniLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default ImageCarousel
