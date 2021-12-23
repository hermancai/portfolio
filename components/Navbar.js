function Navbar() {
  return (
    <div className="flex flex-col fixed w-full bg-gray-900 z-10">
      <div className="flex w-full justify-evenly py-5 sm:space-x-10 sm:justify-end md:space-x-16 sm:px-16">
        <p
          className="navbarLink"
          onClick={() => {
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
          }}
        >
          HOME
        </p>
        <p
          className="navbarLink"
          onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }}
        >
          ABOUT
        </p>
        <p
          className="navbarLink"
          onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROJECTS
        </p>
        <p
          className="navbarLink"
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
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
