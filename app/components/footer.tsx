import { Container } from "./container";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="pt-[125px] pb-[147px] flex justify-between">
          <div className="flex flex-col gap-y-[32px]">
            <div className="font-poppins text-[40px] font-extrabold tracking-[1.2px] text-white">
              <span>FASHION</span>
            </div>
            <div className="font-poppins text-[24px] tracking-[0.48px] leading-[40px] w-[415px] text-[#8E8E8E]">
              <span>Complete your style with awesome clothes from us.</span>
            </div>
            <div className="flex gap-[14px]">
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  sizes="100%"
                  fill={true}
                />
              </div>
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="/assets/instagram.png"
                  alt="instagram"
                  sizes="100%"
                  fill={true}
                />
              </div>
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="/assets/twitter.png"
                  alt="twitter"
                  sizes="100%"
                  fill={true}
                />
              </div>
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  sizes="100%"
                  fill={true}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-[188px]">
            <div className="flex flex-col gap-y-[32px]">
              <div className="text-[#D9D9D9] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Company</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>About</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Contact us</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Support</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Careers</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-[32px]">
              <div className="text-[#D9D9D9] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Quick Link</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Share Location</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Orders Tracking</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Size Guide</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>FAQs</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-[32px]">
              <div className="text-[#D9D9D9] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Legal</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Terms & conditions</span>
              </div>
              <div className="text-[#8E8E8E] text-[24px] leading-[40px] tracking-[0.48px]">
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
