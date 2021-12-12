function About({ id }) {
  return (
    <div id={id} className="flex flex-col sm:flex-row justify-center space-x-16">
      <div className="">
        <p>About Me</p>
      </div>
      <div className="">
        <p>Skills</p>
      </div>
    </div>
  );
}

export default About;
