import {
  DiCss3,
  DiHtml5,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Skill from "./Skill";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";

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
    icon: IoLogoJavascript,
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
    icon: GrMysql,
  },
  {
    title: "Laravel",
    icon: FaLaravel,
  },
];

function HardSkills() {
  return (
    <div className="mb-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-center md:text-left">Hard Skills</h3>
        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-normal">
          {hardSkills.map((skill) => (
            <Skill key={skill.title} title={skill.title} Icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
