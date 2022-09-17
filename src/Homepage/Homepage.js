import FloatingNavBar from "../Components/NavBar/FloatingNavBar/FloatingNavBar";

import HeroSection from "./Sections/HeroSection/HeroSection";

const Homepage = () => {
  return (
    <div className="bg-red-200">
      <FloatingNavBar />
      <div className="max-w-screen-3xl mx-auto">
        <HeroSection />
      </div>
    </div>
  );
};

export default Homepage;
