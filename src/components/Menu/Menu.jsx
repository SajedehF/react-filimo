import Icon from "../../image/fa-filimo-dark-logo.svg";
const Menu = () => {
  let menuJson = [
    { id: 1, title: "فیلیموتور" },
    { id: 2, title: "فیلیمومدرسه" },
    { id: 3, title: "جستجو" },
  ];
  return (
    <div className="menu-wrapper bg-[#040404] w-full h-16 fixed top-0 z-10">
      <div className=" container flex mx-auto px-4 h-full items-center justify-between ">
        <div className="right text-white flex items-center gap-4 mr-20">
          <img src={Icon} className="w-24 flex items-center md:ml-8" alt="" />
          <ul className="hidden md:w-[50%] md:h-[60px] md:flex md:gap-6 md:items-center  ">
            {menuJson.map((item) => {
              return (
                <li key={item.id} className="">
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-all delay-100 ease-linear text-[12px] "
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="left w-[50%] h-full text-white flex justify-end gap-3 items-center sm:px-20">
          <div className="btn1 ">
            <a
              href="#"
              className=" px-4 py-2 bg-[#1cb561] rounded-[5px] text-[12px] hover:bg-green-700 transition-all delay-100 ease-linear text-nowrap"
            >
              خرید اشتراک
            </a>
          </div>
          <div className="btn2">
            <a
              href="#"
              className="px-4 py-2  rounded-[5px] text-[12px] hover:bg-gray-500"
              style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}
            >
              ورود
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
