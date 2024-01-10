import Link from "next/link";
import { Container } from "../container";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="">
      <Container>
        <div className="bg-blue2 rounded-[59px] flex flex-col  md:flex-row md:pr-[81px]">
          <div className="grow">
            <div className="pt-[77px] md:pl-[94px] pb-[40px] text-black text-[46px] md:text-[96px] font-extrabold font-poppins leading-[120px]">
              <div className=" max-w-[464px] h-[112px] flex relative items-center">
                <div className="absolute w-full h-full bg-white rotate-[-2deg]"></div>
                <span className="h-[100%] relative z-10 flex items-center pl-[26px]">
                  LET'S
                </span>
              </div>
              <div className="">
                <span className="pl-[26px]">EXPLORE</span>
              </div>
              <div className="flex rotate-[117.55px] items-center max-w-[495px] min-h-[117px] relative">
                <div className="absolute w-full h-full bg-yellow2 rotate-[-2deg]"></div>
                <span className="h-[100%] relative z-10 flex items-center pl-[26px]">
                  UNIQUE
                </span>
              </div>
              <div className="">
                <span className="pl-[26px]">CLOTHES.</span>
              </div>
            </div>
            <div className="md:pl-[119px] text-black2 font-poppins md:text-[32px] text-[24px] tracking-[-1.6px]">
              <span>Live for Influential and Innovative fashion!</span>
            </div>
            <div className="flex flex-col md:flex-row pb-[90px] pt-[32px] gap-[24px] items-center md:pl-[119px] ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="32"
                  viewBox="0 0 190 32"
                  fill="none"
                >
                  <path
                    d="M0 30.6152C48 -11.7848 146.667 -1.05149 190 9.61518C176.4 33.6152 57.6667 33.6152 0 30.6152Z"
                    fill="#EBD96B"
                  />
                </svg>
              </div>
              <Link
                href="/"
                className="min-h-[82px] flex items-center font-poppins font-medium text-[24px] md:text-[38px] bg-black text-white px-[40px] rounded-[10px]"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="max-w-[871px] md:pt-[68px]">
            <div className="h-full relative">
              <Image
                alt="heroimage"
                sizes="100%"
                src="/assets/heroimage.png"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-yellow2 min-h-[186px] mt-[63px] flex items-center ">
        <div className="mx-auto w-[1577px] justify-between flex flex-wrap flex-col items-center md:flex-row  gap-y-[40px] md:py-0 py-[40px]">
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/hm.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/obey.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/shopify.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/lacoste.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/levis.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[163px] h-[63px] relative">
            <Image
              src="/assets/amazon.png"
              alt=""
              sizes="100%"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
