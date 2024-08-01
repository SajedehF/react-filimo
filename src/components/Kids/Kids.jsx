import kids from "../../image/bg-kids.webp";
const Kids = () => {
  let kidsJson=[
    {id:1,description:"فیلیمو کودک بساز"},
    {id:2,description:"تماشای فیلیمو کودک"},
  ]
  return (
    <div className="kids-wrapper w-full md:h-[100%]  flex justify-center relative">
      <div className="kids-section-gradient kidsgradient d-overlay"></div>
      <div className="container flex  py-10">
        <div className="kids-inner-wrapper mx-auto py-5 md:px-40 gap-10 flex items-center flex-col md:flex-row  md:justify-center md:items-center">
          <div className="kidsRight md:w-[50%]">
            <img src={kids} className="w-[34rem]" alt="" />
          </div>
          <div className="kidsLeft md:w-[50%] flex flex-col  gap-[25px] md:pt-10">
            <h3 className="text-white font-IRANSans font-bold">
              دنیایی متنوع از فیلم و کارتون‌های کودکانه
            </h3>
            <p className="font-IRANSans text-white text-sm md:w-[90%] h-full leading-8 opacity-[0.5] flex flex-col gap-5">
              ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک
              فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را
              ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
            </p>
            <div className="kids-btn flex justify-start gap-5 ">
             {kidsJson.map((elem)=>{
              return(
                <button className="btn1 w-44 px-5 py-2 rounded-[15px] font-IRANSans bg-white text-black font-bold text-sm">
                {elem.description}
              </button>
              )
             })}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
