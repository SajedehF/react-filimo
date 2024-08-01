import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles2.css";

// import required modules
import { Autoplay } from "swiper/modules";
import sliderImage1 from "../../image/slider1.webp";
import sliderImage2 from "../../image/slider2.webp";
import sliderImage3 from "../../image/slider3.webp";
import sliderImage4 from "../../image/slider4.webp";
import sliderImage5 from "../../image/slider5.webp";
import sliderImage6 from "../../image/slider6.webp";
import sliderImage7 from "../../image/slider7.webp";
import sliderImage8 from "../../image/slider8.webp";
import checkBox from "../../icon/checkbox-circle.svg";
const Slider = () => {
  let sliderJson = [
    { id: 1, image: sliderImage1 },
    { id: 1, image: sliderImage2 },
    { id: 1, image: sliderImage3 },
    { id: 1, image: sliderImage4 },
    { id: 1, image: sliderImage5 },
    { id: 1, image: sliderImage6 },
    { id: 1, image: sliderImage7 },
    { id: 1, image: sliderImage8 },
  ];
  let titleJson = [
    { id: 1, title: "۹۰ هزار اپیزود فیلم و سریال برای تماشا داری" },
    { id: 2, title: "می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی" },
    { id: 3, title: "می‌تونی یک عضو، مخصوص تماشای کودک بسازی" },
  ];
  return (
    <div className="slider-wrapper h-[50rem]  ">
      <div className="slider w-full h-full relative">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <div className="gradient1"></div>
          <div className="gradient2"></div>
          <div className="text-box w-full h-full z-10 absolute flex flex-col gap-5  top-[40%] ">
            <div className="text-box1 flex  flex-col gap-5 text-center mb-7">
              <h3 className=" font-IRANSans text-orange-500">
                با فیلیمو بی وقفه فیلم ببین
              </h3>
              <h1 className=" md:text-5xl font-IRANSans md:font-bold text-white">
                کنترل همیشه دست توست!
              </h1>
            </div>

            <div className="text-box2 w-full text-white flex flex-col gap-10 md:flex md:items-center md:mb-6">
              <ul className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center mr-20 text-center">
               {titleJson.map((elem)=>{
                return(
                  <li className="flex justify-center">
                  <a href="#" className="text-white font-IRANSans">
                    {elem.title}
                  </a>
                </li>
                )
               })}
                
              </ul>
            </div>

            <div className="text-box3 w-full flex items-center justify-center flex-col gap-4">
              <button className="bg-[#1CB561]  hover:bg-green-800 transition-all delay-100 ease-linear font-IRANSans font-bold text-white w-72 h-20 p-5 box-border rounded-[10px]">
                خرید و اشتراک تماشا
              </button>
              <p className="font-IRANSans text-white font-normal text-[12px]">
                تخفیف ویژه برای کاربران جدید
              </p>
            </div>
          </div>
          {sliderJson.map((item) => {
            return (
              <SwiperSlide>
                <img src={item.image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
