import ContactIcons from "./ContactIcons";

function Footer() {
  return (
    <>
      <span className="block w-full h-[0.5px] bg-red-900" />
      <div className="flex flex-wrap justify-between items-center w-full bg-gray-900 p-6">
        <p className="font-light text-gray-400">
          &copy; {new Date().getFullYear()} Herman Cai
        </p>
        <ContactIcons />
      </div>
    </>
  );
}

export default Footer;
