import EmailForm from "./EmailForm";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function Contact({ contactRef }) {
  const [contactHeaderRef, contactHeaderInView] = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });

  return (
    <div
      ref={contactRef}
      className="flex justify-center items-center w-full mb-10 pt-[100px]"
    >
      <div className="flex flex-col w-4/5 md:w-1/2 space-y-4">
        <div className="flex flex-col justify-center items-center text-center space-y-5 px-5">
          <Transition
            appear={true}
            show={contactHeaderInView}
            enter="transition-all duration-1000"
            enterFrom="opacity-0 translate-y-[-100%]"
            enterTo="opacity-100 translate-y-0"
          >
            <p className="sectionLabel">Contact</p>
          </Transition>
          <p ref={contactHeaderRef} className="text-gray-300">
            Send me a message via{" "}
            <a
              className="underline text-red-500 cursor-pointer"
              href="https://www.linkedin.com/in/hermancai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            or with the form below.
          </p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}

export default Contact;
