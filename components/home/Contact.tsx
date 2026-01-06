"use client";

import { FormEvent, Ref, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const GITHUB_LINK = "https://github.com/hermancai";
const LINKEDIN_LINK = "https://www.linkedin.com/in/hermancai/";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<StatusType>("");
    const inputRef = useRef<InputHandle>(null);

    const allFieldsFilled = (input: InputKeys) => {
        if (!inputRef.current) return false;

        if (!input.name.trim()) {
            inputRef.current.focusName();
            return false;
        } else if (!input.email.trim()) {
            inputRef.current.focusEmail();
            return false;
        } else if (!input.message.trim()) {
            inputRef.current.focusMessage();
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current) return;

        setLoading(true);
        setStatus("");
        const input = inputRef.current.getInput();

        if (!allFieldsFilled(input) || input.syrupJar !== "") {
            setLoading(false);
            return;
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
        setStatus("ok");
        if (response.status !== 200 || res.error) {
            return setStatus("err");
        }
    };

    return (
        <div
            id="contact"
            className="relative w-full flex flex-col items-center justify-center px-6 py-12 gap-12 my-12 overflow-hidden"
        >
            <SectionTitle name="Contact" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.5 }}
                className="w-full flex flex-col items-center justify-center gap-12"
            >
                <div className="absolute flex justify-center inset-0 pointer-events-none -z-10 text-neutral-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-full aspect-square overflow-visible"
                    >
                        <path
                            transform="rotate(6,12,12)"
                            d="M21 3 12 23 8 16 1 12 Z"
                        />
                    </svg>
                </div>
                <div className="flex flex-nowrap gap-8 justify-center">
                    <a
                        href={LINKEDIN_LINK}
                        target="_blank"
                        className="flex flex-nowrap gap-1 p-2 bg-black border border-blue-400 hover:bg-neutral-900 transition-colors"
                    >
                        <Image
                            src="/icons/linkedin.png"
                            alt="linkedin profile"
                            width={50}
                            height={50}
                            className="w-6 h-6 aspect-square"
                        />
                        LinkedIn
                    </a>
                    <a
                        href={GITHUB_LINK}
                        target="_blank"
                        className="font-mono flex flex-nowrap gap-1 p-2 bg-black border border-green-400 hover:bg-neutral-900 transition-colors"
                    >
                        <Image
                            src="/icons/github.png"
                            alt="github profile"
                            width={50}
                            height={50}
                            className="w-6 h-6 aspect-square"
                        />
                        Github
                    </a>
                </div>
                <form
                    className="relative flex flex-col justify-center items-center w-full max-w-lg min-w-60 gap-8"
                    onSubmit={handleSubmit}
                >
                    <InputField ref={inputRef} />
                    <div className="w-full flex flex-nowrap items-center justify-end gap-4">
                        <div
                            className={`transition-opacity ${
                                status === "" ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            <MessageStatus status={status} />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="relative self-end h-10 w-20 border hover:bg-neutral-800 text-blue-400 border-blue-400 transition-colors disabled:text-neutral-900 disabled:bg-neutral-800 disabled:border-neutral-900"
                        >
                            SEND
                            <span
                                className={`absolute top-0 left-0 right-0 h-px will-change-transform ${
                                    loading
                                        ? "animate-stretchLeftRight bg-orange-400"
                                        : ""
                                }`}
                            />
                            <span
                                className={`absolute bottom-0 left-0 right-0 h-px will-change-transform ${
                                    loading
                                        ? "animate-stretchRightLeft bg-orange-400"
                                        : ""
                                }`}
                            />
                            <span
                                className={`absolute right-0 top-0 bottom-0 w-px transition-colors will-change-transform [animation-delay:500ms] ${
                                    loading
                                        ? "animate-stretchTopBottom bg-orange-500 delay-500"
                                        : "delay-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-0 bottom-0 w-px transition-colors will-change-transform [animation-delay:500ms] ${
                                    loading
                                        ? "animate-stretchBottomTop bg-orange-500 delay-500"
                                        : "delay-0"
                                }`}
                            />
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

interface InputKeys {
    name: string;
    email: string;
    message: string;
    syrupJar: string;
}

interface InputHandle {
    getInput: () => InputKeys;
    focusName: () => void;
    focusEmail: () => void;
    focusMessage: () => void;
}

function InputField({ ref }: { ref: Ref<InputHandle> }) {
    const [input, setInput] = useState<InputKeys>({
        name: "",
        email: "",
        message: "",
        syrupJar: "",
    });
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(
        ref,
        () => ({
            getInput() {
                return input;
            },
            focusName: () => nameRef.current?.focus(),
            focusEmail: () => emailRef.current?.focus(),
            focusMessage: () => messageRef.current?.focus(),
        }),
        [input, nameRef, emailRef, messageRef]
    );

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full flex flex-col gap-8">
            <div className="relative w-full group">
                <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder=" "
                    className="peer custom-input"
                    onChange={handleOnChange}
                    value={input.name}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
                <label htmlFor="name" className="custom-label">
                    Name
                </label>
                <span className="focus-underline" />
            </div>
            <div className="relative w-full group">
                <input
                    ref={emailRef}
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder=" "
                    className="peer custom-input"
                    onChange={handleOnChange}
                    value={input.email}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
                <label htmlFor="email" className="custom-label">
                    Email
                </label>
                <span className="focus-underline" />
            </div>
            <div className="relative w-full group">
                <textarea
                    ref={messageRef}
                    spellCheck={false}
                    id="message"
                    name="message"
                    placeholder=" "
                    value={input.message}
                    className="peer custom-input resize-y min-h-32 max-h-80 align-bottom field-sizing-content"
                    onChange={handleOnChange}
                />
                <label htmlFor="message" className="custom-label">
                    Message
                </label>
                <span className="focus-underline" />
            </div>
            <div className="absolute left-[-9999px] top-0" aria-hidden="true">
                <label htmlFor="syrupJar">Syrup Jar</label>
                <input
                    tabIndex={-1}
                    type="text"
                    name="syrupJar"
                    id="syrupJar"
                    value={input.syrupJar}
                    onChange={handleOnChange}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
            </div>
        </div>
    );
}

type StatusType = "" | "ok" | "err";

function MessageStatus({ status }: { status: StatusType }) {
    if (status === "") return;

    if (status === "ok") {
        return (
            <div className="flex flex-nowrap gap-2 text-green-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
                Message sent
            </div>
        );
    } else if (status === "err") {
        return (
            <div className="flex flex-nowrap gap-2 text-red-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
                Sending failed
            </div>
        );
    }
}
