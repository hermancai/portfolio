import { useState } from "react";
import { toast } from "react-toastify";

const SuccessToast = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#22c55e"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      Message sent successfully!
    </div>
  );
};

const ErrorToast = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ef4444"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      Your message cannot be sent at this time.
    </div>
  );
};

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const res = await response.json();

    setLoading(false);
    if (response.status !== 200 || res.error) {
      return toast(ErrorToast);
    }
    toast(SuccessToast);
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center text-white scroll-mt-12"
    >
      <div className="w-[95%] md:w-[85%] sm:w-3/4 flex flex-row max-w-[50rem] p-8 gap-8">
        <div className="md:min-w-[8rem] md:min-h-[8rem] justify-center hidden md:flex md:mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-center gap-3">
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <p>
              <span className="font-raleway text-3xl text-transparent bg-clip-text bg-gradient-orange">
                Send me a message!
              </span>
            </p>
          </div>
          <form
            className="flex flex-col rounded bg-zinc-950 p-4 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-zinc-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleOnChange}
                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                className=" bg-zinc-800 rounded px-2 py-1 border border-transparent focus:outline-transparent focus:outline focus:border-zinc-400 hover:border-zinc-600 transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-zinc-400">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleOnChange}
                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                className=" bg-zinc-800 rounded px-2 py-1 border border-transparent focus:outline-transparent focus:outline focus:border-zinc-400 hover:border-zinc-600 transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-zinc-400">
                Message
              </label>
              <textarea
                spellCheck={false}
                name="message"
                id="message"
                className="resize-y min-h-[8rem] bg-zinc-800 rounded px-2 py-1 border border-transparent focus:outline-transparent focus:outline focus:border-zinc-400 hover:border-zinc-600 transition-colors duration-200"
                onChange={handleOnChange}
              />
            </div>

            <button
              type="submit"
              disabled={
                loading ||
                input.name.trim() == "" ||
                input.email.trim() == "" ||
                input.message.trim() == ""
              }
              className="flex justify-center items-center whitespace-nowrap relative hover:drop-shadow-orange bg-transparent disabled:drop-shadow-none before:transition-opacity z-10 before:-z-10 before:duration-300 before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-orange before:opacity-100 disabled:before:opacity-0 before:rounded w-20 h-9 px-2 py-1 border border-transparent rounded disabled:border-zinc-700 disabled:text-zinc-700 text-black transition-[drop_shadow] duration-200"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-t-orange-500 border-b-orange-400 border-l-orange-400 border-r-transparent rounded-full animate-spin" />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
