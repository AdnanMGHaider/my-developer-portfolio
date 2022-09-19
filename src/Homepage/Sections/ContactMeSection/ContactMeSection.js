import FooterSectionTearEffect from "../../../Assets/Images/FooterSectionTearEffect.png";
import EndSticker from "../../../Assets/Images/EndSticker.png";
import ContactMeHeadingSticker from "../../../Assets/Images/ContactMeHeadingSticker.png";

const ContactMeSection = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto py-12 xs:py-14 md:py-16 xl:py-20">
        <div className="w-56 2xs:w-60 sm:w-64 md:w-72 xl:w-80 3xl:w-96 h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 xl:mb-16 mx-auto">
          <img
            src={ContactMeHeadingSticker}
            className="w-full h-auto"
            alt="Section heading sticker"
          />
        </div>
        <div className="w-11/12 max-w-[40rem] mx-auto bg-contactMeFormSticker bg-center bg-cover p-4 rounded-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
            aenean sed adipiscing diam donec adipiscing tristique risus.
            Vestibulum rhoncus est pellentesque elit. Scelerisque eu ultrices
            vitae auctor eu augue. In ornare quam viverra orci sagittis eu
            volutpat odio. A diam sollicitudin tempor id eu. Eget lorem dolor
            sed viverra. Auctor neque vitae tempus quam pellentesque nec.
            Hendrerit gravida rutrum quisque non tellus. Luctus accumsan tortor
            posuere ac ut consequat semper viverra. Arcu risus quis varius quam
            quisque id diam vel quam. Nulla facilisi nullam vehicula ipsum a
            arcu cursus vitae. Rhoncus est pellentesque elit ullamcorper
            dignissim cras. Pulvinar mattis nunc sed blandit. Amet nisl purus in
            mollis nunc sed id semper risus. Pulvinar mattis nunc sed blandit
            libero volutpat sed cras. Sem et tortor consequat id porta nibh
            venenatis. Odio facilisis mauris sit amet massa vitae. Tortor id
            aliquet lectus proin. Ac placerat vestibulum lectus mauris ultrices.
            Commodo viverra maecenas accumsan lacus vel facilisis volutpat est.
            Arcu felis bibendum ut tristique et egestas quis ipsum. Donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam. Ut diam
            quam nulla porttitor massa id. Morbi quis commodo odio aenean.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
            massa. Sit amet aliquam id diam maecenas. Nisl nisi scelerisque eu
            ultrices vitae auctor eu augue. Nunc eget lorem dolor sed. Morbi
            tempus iaculis urna id volutpat. Quis blandit turpis cursus in hac
            habitasse platea dictumst quisque.
          </p>
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
