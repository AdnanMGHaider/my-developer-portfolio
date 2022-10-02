import FooterSectionTearEffect from "../../../Assets/Images/FooterSectionTearEffect.png";
import EndSticker from "../../../Assets/Images/EndSticker.png";
import ContactMeHeadingSticker from "../../../Assets/Images/ContactMeHeadingSticker.png";
import ContactMeForm from "./ContactMeForm/ContactMeForm";
import { motion } from "framer-motion";

const ContactMeSection = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto py-16 xs:py-20 md:py-24 xl:py-28">
        <div className="w-56 2xs:w-60 sm:w-72 md:w-80 xl:w-96 3xl:w-[26rem] h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 xl:mb-16 mx-auto">
          <img
            src={ContactMeHeadingSticker}
            className="w-full h-auto"
            alt="Section heading sticker"
          />
        </div>
        <div className="w-11/12 mx-auto">
          <h3 className="text-center text-base-font xs:text-lg-font xmd:text-xl-font font-medium text-primary-purple-variation-1 mb-6 2xs:mb-8 xs:mb-10 sm:mb-12 xl:mb-14">
            Feel free to drop me a message
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-[40rem] mx-auto bg-contactMeFormSticker bg-center bg-cover p-4 2xs:p-6 xs:p-8 xmd:px-10 xl:p-12 rounded-md"
          >
            <ContactMeForm />
          </motion.div>
        </div>
      </div>
      <div className="relative pt-10">
        <div className="absolute w-24 2xs:w-28 md:w-32 xl:w-36 3xl:w-40 left-[50%] -translate-x-[48%] top-0 -rotate-6">
          <img
            src={EndSticker}
            className="w-full h-auto"
            alt="End Sticker Design Element"
          />
        </div>
        <div className="w-full h-auto">
          <img
            src={FooterSectionTearEffect}
            className="w-full h-auto"
            alt="Tear Effect Design Element"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
