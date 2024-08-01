import footer from "../../image/footer.webp";
const Footer = () => {
  let footerJson = [
    { id: 1, description: "هزاران فیلم و سریال خارجی (دوبله و زیرنویس)" },
    { id: 2, description: "هزاران انیمیشن و کارتون برای کودکان" },
    { id: 3, description: "پشتیبانی 24 ساعته برای راهنمایی شما" },
  ];
  return (
    <div className="footer-wrapper ps-relative w-full h-[100%] pt-20">
      <div className="container mx-auto">
        <div className="w-full bg-footer footer-overly"></div>
        <div className="footer-top flex justify-center">
          <img src={footer} alt="" />
        </div>
        <div className="footer-midd w-full h-[50%] flex md:flex-row flex-col gap-5 items-center justify-around pt-20 text-white">
          {footerJson.map((item) => {
            return <h4 className="">{item.description}</h4>;
          })}
        </div>

        <div className="footer-bottom pt-20 flex justify-center pb-20 ">
          <button className="hover:bg-green-700 transition-all delay-100 ease-linear  bg-[#1cb561]   font-IRANSans font-bold text-white w-80 h-14 p-5 box-border rounded-[10px] cursor-pointer">
            خرید و اشتراک تماشا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
