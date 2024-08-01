import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles1.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import freeImage1 from "../../image/free1.webp";
import freeImage2 from "../../image/free2.webp";
import freeImage3 from "../../image/free3.webp";
import freeImage4 from "../../image/free4.webp";
import freeImage5 from "../../image/free5.webp";
import freeImage6 from "../../image/free6.webp";
import freeImage7 from "../../image/free7.webp";
import freeImage8 from "../../image/free8.webp";
import freeImage9 from "../../image/free9.webp";
import freeImage10 from "../../image/free10.webp";
import freeImage11 from "../../image/free11.webp";
import freeImage12 from "../../image/free12.webp";
import freeImage13 from "../../image/free13.webp";
import freeImage14 from "../../image/free14.webp";
import freeImage15 from "../../image/free15.webp";

const Free = () => {
  let freeJson = [
    { id: 1, image: freeImage1, title: "رایگان" },
    { id: 2, image: freeImage2, title: "رایگان" },
    { id: 3, image: freeImage3, title: "رایگان" },
    { id: 4, image: freeImage4, title: "رایگان" },
    { id: 5, image: freeImage5, title: "رایگان" },
    { id: 6, image: freeImage6, title: "رایگان" },
    { id: 7, image: freeImage7, title: "رایگان" },
    { id: 8, image: freeImage8, title: "رایگان" },
    { id: 9, image: freeImage9, title: "رایگان" },
    { id: 10, image: freeImage10, title: "رایگان" },
    { id: 11, image: freeImage11, title: "رایگان" },
    { id: 12, image: freeImage12, title: "رایگان" },
    { id: 13, image: freeImage13, title: "رایگان" },
    { id: 14, image: freeImage14, title: "رایگان" },
    { id: 15, image: freeImage15, title: "رایگان" },
  ];
  return (
    <div className="free-wrapper w-full h-96 bg-[#151515]">
      <div className="container mx-auto ">
        <div className="free-top px-16 py-5">
          <h2 className="text-white font-IRANSans font-bold">
            محتواهای رایگان
          </h2>
        </div>
        <div className="slider-free px-16 md:px-20 py-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              380: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              568: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
           {freeJson.map((item)=>{
            return(
              <SwiperSlide>
              <div className="relative">
                <a href="#" className=" opacity-70">
                  <img src={item.image} className="  rounded-[10px]" alt="" />
                </a>

                <div className="absolute top-0 right-3">
                  <a
                    href="#"
                    className="text-[#4dab56] text-[10px] bg-[#1d2b1f] rounded-[5px] py-1 px-1"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            )
           })}
    
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Free;
