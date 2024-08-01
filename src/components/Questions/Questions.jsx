const Questions = () => {
  let click = () => {
    document.querySelector(".question-box1").style.width = "75%";
    document.querySelector(".question-box1").style.height = "100px";
  };
  return (
    <div className="questions w-full h-auto bg-[#101010] py-[60px]">
      <div className="container mx-auto">
        <div className="questions-top">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="text-white">سوالات متدوال</h5>
            <p className="text-white opacity-[0.5]">
              سوال شایع دیگر کاربران شاید برای شما پیش امده باشد
            </p>
          </div>
        </div>

        <div className="questions-bottom flex flex-col gap-5 pt-20 h-auto mx-auto question-shadow">
          <div
            className="question-box1 bg-[#171717] box-border rounded-[12px] mx-auto h-[50px] px-5 w-[85%] md:w-[75%]"
            onClick={click}
          >
            <div className="flex flex-row items-end justify-between pt-4 pr-4">
              <h6 className="text-white text-right text-xs md:text-sm md:font-bold">
                آیا میتوانم فیلم های موجود در فیلیمو رو دانلود کنم؟
              </h6>
              <span className="fill flex">
                <a href="#" onClick={click} className="text-yellow-500">
                  +
                </a>
              </span>
            </div>
          </div>
          <div className="question-box1 bg-[#171717] box-border question-shadow rounded-[12px] mx-auto h-[50px] px-5 w-[85%] md:w-[75%]">
            <div className="flex flex-row items-end justify-between pt-4 pr-4">
              <h6 className="text-white text-right text-xs md:text-sm md:font-bold">
                آیا فیلیمو برای خارج از ایران در دسترس است؟
              </h6>
              
              <span className="fill flex">
                <a href="#" className="text-yellow-500">
                  +
                </a>
              </span>
            </div>
          </div>
          <div className="question-box1 bg-[#171717] box-border question-shadow rounded-[12px] mx-auto h-[50px] px-5 w-[85%] md:w-[75%]">
            <div className="flex flex-row items-end justify-between pt-4 pr-4">
              <h6 className="text-white text-right text-xs md:text-sm md:font-bold">
                آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟
              </h6>
              <span className="fill flex">
                <a href="#" className="text-yellow-500">
                  +
                </a>
              </span>
            </div>
          </div>
          <div className="question-box1 bg-[#171717] box-border question-shadow rounded-[12px] mx-auto h-[50px] px-5 w-[85%] md:w-[75%]">
            <div className="flex flex-row items-end justify-between pt-4 pr-4">
              <h6 className="text-white text-right text-xs md:text-sm md:font-bold">
                از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟
              </h6>
              <span className="fill flex">
                <a href="#" className="text-yellow-500">
                  +
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
