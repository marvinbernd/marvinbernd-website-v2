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
      vertical: true,
      autoplay: false,
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
              height: 100vh;
              .slick-slide {
                position: relative;
                height: 100vh;
                border: 0;
                & > div,
                & > div > div {
                  height: 100%;
                }
                .gatsby-image-wrapper {
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
            }
            .slick-dots {
              ${tw`w-auto bottom-1/2 left-auto bottom-auto top-1/2`};
              right: 0;
              transform: translateY(-50%);
              li {
                ${tw`block`};
                margin-bottom: 1.5rem;
                button {
                  height: 8px;
                  &::before {
                    content: "";
                    height: 30px;
                    width: 3px;
                    background: #fff;
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
              css={css`${tw`relative h-full p-8`} background-color: ${
                node.frontmatter.color
              }`}
            >
              <Img
                fluid={
                  node.frontmatter.image.childImageSharp.fluid || {} || [] || ""
                }
              />
              <div
                css={tw`absolute left-0 bottom-0 p-8 text-white flex justify-between flex-wrap content-end w-full z-10`}
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
