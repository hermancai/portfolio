import SkillBox from "./SkillBox";

function SkillTable() {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-2/5">
      <p className="text-3xl my-3">Technologies</p>

      <div className="skillRow">
        <SkillBox name="Javascript" imgPath="/logos/javascript_logo.png" />
        <SkillBox name="Python" imgPath="/logos/python_logo.png" />
      </div>
      <div className="skillRow">
        <SkillBox name="HTML" imgPath="/logos/html_logo.png" />
        <SkillBox name="CSS" imgPath="/logos/css_logo.png" />
        <SkillBox name="React" imgPath="/logos/react_logo.png" />
        <SkillBox name="Next.js" imgPath="/logos/nextjs_logo.png" />
        <SkillBox name="tailwindcss" imgPath="/logos/tailwindcss_logo.png" />
      </div>
      <div className="skillRow">
        <SkillBox name="Node.js" imgPath="/logos/nodejs_logo.png" />
        <SkillBox name="Express.js" imgPath="/logos/expressjs_logo.png" />
        <SkillBox name="PostgreSQL" imgPath="/logos/postgres_logo.png" />
      </div>
    </div>
  );
}

export default SkillTable;
