import NavLink from "./NavLink";

function Navbar({ homeInView, aboutInView, projectsInView, contactInView }) {
  return (
    <div className="flex sticky top-0 z-10">
      <div className="grid w-full grid-cols-4 text-center bg-gray-700">
        <NavLink title="home" inView={homeInView} />
        <NavLink title="about" inView={aboutInView} />
        <NavLink title="projects" inView={projectsInView} />
        <NavLink title="contact" inView={contactInView} />
      </div>
    </div>
  );
}

export default Navbar;
