export const NewsLetter = () => {
  return (
    <div className="bg-[#E5C643;] pt-[141px] pb-[156px] flex items-center flex-col mt-[206px]">
      <div className="text-white text-[46px] md:text-[55px] w-full md:w-[966px] font-extrabold tracking-[1.65px] text-center font-poppins leading-[70px]">
        <span>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</span>
      </div>
      <div className="text-white2 text-[32px] tracking-[0.95px] font-poppins leading-[35px] mt-[37px] mb-[49px] text-center">
        <span>Type your email down below and be young wild generation</span>
      </div>
      <form>
        <div className="py-[10px] rounded-[10px] bg-white md:w-[574px] flex pr-[10px]">
          <input
            type="text"
            placeholder="Add your email here"
            className="text-gray2 font-poppins border-none outline-none flex grow pl-[27px]"
          />
          <button className="min-h-[67px] px-[12px] md:px-[38px] bg-black text-white outline-none border-none text-[24px] md:text-[33px] leading-[35px] rounded-[8px] tracking-[0.99px]">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
