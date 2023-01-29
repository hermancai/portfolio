import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";
import SectionHeader from "./SectionHeader";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function AnimatedText({ text, error }: { text: string; error: boolean }) {
  return (
    <AnimatePresence>
      {text === "" ? null : (
        <motion.p
          className={`${error ? "text-red-500" : "text-green-500"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: { duration: 0.35 },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: { duration: 0.35 },
          }}
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendStatus, setSendStatus] = React.useState({
    text: "",
    error: false,
  });
  const [loading, setLoading] = React.useState(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    let valid = true;
    const newErrors = { ...errors };

    if (!input.name.trim()) {
      newErrors.name = "What is your name?";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!input.email.trim()) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!input.message.trim()) {
      newErrors.message = "Please leave a message.";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(!loading);
    setSendStatus({ text: "", error: false });

    if (!validate()) {
      return setLoading(false);
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const res = await response.json();

    if (response.status !== 200 || res.error) {
      setLoading(false);
      return setSendStatus({
        text: "Sorry, your message cannot be sent at this time.",
        error: true,
      });
    }
    setLoading(false);
    setSendStatus({ text: "Message sent!", error: false });
  };

  return (
    <Element name="Contact" className="pt-40 pb-24 bg-slate-800">
      <div className="w-full flex flex-col items-center justify-center gap-4 px-4 text-white">
        <SectionHeader text="Contact" />
        <p className="text-center mb-2">
          You can send me a message using this form or via{" "}
          <a
            href="https://www.linkedin.com/in/hermancai/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-orange-400"
          >
            LinkedIn
          </a>
          .
        </p>
        <form
          onSubmit={handleSubmit}
          className="border border-slate-600 rounded bg-slate-900 flex flex-col w-full max-w-[32rem] px-4 sm:px-8 pt-6 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-zinc-900 rounded border border-slate-600 focus:outline-none focus:border-slate-200 p-2 transition-[border-color] duration-300"
              onChange={handleOnChange}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <AnimatedText text={errors.name} error={true} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Email</label>
            <input
              type="text"
              name="email"
              className="w-full bg-zinc-900 rounded border border-slate-600 focus:outline-none focus:border-slate-200 p-2 transition-[border-color] duration-300"
              onChange={handleOnChange}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <AnimatedText text={errors.email} error={true} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Message</label>
            <textarea
              spellCheck={false}
              name="message"
              className="w-full resize-y min-h-[8rem] bg-zinc-900 rounded border border-slate-600 focus:outline-none focus:border-slate-200 p-2 transition-[border-color] duration-300"
              onChange={handleOnChange}
            />
            <AnimatedText text={errors.message} error={true} />
          </div>
          <div className="flex flex-col gap-4 mt-2 mb-6 justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="rounded text-orange-400 border border-orange-400 bg-black hover:text-black hover:bg-orange-400 transition-colors duration-300 w-32 h-10 flex justify-center items-center"
            >
              <AnimatePresence>
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.35 } }}
                    exit={{ opacity: 0, transition: { duration: 0.35 } }}
                    className="rounded-full border-2 border-black border-t-orange-400 w-5 h-5 animate-spin"
                  />
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.35 } }}
                    exit={{ opacity: 0, transition: { duration: 0.35 } }}
                    className="flex flex-row flex-nowrap gap-1 items-center"
                  >
                    <EnvelopeIcon className="h-5" />
                    Send
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <AnimatedText text={sendStatus.text} error={sendStatus.error} />
          </div>
        </form>
      </div>
    </Element>
  );
}
