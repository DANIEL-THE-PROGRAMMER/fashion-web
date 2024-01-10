import { HeroSection } from "./components/section/herosection";
import { NewArrivals } from "./components/section/newarrivals/newarrivals";
import { PayDay } from "./components/section/payday/payday";
import { Favourite } from "./components/section/favourite";
import { Download } from "./components/section/download";
import { NewsLetter } from "./components/section/newletter";
import { Footer } from "./components/footer";

export default function Index() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <PayDay />
      <Favourite />
      <Download />
      <NewsLetter />
      <Footer />
    </>
  );
}
