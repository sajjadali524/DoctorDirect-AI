import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = ({ title, desc, testimonial = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="lg:px-28 md:px-10 px-3 pt-28 space-y-10 w-[100%]">
      <div className="text-center space-y-3">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <Slider {...settings} className="">
        {testimonial.map((items, index) => {
          return (
            <div
              key={index}
              className="border border-slate-200 bg-[#e9f3f2] h-[500px] relative py-3 px-5 rounded-md"
            >
              <div className="space-y-3">
                <RiDoubleQuotesL className="text-darkBlue text-[30px]" />
                <p>{items.detail}</p>
              </div>
              <div className="flex items-center gap-3 absolute bottom-0 left-0 px-5 py-3">
                <img
                  src={items.image}
                  alt="customer-image"
                  className="rounded-full w-[40px]"
                />
                <span className="font-[600] text-[20px]">{items.author}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
