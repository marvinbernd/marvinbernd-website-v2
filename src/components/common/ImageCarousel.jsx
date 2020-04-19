import { React, Component } from "react"
import Slider from "react-slick"
import Image from "./Image"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
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
      vertical: false,
      autoplay: false,
      fade: true,
      cssEase: "linear",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: true,
          },
        },
      ],
      afterChange: current => this.setState({ activeSlide: current }),
    }
    console.log(this.state.activeSlide)
    return (
      <div css={tw`relative h-full`}>
        <Global
          styles={css`
            .slick-slider {
              ${tw`md:h-screen`}
              .slick-slide {
                ${tw`md:h-screen relative border-0`}
                & > div,
                & > div > div {
                  ${tw`md:h-full`}
                }
                &.slick-active {
                  ${tw`z-10`}
                }
                .gatsby-image-wrapper {
                  ${tw`md:top-1/2 md:transform md:-translate-y-1/2`}
                }
              }
              .slick-dots {
                ${tw`py-2 top-0 bottom-auto left-1/2 transform -translate-x-1/2 md:py-0 md:w-auto md:top-1/2 md:left-auto md:right-0 md:translate-x-0 md:-translate-y-1/2`};
                li {
                  ${tw`inline-block mx-3 md:block md:mx-0 md:mb-6`};
                  button {
                    ${tw`md:h-8`};
                    &::before {
                      content: "";
                      ${tw`h-1 w-8 md:h-8 md:w-3px bg-white`};
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
              css={css`${tw`relative md:h-full p-8`} background-color: ${
                node.frontmatter.color
              }`}
            >
              <Img
                fluid={
                  node.frontmatter.image.childImageSharp.fluid || {} || [] || ""
                }
              />
              <div
                css={tw`md:absolute md:left-0 md:bottom-0 md:p-8 text-white flex justify-between flex-wrap content-end w-full z-10`}
              >
                <div>
                  <strong>{node.frontmatter.title} </strong> <br />
                  {node.frontmatter.subtitle}
                </div>
                <div css={tw`self-end`}>
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
