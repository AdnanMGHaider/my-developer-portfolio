import { useState } from "react";
import Button from "../../../../Components/Button";
import Send from "../../../../Assets/SVG/Icons/Send";

const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="flex flex-col gap-y-6 2xs:gap-y-8 sm:gap-y-10 2xl:gap-y-12">
      <div className="flex flex-col gap-y-2">
        <label
          className="text-sm-font 2xs:text-base-font xmd:text-lg-font"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="text"
          placeholder="E.g. 'John Doe'"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-sm-font 2xs:text-base-font xmd:text-lg-font"
          htmlFor="name"
        >
          Your Email
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="email"
          placeholder="E.g. 'JohnDoe@gmail.com'"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-sm-font 2xs:text-base-font xmd:text-lg-font"
          htmlFor="subject"
        >
          Subject of your message
        </label>
        <input
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          type="text"
          placeholder="E.g. 'Project Opportunity'"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-sm-font 2xs:text-base-font xmd:text-lg-font"
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          className="rounded-md text-text-white w-full bg-primary-purple/[.1] border-[1px] border-primary-purple text-sm-font xmd:text-base-font p-2 sm:p-3 2xl:p-4 placeholder:italic placeholder:text-text-grey focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple"
          rows="6"
          type="text"
          placeholder="E.g. 'There is a design and development project...'"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button className="mx-auto md:mt-4" icon={<Send />}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactMeForm;
