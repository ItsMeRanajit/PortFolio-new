import React from "react";
import { FaReact, FaJsSquare, FaJava, FaPython, FaNodeJs, FaLinux, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

const skillIcons = [
  { icon: <FaReact size={100} />, label: "React" },
  { icon: <FaJsSquare size={100} />, label: "JavaScript" },
  { icon: <FaJava size={100} />, label: "Java" },
  { icon: <FaPython size={100} />, label: "Python" },
  { icon: <FaNodeJs size={100} />, label: "Node.js" },
  { icon: <FaLinux size={100} />, label: "Linux" },
  { icon: <FaGitAlt size={100} />, label: "Git" },
  { icon: <BiLogoTypescript size={100} />, label: "TypeScript" },
  { icon: <BiLogoTailwindCss size={100} />, label: "Tailwind CSS" },
  { icon: <SiMongodb size={100} />, label: "MongoDB" },
  { icon: <SiExpress size={100} />, label: "Express" },
  { icon: <GrMysql size={100} />, label: "MySQL" },
  { icon: <RiNextjsFill size={100} />, label: "Next.js" },
];
const skills = () => {
  return (
    <div className="custom-gradient py-32" id="skills">
      <div className="text-white max-w-[900px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4 font-fontLogo">
          What <span className="text-orange-400">I</span> Do
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {skillIcons.map((skill, index) => (
            <div key={index} className="flex flex-col h-[150px] w-[150px] md:h-[180px] md:w-[180px] justify-between items-center bg-white/10 p-4 rounded-xl">
              {skill.icon}
              <p className="mt-2 text-lg font-fontLogo">{skill.label}</p>
            </div>
          ))}
          <div className="self-end text-2xl font-fontLogo">and more...</div>
        </div>
      </div>
    </div>
  );
};
export default skills;
