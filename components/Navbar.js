function Navbar() {
  return (
    <div className="flex sticky top-0">
      <div className="grid w-full grid-cols-4 text-center bg-gray-700">
        <a className="link" href="#home">
          Home
        </a>
        <a className="link" href="#about">
          About
        </a>
        <a className="link" href="#projects">
          Projects
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
