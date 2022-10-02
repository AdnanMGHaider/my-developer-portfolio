import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../../Components/Button";
import Send from "../../../../Assets/SVG/Icons/Send";

const ContactMeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t0clkaf",
        "template_g3wesgv",
        form.current,
        "Cp0b-EvcltDSG-K7l"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      className="flex flex-col gap-y-6 2xs:gap-y-8 sm:gap-y-10 2xl:gap-y-12"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col gap-y-2">
        <label className="text-sm-font 2xs:text-base-font xmd:text-lg-font">
          Your Name
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="text"
          placeholder="E.g. 'John Doe'"
          name="from_name"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="text-sm-font 2xs:text-base-font xmd:text-lg-font">
          Your Email
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="email"
          placeholder="E.g. 'JohnDoe@gmail.com'"
          name="user_email"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="text-sm-font 2xs:text-base-font xmd:text-lg-font">
          Subject of your message
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="text"
          name="subject"
          placeholder="E.g. 'Project Opportunity'"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="text-sm-font 2xs:text-base-font xmd:text-lg-font">
          Message
        </label>
        <textarea
          rows="6"
          placeholder="E.g. 'There is a design and development project...'"
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          name="message"
        />
      </div>
      <Button
        className="mx-auto md:mt-4"
        type="submit"
        value="Send"
        icon={<Send />}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactMeForm;
