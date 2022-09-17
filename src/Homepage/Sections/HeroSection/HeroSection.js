import HeroSectionNavBar from "../../../Components/NavBar/HeroSectionNavBar/HeroSectionNavBar";
import SmallScreenHeroSection from "./SmallScreenHeroSection/SmallScreenHeroSection";
// import LargeScreenHeroSection from "./LargeScreenHeroSection/LargeScreenHeroSection";

const HeroSection = () => {
  return (
    <section className="bg-heroSectionBgImg">
      <HeroSectionNavBar />
      <SmallScreenHeroSection />
      {/* <LargeScreenHeroSection /> */}
    </section>
  );
};

export default HeroSection;
