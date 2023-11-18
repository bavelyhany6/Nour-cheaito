import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DownloadsSlider1() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return <>
  <div className="container my-5 pb-5">
    <div>
      <h1 className=" text-center text-white fs-1 my-5"> <span className="yellow">REAL PEOPLE, REAL RESULTS:</span> TRANSFORMATIONS THAT INSPIRE</h1>

      <Slider {...settings}>
        <div>
          <img
            src={require("../Images/downl9.jpg")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
        <div>
          <img
            src={require("../Images/downl11.png")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
        <div>
          <img
            src={require("../Images/downl12.png")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
        <div>
          <img
            src={require("../Images/downl13.png")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
        <div>
          <img
            src={require("../Images/downl14.png")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
        <div>
          <img
            src={require("../Images/downl10.png")}
            className="w-100 rounded-5"
            alt=""
          />
        </div>
      </Slider>
    </div>
  </div>
</> 
}
