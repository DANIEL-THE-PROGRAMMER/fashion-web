import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

export const NavBar = () => {
  return (
    <Container>
      <div className="pt-[46px] pb-[56px] flex justify-between items-center">
        <div className="relative w-[237px] h-[60px]">
          <Image
            src="/assets/logonav.png"
            alt="logo"
            fill={true}
            sizes="100%"
          />
        </div>
        <div className="">
          <ul className="text-black2 font-poppins text-[22px] font-medium tracking-[0.22px] flex gap-[65px] items-center">
            <li className="">
              <Link href="/">CATALOGUE</Link>
            </li>
            <li className="">
              <Link href="/">FASHION</Link>
            </li>
            <li className="">
              <Link href="/">FAVOURITE</Link>
            </li>
            <li className="">
              <Link href="/">LIFESTYLE</Link>
            </li>
            <li>
              <Link
                className="bg-black text-white  min-h-[63px] px-[22px] flex justify-center items-center rounded-[7px]"
                href="/"
              >
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
