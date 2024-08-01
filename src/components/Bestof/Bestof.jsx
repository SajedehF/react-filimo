import seriesImage1 from "../../image/series1.webp";
import seriesImage2 from "../../image/series2.webp";
import seriesImage3 from "../../image/series3.webp";
import seriesImage4 from "../../image/series4.webp";
import seriesImage5 from "../../image/series5.webp";
import seriesImage6 from "../../image/series6.webp";
import moviesImage1 from "../../image/movie1.webp";
import moviesImage2 from "../../image/movie2.webp";
import moviesImage3 from "../../image/movie3.webp";
import moviesImage4 from "../../image/movie4.webp";
import moviesImage5 from "../../image/movie5.webp";
import moviesImage6 from "../../image/movie6.webp";
import bestofLogo from "../../image/bestoflogo.webp";
import bestofImage from "../../image/bestofimg.webp";
import { useState } from "react";

const Bestof = () => {
  const [showList, setShowList] = useState("movies");

  const showListHandler = (listName) => {
    setShowList(listName);
  };
  let seriesJson=[
    {id:1,image:seriesImage1},
    {id:1,image:seriesImage2},
    {id:1,image:seriesImage3},
    {id:1,image:seriesImage4},
    {id:1,image:seriesImage5},
    {id:1,image:seriesImage6},
  ]
  let moviesJson=[
    {id:1,image:moviesImage1},
    {id:2,image:moviesImage2},
    {id:3,image:moviesImage3},
    {id:4,image:moviesImage4},
    {id:5,image:moviesImage5},
    {id:6,image:moviesImage6},
  ]

  return (
    <div className="bestof-wrapper bg-[#151515] w-full h-fit pb-8">
      <div className=" container mx-auto">
        <div className="bestof-top  h-full w-[50%]">
          <div className="w-full title text-white md:w-[50%] h-full flex   gap-5 items-center mr-20">
            <h3 className="font-bold">محبوب ترین های فیلیمو</h3>
            <div className="switch flex gap-4 px-2 py-1 border rounded-[20px]">
              <button
                className="text-white font-IRANSans bg-[#2b2b2b] px-2 rounded-[10px] font-bold text-[12px]"
                onClick={() => showListHandler("series")}
              >
                سریال
              </button>
              <button
                onClick={() => showListHandler("movies")}
                className="text-white font-IRANSans font-bold text-[12px]"
              >
                فیلم
              </button>
            </div>
          </div>
        </div>
        {showList === "series" ? (
          <div className="bestof-list-series  h-full md:justify-between items-center flex   md:flex-nowrap   mt-10 mx-20 ">
            {seriesJson.map((item)=>{
              return(
                <div className="series ">
              <a
                href="#"
                className="opacity-50 hover:opacity-85 transition-all delay-75 ease-linear"
              >
                <img src={item.image} className="rounded-[10px]" alt="" />
              </a>
            </div>
              )
            })}
          
          </div>
        ) : (
          ""
        )}

        {showList === "movies" ? (
          <div className=" bestof-list-movie h-full justify-between items-center flex mt-10 mx-20">
            {moviesJson.map((elem)=>{
              return(
                <div className="movie ">
              <a
                href="#"
                className="opacity-50 hover:opacity-85 transition-all delay-75 ease-linear"
              >
                <img src={elem.image} className="rounded-[10px]" alt="" />
              </a>
            </div>
              )
            })}
          
          </div>
        ) : (
          ""
        )}
        <div className="bestOf-bottom w-full">
          <section className="movie-section h-[30rem]  mt-24">
            <div className="movie-gradient bg-overlay"></div>
            <div className="movie-gradient2 bg-overlay"></div>
            <div className="movie-detail relative h-full z-10 p-10 justify-between">
              <div className="flex flex-col text-white mr-14">
                <h1 className="font-bold text-2xl font-IRANSans">گل یا پوچ</h1>
                <p className="mt-6 font-IRANSans">کارگردان : نیک یوسفی</p>
                <p className="flex gap-3 mt-3">
                  <a
                    href="#"
                    className="text-xs bg-[#282828] py-1 px-4 rounded-lg"
                  >
                    ربیلیتی شو
                  </a>
                  <a
                    href="#"
                    className="text-xs bg-[#282828] py-1 px-4 rounded-lg"
                  >
                    کمدی
                  </a>
                </p>
                <p className="text-sm mt-3 font-medium font-IRANSans">
                  اگه یک قدمی شکست هم بودی، لبخند بزن تا حریفت به پیروزیش شک
                  کنه!
                </p>
              </div>
              <div className="logo float-left max-w-[15rem] relative md:-translate-y-36 -translate-y-60">
                <img src={bestofLogo} alt="" />
              </div>
              <div className="movie-slider-wrapper w-[100%] py-14 mx-auto">
                <div className="bottom-wrapper md:flex-row flex justify-start items-center gap-5">
                  <div className="w-full md:w-72 blurimg mr-14">
                    <img
                      src={bestofImage}
                      className="rounded-[15px] w-[100%] cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bestof;
