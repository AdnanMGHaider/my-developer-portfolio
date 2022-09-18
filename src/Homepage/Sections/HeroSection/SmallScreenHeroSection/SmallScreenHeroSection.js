import MyImage from "../../../../Assets/Images/MyImage.png";
import Button from "../../../../Components/Button";
import ContactMe from "../../../../Assets/SVG/Icons/ContactMe";

const SmallScreenHeroSection = () => {
  return (
    <div className="md:hidden w-11/12 mx-auto pt-4 pb-8 sm:pt-6 sm:pb-10">
      <h3 className="text-sm-font text-center 2xs:text-base-font">
        Hello and Welcome!
        <br />
        My name is
      </h3>
      <h1 className="font-display text-center text-primary-purple tracking-wide text-4xl 2xs:text-5xl sm:text-6xl">
        Adnan Haider
      </h1>
      <div className="rounded-full overflow-hidden w-3/4 mx-auto max-w-[18rem] my-8 xs:my-10 sm:my-12">
        <img src={MyImage} className="w-full h-full" alt="Me" />
      </div>
      <h3 className="text-sm-font text-center 2xs:text-base-font">I'm a</h3>
      <h2 className="font-display text-center text-primary-purple tracking-wide text-[1.375rem] 2xs:text-3xl sm:text-4xl sm:leading-[3rem]">
        Front-End Developer
        <br />&<br />
        Web Designer
      </h2>
      <p className="text-sm-font text-center my-8 2xs:text-base-font xs:my-10 sm:my-12">
        I enjoy crafting aesthetically pleasing, responsive and functional
        Websites and Applications
      </p>
      <Button className="mx-auto" icon={<ContactMe />}>
        Get in touch
      </Button>
    </div>
  );
};

export default SmallScreenHeroSection;
