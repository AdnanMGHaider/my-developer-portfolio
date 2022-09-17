import MyImage from "../../../../Assets/Images/MyImage.png";

const SmallScreenHeroSection = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h3 className="text-base-font text-center">
          Hello and Welcome!
          <br />
          My name is
        </h3>
        <h1 className="font-display text-center text-primary-purple text-4xl">
          Adnan Haider
        </h1>
        <div className="rounded-full overflow-hidden w-3/4 mx-auto max-w-[18rem]">
          <img src={MyImage} className="w-full h-full" alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenHeroSection;
