import HeroSectionNavBar from "../../../Components/NavBar/HeroSectionNavBar/HeroSectionNavBar";
import SideNavBar from "../../../Components/NavBar/SideNavBar/SideNavBar";
import SmallScreenHeroSection from "./SmallScreenHeroSection/SmallScreenHeroSection";
import LargeScreenHeroSection from "./LargeScreenHeroSection/LargeScreenHeroSection";

const HeroSection = ({ toggle, mobileNavBarIsOpen }) => {
  return (
    <section
      id="topOfPage"
      className="bg-heroSectionBgImg bg-cover bg-center relative overflow-x-hidden"
    >
      <div className="absolute w-[20%] h-[15%] md:h-[30%] right-[10%] top-[20%] md:-top-[5%] rounded-full lilac__glow" />
      <HeroSectionNavBar toggle={toggle} />
      <SideNavBar toggle={toggle} mobileNavBarIsOpen={mobileNavBarIsOpen} />
      <SmallScreenHeroSection />
      <LargeScreenHeroSection />
      <div className="absolute w-[25%] md:w-[20%] h-[25%] md:h-[20%] left-[-10%] bottom-[30%] md:bottom-[50%] rounded-full orange__glow" />
    </section>
  );
};

export default HeroSection;
