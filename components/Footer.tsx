import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#09090b] mt-12">
      <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[50rem] py-16">
        <div className="flex flex-row flex-nowrap gap-8">
          <a
            href="https://www.linkedin.com/in/hermancai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.png"
              alt="linkedin"
              width={25}
              height={25}
              sizes="100vw"
            />
          </a>
          <a
            href="https://github.com/hermancai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github.png"
              alt="github"
              width={25}
              height={25}
              sizes="100vw"
            />
          </a>
        </div>
        <p className="text-light text-white">Thanks for visiting!</p>
      </div>
    </div>
  );
}
