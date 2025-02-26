import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiLaravel,
  DiMysql,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Skill from "./Skill";

const hardSkills = [
  {
    title: "HTML5",
    icon: DiHtml5,
  },
  {
    title: "CSS3",
    icon: DiCss3,
  },
  {
    title: "Javascript",
    icon: DiJavascript,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "React.js",
    icon: DiReact,
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    title: "PHP",
    icon: DiPhp,
  },
  {
    title: "MySQL",
    icon: DiMysql,
  },
  {
    title: "Laravel",
    icon: DiLaravel,
  },
];

function HardSkills() {
  return (
    <div className="mb-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Hard Skills</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {hardSkills.map((skill) => (
            <Skill key={skill.title} title={skill.title} Icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
