function Navbar() {
  return (
    <div className="flex fixed w-full bg-gray-900">
      <div className="flex w-full justify-evenly py-5 sm:space-x-10 sm:justify-end md:space-x-16 sm:px-16">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
