"use client";

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

export default function ContactForm() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
        syrupJar: "",
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

        if (input.syrupJar !== "") {
            setLoading(false);
            return toast(ErrorToast);
        }

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
        <form
            className="flex flex-col rounded bg-zinc-950 p-4 gap-4 relative"
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
                    autoComplete="name"
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
                    autoComplete="email"
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

            <div className="absolute left-[-9999px] top-0" aria-hidden="true">
                <label htmlFor="syrupJar" className="text-zinc-400">
                    Syrup Jar
                </label>
                <input
                    tabIndex={-1}
                    type="text"
                    name="syrupJar"
                    id="syrupJar"
                    onChange={handleOnChange}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    className=" bg-zinc-800 rounded px-2 py-1 border border-transparent focus:outline-transparent focus:outline focus:border-zinc-400 hover:border-zinc-600 transition-colors duration-200"
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
    );
}
