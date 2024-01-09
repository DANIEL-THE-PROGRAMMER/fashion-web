import Image from "next/image";

export const ArrivalCard = ({
  name,
  image,
  height
}: {
  name: string;
  image: string;
  height?: string | number
}) => {
  return (
    <div className="grow basis-[484px]">
      <div className="h-[784px] relative" style={{ height: height }}>
        <Image className="rounded-[20px]"  src={`${image}`} alt="" sizes="100%" fill={true} />
      </div>
      <div className="mt-[28px] flex items-center justify-between">
        <div className="">
          <div className="text-[32px] font-poppins font-medium leading-[50px] tracking-[-1.28px]">
            <span>{name}</span>
          </div>
          <div className="text-gray2 font-poppins text-[24px] leading-[50px] font-medium tracking-[-0.96px]">
            <span>Explore Now!</span>
          </div>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
          >
            <path
              d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z"
              fill="#797979"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
