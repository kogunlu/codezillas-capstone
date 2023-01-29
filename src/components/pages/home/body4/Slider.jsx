import * as React from "react";
import Slider from "react-slick";
import {Link } from 'react-router-dom';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import { sliderArray } from "./SliderArray";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

// Home Page Recent Blog Slider images should link us to the Blog page
const Slidernew = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BsChevronCompactRight />,
    prevArrow: <BsChevronCompactLeft />,
    responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }        
        ], 
  };

  return (
    <div className="bg-main-background">
    <div className="flex flex-col justify-between sm:items-center lg:items-start lg:px-24 xl:px-32 2xl:px-48">
    <p className=" text-center text-4xl md:text-start 2xl:text-6xl font-bold mt-10">RECENT BLOGS</p>
  </div>
<div className="mt-5 flex justify-center pb-20">
      <Slider
      {...settings}
        className="w-5/6  justify-center"
      > 
        {sliderArray.map((card) => (
          <div className="flex justify-center">
            <Link  to="/blogs">
            <img alt={card.title} src={card.picture} className="max-w-full p-2 h-auto"/>
            </Link>
        </div>
     ))}  
      </Slider>
      </div>
   </div>
  );
};

export default Slidernew;
