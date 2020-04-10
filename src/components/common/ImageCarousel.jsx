import { React, Component } from "react"
import Slider from "react-slick"
import Image from "./Image"
import styled from "@emotion/styled"
import tw from "twin.macro"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class ImageCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
    }
    return (
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
    )
  }
}

export default ImageCarousel
