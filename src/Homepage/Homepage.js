import FloatingNavBar from "../Components/NavBar/FloatingNavBar/FloatingNavBar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import HeroSectionTearEffect from "../Assets/Images/HeroSectionTearEffect.png";
import AboutMeSection from "./Sections/AboutMeSection/AboutMeSection";
import ProjectsSection from "./Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./Sections/SkillsSection/SkillsSection";
import ContactMeSection from "./Sections/ContactMeSection/ContactMeSection";
import FooterSection from "./Sections/FooterSection/FooterSection";

const Homepage = () => {
  return (
    <div className="bg-red-200">
      <FloatingNavBar />
      <div className="max-w-screen-3xl mx-auto bg-wallBgImg bg-repeat-y bg-center">
        <HeroSection />
        <div className="w-full h-auto">
          <img
            src={HeroSectionTearEffect}
            className="w-full h-auto"
            alt="Design Element"
          />
        </div>
        <AboutMeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactMeSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Homepage;
