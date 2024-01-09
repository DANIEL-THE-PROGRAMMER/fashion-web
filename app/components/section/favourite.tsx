import { ArrivalCard } from "./newarrivals/components/arrivalscard";
import { Container } from "../container";

export const Favourite = () => {
  return (
    <Container>
    <div className="pt-[190px] pb-[220px]">
      <div className="text-black text-[48px] font-extrabold font-poppins leading-[50px] tracking-[2.88px] mb-[118px] relative min-h-[41px] inline-block">
        <span className="z-10 relative">Young’s Favourite</span>
        <span className="absolute right-0 -bottom-[5px] z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="35"
            viewBox="0 0 186 35"
            fill="none"
          >
            <path
              d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
              fill="#EBD96B"
            />
          </svg>
        </span>
      </div>
      <div className="flex gap-[48px]">
        <ArrivalCard image="/assets/s (7).png" name="Trending on instagram" height={575} />
        <ArrivalCard image="/assets/s (6).png" name="All Under $40" height={575} />
      </div>
    </div>
    </Container>
  );
};