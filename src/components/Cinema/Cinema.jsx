import ekranImage1 from "../../image/ekran1.webp";
import ekranImage2 from "../../image/ekran2.webp";
import ekranImage3 from "../../image/ekran3.webp";
import ekranImage4 from "../../image/ekran4.webp";

const Cinema = () => {
  let cinematitleJson = [
    { id: 1, title: "فیلم‌های روز سینمای ایران" },
    { id: 2, title: "۸ ساعت زمان برای مشاهده فیلم در هر کجا" },
    { id: 3, title: "خرید یک بلیت برای تماشا همراه با همه خانواده" },
  ];
  let cinemaJson = [
    {
      id: 1,
      name: "پالتو شتری",
      description: "کارگردان:مهدی علی میرزایی",
      link1: "درام",
      link2: "خانوادگی",
      button: "خرید بلیت",
      image: ekranImage1,
      title:"اکران آنلاین"
    },
    {
      id: 2,
      name: "بی بدن",
      description: "کارگردان:  ",
      link1: "درام",
      link2: "جنایی",
      button: "خرید بلیت",
      image: ekranImage2,
      title:"اکران آنلاین"
    },
    {
      id: 3,
      name: "ستون 14",
      description: "کارگردان:مهدی علی میرزایی",
      link1: "درام",
      link2: "خانوادگی",
      button: "خرید بلیت",
      image: ekranImage3,
      title:"اکران آنلاین"
    },
    {
      id: 4,
      name: "پالایشگاه ",
      description: "کارگردان:مهدی علی میرزایی",
      link1: "درام",
      link2: "خانوادگی",
      button: "خرید بلیت",
      image: ekranImage4,
      title:"اکران آنلاین"
    },
  ];
  return (
    <div className="cinema-wrapper w-full h-auto ">
      <div className="bgimg bg-cinema flex flex-col pt-32">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="cinema-top text-white pt-5 text-center font-bold text-xl">
            <h3>سینما آنلاین فیلیمو</h3>
          </div>
          <div className="cinemaTop-two gap-12 text-center md:flex md:justify-center md:gap-[8rem] pt-10 items-center text-white">
            {cinematitleJson.map((el) => {
              return <h5 className="">{el.title}</h5>;
            })}
          </div>
          <div className="cinemaBottom flex justify-center gap-10 items-center flex-wrap md:p-20">
            {cinemaJson.map((element)=>{
              return(
                <div className="cinema-bottom  ps-relative">
              <div className="online-box flex justify-between">
                <img src={element.image} className="rounded-[10px]" alt="" />
                <p className="text-white text-sm">{element.title}</p>
              </div>
              <div className="mid flex flex-col gap-5 absolute top-[20px] right-[40%]">
                <h4 className="text-white">{element.name}</h4>
                <p className="text-white opacity-[0.5] text-sm">
                  {element.description}
                </p>
                <div className="flex gap-3 mt-3">
                  <a
                    href="#"
                    className="text-xs bg-[#282828] py-1 px-4 rounded-lg text-white"
                  >
                    {element.link1}
                  </a>
                  <a
                    href="#"
                    className="text-xs bg-[#282828] py-1 px-4 rounded-lg text-white"
                  >
                    {element.link2}
                  </a>
                </div>
                <div className="button-box">
                  <a
                    href="#"
                    className="text-white border px-2 py-[0.5rem] rounded-[5px] text-sm hover:bg-[#151515] transition-all delay-75 ease-linear"
                  >
                    {element.button}
                  </a>
                </div>
              </div>
            </div>
              )
            })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinema;
