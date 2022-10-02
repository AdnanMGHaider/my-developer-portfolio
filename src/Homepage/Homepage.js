import { useState } from "react";
import FloatingNavBar from "../Components/NavBar/FloatingNavBar/FloatingNavBar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import HeroSectionTearEffect from "../Assets/Images/HeroSectionTearEffect.png";
import AboutMeSection from "./Sections/AboutMeSection/AboutMeSection";
import ProjectsSection from "./Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./Sections/SkillsSection/SkillsSection";
import ContactMeSection from "./Sections/ContactMeSection/ContactMeSection";
import FooterSection from "./Sections/FooterSection/FooterSection";
import { motion } from "framer-motion";

const Homepage = () => {
  const [mobileNavBarIsOpen, setMobileNavBarIsOpen] = useState(false);

  function toggleMobileNavBar() {
    setMobileNavBarIsOpen(!mobileNavBarIsOpen);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background-purple"
    >
      <FloatingNavBar
        toggle={toggleMobileNavBar}
        mobileNavBarIsOpen={mobileNavBarIsOpen}
      />
      <div className="max-w-screen-3xl mx-auto bg-wallBgImg bg-repeat-y bg-center">
        <HeroSection
          toggle={toggleMobileNavBar}
          mobileNavBarIsOpen={mobileNavBarIsOpen}
        />
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
    </motion.div>
  );
};

export default Homepage;
