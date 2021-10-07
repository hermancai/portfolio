import SkillBox from "./SkillBox";

function About({ id }) {
  return (
    <div id={id} className="flex flex-wrap justify-center items-center w-full">
      <div className="w-full md:w-1/2">placeholder</div>
      <div className="flex flex-wrap justify-center items-center w-full md:w-1/2">
        <SkillBox name="React" imgPath="/logos/react_logo.png" />
        <SkillBox name="Node.js" imgPath="/logos/nodejs_logo.png" />
        <SkillBox name="HTML" imgPath="/logos/html_logo.png" />
        <SkillBox name="CSS" imgPath="/logos/css_logo.png" />
        <SkillBox name="Javascript" imgPath="/logos/javascript_logo.png" />
        <SkillBox name="Next.js" imgPath="/logos/nextjs_logo.png" />
        <SkillBox name="Express.js" imgPath="/logos/expressjs_logo.png" />
        <SkillBox name="PostgreSQL" imgPath="/logos/postgres_logo.png" />
      </div>
    </div>
  );
}

export default About;
