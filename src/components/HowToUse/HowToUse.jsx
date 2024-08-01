import deviceImage from "../../image/TV.webp";
import deviceImage1 from "../../image/androidTV.webp";
import Tv from "../../image/TVBG.webp";
const HowToUse = () => {
  let howtoJson = [
    {
      id: 1,
      title: "تلویزیون",
      image: deviceImage,
      description:
        "Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung",
    },
    {
      id: 2,
      title: "اندروید تی‌وی",
      image: deviceImage1,
      description:
        "NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom",
    },
  ];
  return (
    <div className="howtouse-wrapper bg-black w-full h-auto p-[70px] md:flex md:justify-center md:gap-10">
      <div className="container flex flex-col items-center justify-center md:flex-row">
        <div className="howtouse-right w-full md:w-[50%] flex flex-col gap-10">
          <h3 className="title font-IRANSans text-white font-bold text-xl">
            چطور با تلویزیون، فیلیمو تماشا کنم؟
          </h3>
          <p className="description font-IRANSans text-white text-xs font-[11px] leading-[22px] max-w-[400px] text-right">
            ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
            فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید
            از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار
            است را انتخاب کنید.
          </p>
          <div className="device flex flex-col gap-5">
            {howtoJson.map((item)=>{
              return(
                <>
                 <div className="device-left flex gap-3">
              <img src={item.image} className="w-7" alt="" />
              <h2 className="font-IRANSans text-white font-bold">{item.title}</h2>
            </div>
            <div className="device-left-1 flex flex-col gap-3">
              <p className="font-IRANSans text-[#a1a1a1] text-xs">
                {item.description}
              </p>
            </div>
                </>
               
              )
            })}
          
            <button className="text-[#151515] bg-[#d0d0d0] h-12 w-[20rem]  rounded-[10px] font-IRANSans leading-5 hover:bg-[#e3e3e3] transition-all delay-75 ease-linear">
              ویدیوهای آموزشی تماشا با تلویزیون
            </button>
          </div>
        </div>
        <div className="howToUse-left w-full mt-10 md:w-[50%]">
          <img src={Tv} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
