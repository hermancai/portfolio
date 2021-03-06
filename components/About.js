import { useInView } from "react-intersection-observer";
import TransitionSlideIn from "./TransitionSlideIn";
import ContactIcons from "./ContactIcons";

const skills1 = ["Javascript", "HTML", "CSS", "Python", "C"];
const skills2 = [
  "React",
  "Redux",
  "Tailwind CSS",
  "Node",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Next.js",
];
const skills3 = ["Git", "Agile"];

function About({ aboutRef, contactEntry }) {
  const inViewOptions = {
    fallbackInView: true,
    triggerOnce: true,
  };
  const [aboutHeaderRef, aboutHeaderInView] = useInView(inViewOptions);
  const [skillHeaderRef, skillHeaderInView] = useInView(inViewOptions);

  const mapSkills = (skillList) => {
    return (
      <div className="flex flex-wrap gap-2">
        {skillList.map((entry, i) => {
          return (
            <p
              key={i}
              className="rounded-md bg-gray-700 px-3 py-1 w-min whitespace-nowrap"
            >
              {entry}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div ref={aboutRef} className="flex w-full justify-center pt-[100px]">
      <div className="flex flex-col space-y-[100px] md:space-y-0 md:flex-row w-4/5 justify-between">
        <div className="flex flex-col w-full md:w-[45%] space-y-10">
          <TransitionSlideIn inView={aboutHeaderInView}>
            <p className="sectionLabel">About Me</p>
          </TransitionSlideIn>
          <div
            ref={aboutHeaderRef}
            className="bg-gray-900 p-8 rounded flex-1 leading-loose text-gray-100"
          >
            <p>
              My name is <span className="text-red-500">Herman Cai</span>. I am
              a full stack developer currently building with React and Node. I
              believe there is always more to learn, so I constantly strive to
              develop new skills and improve my work. Please feel free to{" "}
              <span
                className="underline text-red-500 cursor-pointer"
                onClick={() => {
                  contactEntry.target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                contact me
              </span>{" "}
              for any opportunities or inquiries.
            </p>
            <div className="float-right mt-5">
              <ContactIcons />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[45%] space-y-10">
          <TransitionSlideIn inView={skillHeaderInView}>
            <p className="sectionLabel">Skills</p>
          </TransitionSlideIn>
          <div ref={skillHeaderRef} className="bg-gray-900 p-8 rounded flex-1">
            <div className="flex flex-col space-y-3">
              {mapSkills(skills1)}
              <hr className="text-gray-500" />
              {mapSkills(skills2)}
              <hr className="text-gray-500" />
              {mapSkills(skills3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
