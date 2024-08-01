import accessImage from "../../image/access.webp";
import accessIcon1 from "../../image/access1.webp";
import accessIcon2 from "../../image/access2.webp";
import accessIcon3 from "../../image/access3.webp";
const Access = () => {
  let deviceJson = [
    {
      id: 1,
      title: "کامپیوتر و لپ‌تاپ",
      image: accessIcon1,
      description: "windows PC - MacOS - Chorom OS",
    },
    {
      id: 2,
      title: "موبایل و تبلت",
      image: accessIcon2,
      description:
        "Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets",
    },
    {
      id: 3,
      title: "کنسول‌های بازی (Browser)",
      image: accessIcon3,
      description: "Xbox Series S - Xbox Seris X - PS5 - PS4",
    },
  ];

  return (
    <div className="access-wrapper w-full h-auto p-[60px] md:flex md:justify-center md:gap-10 bg-[#151515]">
      <div className="container flex flex-col md:flex-row gap-32">
        <div className="access-right">
          <img src={accessImage} alt="" />
        </div>
        <div className="access-left flex flex-col gap-10">
          <h3 className="title font-IRANSans text-white font-bold text-xl">
            تماشای فیلیمو با همه دستگاه‌ها
          </h3>
          <p className="description font-IRANSans text-white text-sm">
            می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
            تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
          </p>
          <div className="device flex flex-col gap-5">
            {deviceJson.map((elem) => {
              return (
                <>
                  <div className="device-left flex gap-3">
                    <img src={accessIcon1} alt="" />
                    <h2 className="font-IRANSans text-white font-bold">
                      کامپیوتر و لپ‌تاپ
                    </h2>
                  </div>
                  <div className="device-left-1 flex flex-col gap-3">
                    <p className="font-IRANSans text-[#a1a1a1] text-xs">
                      windows PC - MacOS - Chorom OS
                    </p>
                  </div>
                </>
              );
            })}

            <button className="text-white hover:bg-green-800 transition-all delay-100 ease-linear bg-[#1CB561] h-10 w-52 rounded-[10px] font-IRANSans">
              خرید اشتراک و تماشا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
