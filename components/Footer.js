import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full bg-gray-900 p-6">
      <p className="font-light text-gray-400">&copy; {new Date().getFullYear()} Herman Cai</p>
      <div className="flex flex-wrap gap-5">
        <a href="https://www.linkedin.com/in/hermancai/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/In-White-96@2x.png" alt="linkedin logo" width={25} height={25} />
        </a>
        <a href="https://github.com/hermancai" target="_blank" rel="noopener noreferrer">
          <Image src="/images/GitHub-Mark-Light-64px.png" alt="github logo" width={25} height={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
