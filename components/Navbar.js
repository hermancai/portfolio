function Navbar({ inViewList, entryList }) {
  return (
    <div className="flex flex-col fixed w-full bg-gray-900 z-10">
      <div className="flex w-full justify-evenly py-5 sm:space-x-10 sm:justify-end md:space-x-16 sm:px-16">
        <p
          className={`navbarLink ${
            inViewList[0] === true ? "text-red-500" : ""
          }`}
          onClick={() => {
            entryList[0].target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HOME
        </p>
        <p
          className={`navbarLink ${
            inViewList[1] === true ? "text-red-500" : ""
          }`}
          onClick={() => {
            entryList[1].target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ABOUT
        </p>
        <p
          className={`navbarLink ${
            inViewList[2] === true ? "text-red-500" : ""
          }`}
          onClick={() => {
            entryList[2].target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROJECTS
        </p>
        <p
          className={`navbarLink ${
            inViewList[3] === true ? "text-red-500" : ""
          }`}
          onClick={() => {
            entryList[3].target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACT
        </p>
      </div>
      <span className="w-full h-[1px] bg-red-900"></span>
    </div>
  );
}

export default Navbar;
