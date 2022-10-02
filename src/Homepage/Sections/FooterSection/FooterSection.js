import React from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-footer-purple">
      <div className="w-9/12 flex flex-col gap-y-2 mx-auto py-10">
        <p className="text-center text-xsm-font text-text-white">
          Thank You for having a look at my Portfolio
        </p>
        <p className="text-center text-xsm-font text-text-white">
          {`Designed and Developed by ADNAN HAIDER © ${currentYear}`}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
