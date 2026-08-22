import SkillsCard from "./SkillsCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillsDetails = [
    {
      title: "HTML",
      logo: <FaHtml5 />,
      cato: "Frontend",
      txtcolour: "text-orange-500",
      colour: "orange",
      bgColor: "bg-orange-500",
      percent: 85,
      discrip: "Responsive Web Design",
      dropShadow: "drop-shadow-[0_0_30px_orange]",
    },
    {
      title: "CSS",
      logo: <FaCss3Alt />,
      cato: "Frontend",
      txtcolour: "text-blue-500",
      colour: "blue",
      bgColor: "bg-blue-500",
      percent: 80,
      discrip: "Responsive Styling & Layout",
      dropShadow: "drop-shadow-[0_0_30px_blue]",
    },

    {
      title: "Bootstrap",
      logo: <FaBootstrap />,
      cato: "Frontend",
      txtcolour: "text-purple-500",
      colour: "purple",
      bgColor: "bg-purple-500",
      percent: 75,
      discrip: "Responsive UI Components",
      dropShadow: "drop-shadow-[0_0_30px_purple]",
    },

    {
      title: "Tailwind CSS",
      logo: <SiTailwindcss />,
      cato: "Frontend",
      txtcolour: "text-cyan-400",
      colour: "cyan",
      bgColor: "bg-cyan-400",
      percent: 85,
      discrip: "Utility-First Responsive UI",
      dropShadow: "drop-shadow-[0_0_30px_cyan]",
    },

    {
      title: "JavaScript",
      logo: <FaJs />,
      cato: "Programming",
      txtcolour: "text-yellow-400",
      colour: "yellow",
      bgColor: "bg-yellow-400",
      percent: 80,
      discrip: "DOM, ES6 & API Integration",
      dropShadow: "drop-shadow-[0_0_30px_yellow]",
    },

    {
      title: "React",
      logo: <FaReact />,
      cato: "Frontend",
      txtcolour: "text-cyan-400",
      colour: "cyan",
      bgColor: "bg-cyan-400",
      percent: 75,
      discrip: "Component-Based UI Development",
      dropShadow: "drop-shadow-[0_0_30px_cyan]",
    },

    {
      title: "TypeScript",
      logo: <SiTypescript />,
      cato: "Programming",
      txtcolour: "text-blue-600",
      colour: "blue",
      bgColor: "bg-blue-600",
      percent: 55,
      discrip: "Type-Safe JavaScript Development",
      dropShadow: "drop-shadow-[0_0_30px_blue]",
    },

    {
      title: "Node.js",
      logo: <FaNodeJs />,
      cato: "Backend",
      txtcolour: "text-green-500",
      colour: "green",
      bgColor: "bg-green-500",
      percent: 65,
      discrip: "Server-Side JavaScript",
      dropShadow: "drop-shadow-[0_0_30px_green]",
    },

    {
      title: "Express.js",
      logo: <SiExpress />,
      cato: "Backend",
      txtcolour: "text-gray-300",
      colour: "gray",
      bgColor: "bg-gray-300",
      percent: 60,
      discrip: "REST API Development",
      dropShadow: "drop-shadow-[0_0_30px_gray]",
    },

    {
      title: "MongoDB",
      logo: <SiMongodb />,
      cato: "Database",
      txtcolour: "text-green-500",
      colour: "green",
      bgColor: "bg-green-500",
      percent: 60,
      discrip: "NoSQL Database Management",
      dropShadow: "drop-shadow-[0_0_30px_green]",
    },

    {
      title: "MySQL",
      logo: <SiMysql />,
      cato: "Database",
      txtcolour: "text-blue-500",
      colour: "blue",
      bgColor: "bg-blue-500",
      percent: 65,
      discrip: "Relational Database Management",
      dropShadow: "drop-shadow-[0_0_30px_blue]",
    },

    {
      title: "Git & GitHub",
      logo: <FaGithub />,
      cato: "Tools",
      txtcolour: "text-orange-500",
      colour: "orange",
      bgColor: "bg-orange-500",
      percent: 75,
      discrip: "Version Control & Collaboration",
      dropShadow: "drop-shadow-[0_0_30px_orange]",
    },

    {
      title: "VS Code",
      logo: <VscVscode />,
      cato: "Development Tool",
      txtcolour: "text-blue-500",
      colour: "blue",
      bgColor: "bg-blue-500",
      percent: 90,
      discrip: "Code Editor & Development",
      dropShadow: "drop-shadow-[0_0_30px_blue]",
    },

    {
      title: "IntelliJ IDEA",
      logo: <SiIntellijidea />,
      cato: "Development Tool",
      txtcolour: "text-purple-500",
      colour: "purple",
      bgColor: "bg-purple-500",
      percent: 70,
      discrip: "Java Development Environment",
      dropShadow: "drop-shadow-[0_0_30px_purple]",
    },
  ];
  return (
    <div className="min-h-[calc(100vh-80px) ]">
      <h1
        className="text-center text-7xl font-bold font-poppins mt-5"
        style={{ textShadow: "0 0 20px" }}>
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="grid max-w-7xl grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5 rounded-lg">
        {skillsDetails.map((skill, index) => (
          <SkillsCard
            key={index}
            title={skill.title}
            logo={skill.logo}
            cato={skill.cato}
            txtcolour={skill.txtcolour}
            colour={skill.colour}
            bgColor={skill.bgColor}
            percent={skill.percent}
            discrip={skill.discrip}
            dropShadow={skill.dropShadow}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
