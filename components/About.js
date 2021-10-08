import SkillTable from "./SkillTable";

function About({ id }) {
  return (
    <div id={id} className="flex flex-wrap justify-center items-center w-full">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        placeholder
      </div>
      <SkillTable />
    </div>
  );
}

export default About;
