import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles3.css";
// import required modules
// import { Pagination } from "swiper/modules";
import comment1 from "../../image/comment1.webp";
import comment2 from "../../image/virgol.webp";
// import required modules
const Comments = () => {
  let commentJson = [
    {
      id: 1,
      image1: comment1,
      image2: comment2,
      title: "aref",
      description: "خیلی برنامه خوبی هست و خیلی سریال متنوع داره",
    },
    {
      id: 2,
      image1: comment1,
      image2: comment2,
      title: "ستایش",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    {
      id: 3,
      image1: comment1,
      image2: comment2,
      title: "صبا",
      description: "فیلیمو عالی من از فیلیمو رازی هستم❤❤😍🤩😘❤🍓",
    },
    {
      id: 4,
      image1: comment1,
      image2: comment2,
      title: "آوا",
      description: "اقعا عالیه.😚 خیلی برنامه عالیه😻😻 من ۵ سال این برنانه رودارم...🌹",
    },
    {
      id: 5,
      image1: comment1,
      image2: comment2,
      title: "ستایش",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    {
      id: 6,
      image1: comment1,
      image2: comment2,
      title: "helia",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    
    {
      id: 7,
      image1: comment1,
      image2: comment2,
      title: "mohammad",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    
    {
      id: 8,
      image1: comment1,
      image2: comment2,
      title: "hesam",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    
    {
      id: 9,
      image1: comment1,
      image2: comment2,
      title: "علی",
      description:
        "  یعنی حرف نداره فقط کافیه اشتراک شو فعال کنی میتونی کل فیلم و سریال هارو رایگان تماشا کنی",
    },
    
  ];
  return (
    <div className="comments-wrapper w-full h-[25rem] mx-auto bg-[#151515]">
      <div className=" container mx-auto">
        <div className="comments-top px-20 pt-20">
          <h3 className="text-white font-bold text-xl">
            نظرات کاربران بعد از تماشای فیلیمو
          </h3>
        </div>
        <div className="slider-comment pt-20 px-10">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[]}
            className="mySwiper"
          >
           {commentJson.map((elem)=>{
            return(
              <SwiperSlide>
              <div className="box border w-full h-40 rounded-[12px] p-5 shadow">
                <div className="feedback w-full flex items-center flex-row justify-between">
                  <div className="h-5 gap-2 flex items-center pr-[10px]">
                    <img src={elem.image1} className="" alt="" />
                    <h6 className="text-white text-sm">{elem.title}</h6>
                  </div>
                  <div className="">
                    <img src={elem.image2} className="" alt="" />
                  </div>
                </div>
                <div className="w-full mt-4 md:px-5 md:mt-[1rem]">
                  <p className="text-white text-xs text-right">
                    {elem.description}
                  </p>
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

export default Comments;
