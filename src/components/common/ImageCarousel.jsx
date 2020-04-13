import { React, Component } from "react"
import Slider from "react-slick"
import Image from "./Image"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class ImageCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      autoplay: true,
      fade: true,
      cssEase: "linear",
    }
    return (
      <div>
        <Global
          styles={css`
            .slick-dots {
              ${tw`w-auto bottom-1/2 left-auto bottom-auto top-1/2`};
              right: -1.8rem;
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
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
        </Slider>
      </div>
    )
  }
}

export default ImageCarousel
