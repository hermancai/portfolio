function About({ id }) {
  return (
    <div id={id} className="flex w-full justify-center pt-[100px]">
      <div className="flex flex-col space-y-[100px] md:space-y-0 md:flex-row w-4/5 justify-between">
        <div className="flex flex-col w-full md:w-[45%] space-y-10">
          <p className="sectionLabel">About Me</p>
          <div className="bg-gray-900 p-8 rounded flex-1 leading-loose text-gray-100">
            <p>
              My name is <span className="text-red-500">Herman Cai</span>. I am a fullstack developer currently focused
              on building with React and Node. I believe there is always more to learn, so I constantly strive to
              develop new skills and improve my work. Please feel free to{" "}
              <span
                className="underline text-red-500 cursor-pointer"
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                }}
              >
                contact me
              </span>{" "}
              for any opportunities or inquiries.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[45%] space-y-10">
          <p className="sectionLabel">My Skills</p>
          <div className="bg-gray-900 p-8 rounded flex-1">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-wrap gap-2">
                <p className="skillBox">Javascript</p>
                <p className="skillBox">React</p>
                <p className="skillBox">HTML</p>
                <p className="skillBox">CSS</p>
                <p className="skillBox">tailwindcss</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                <p className="skillBox">Node</p>
                <p className="skillBox">Express</p>
                <p className="skillBox">PostgreSQL</p>
                <p className="skillBox">Next.js</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                <p className="skillBox">Github</p>
                <p className="skillBox">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
