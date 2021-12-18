function About({ id }) {
  return (
    <div id={id} className="flex w-full justify-center pt-[100px]">
      <div className="flex flex-col space-y-16 md:space-y-0 md:flex-row w-4/5 justify-between">
        <div className="w-full md:w-[45%] space-y-5">
          <p className="text-2xl underline underline-offset-8 decoration-4 decoration-red-500">About Me</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="w-full md:w-[45%] space-y-5">
          <p className="text-2xl underline underline-offset-8 decoration-4 decoration-red-500">My Skills</p>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-wrap gap-2">
              <p className="skillBox">HTML</p>
              <p className="skillBox">CSS</p>
              <p className="skillBox">tailwindcss</p>
              <p className="skillBox">Javascript</p>
              <p className="skillBox">React</p>
            </div>
            <hr />
            <div className="flex flex-wrap gap-2">
              <p className="skillBox">Node</p>
              <p className="skillBox">Express</p>
              <p className="skillBox">PostgreSQL</p>
            </div>
            <hr />
            <div className="flex flex-wrap gap-2">
              <p className="skillBox">Github</p>
              <p className="skillBox">VSCode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
