import AboutMeHeadingSticker from "../../../Assets/Images/AboutMeHeadingSticker.png";
import Button from "../../../Components/Button";
import Download from "../../../Assets/SVG/Icons/Download";

const AboutMeSection = () => {
  return (
    <section className="w-11/12 mx-auto pb-12 pt-16 xs:pb-14 xs:pt-20 md:pb-16 md:pt-24 xl:pb-20 xl:pt-28">
      <div className="w-52 2xs:w-56 sm:w-60 md:w-64 xl:w-72 3xl:w-80 h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 xl:mb-16 mx-auto">
        <img
          src={AboutMeHeadingSticker}
          className="w-full h-auto"
          alt="Section heading sticker"
        />
      </div>
      <div className="w-11/12 max-w-[40rem] mx-auto bg-aboutMeDescriptionSticker bg-center bg-cover p-4 rounded-md flex flex-col space-y-4">
        <p className="text-sm-font text-primary-purple-variation-1 font-medium">
          My journey into web development and design began when the world had
          come to a standstill.
        </p>
        <p className="text-sm-font text-white">
          Yes you guessed it. When the entire world was on lockdown due to the
          COVID-19 pandemic, my journey into the world of programming had begun.
        </p>
        <p className="text-sm-font text-white">
          From the very first time I was able to write a rudimentary program
          that actually worked, I was hooked.
        </p>
        <p className="text-sm-font text-white">
          Since then, with every line of code I write, with every project I
          complete and with every challenge I face along the way, my passion for
          building beautiful, responsive and functional websites and
          applications only keeps growing.
        </p>
        <p className="text-sm-font text-white">
          And to be quite frank, I'm just getting started.
        </p>
      </div>
      <Button className="mx-auto mt-8" icon={<Download />}>
        Download CV
      </Button>
    </section>
  );
};

export default AboutMeSection;
