import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ title, image, repolink, openLink, techIcon, about }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`pb-3 h-auto ${isDark ? "bg-card" : "bg-slate-50 "}border z-10 border-slate-500/30 shadow-[inset_0px_0px_15px_black,5px_15px_20px_rgba(0,0,0,0.6)]  rounded-lg text-2xl`}>
      <h1 className="text-center font-bold font-poppins mt-2">{title}</h1>
      <div className="w-full px-1   rounded-t-2xl h-60 mt-4 overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover  " />
      </div>
      <div className="px-3 py-2">
        <p className="h-35 italic font-semibold text-lg tracking-wide md:text-xl overflow-y-scroll ">
          <span className={`block not-italic text-muted text-sm`}>
            About This Project
          </span>
          {about}
        </p>
        <div className="flex w-full text-lg gap-2 my-3 items-center">
          <span className="text-lg">Tech Used</span>
          <span className="flex-1 text-2xl flex gap-3 ms-auto">{techIcon}</span>
        </div>
        <div className="text-sm flex items-center justify-between px-3">
          <a
            href={repolink}
            className={`flex items-center  gap-2 px-2 py-0.5 rounded-full  border-[0.1px] border-gray-500 ${isDark ? "bg-linear-to-tl  from-green-800/40 via-green-800/50  to-black text-white" : "bg-white text-black shadow-[inset_0_0_5px_rgba(0,0,0,0.8)]"}`}>
            {" "}
            <BsGithub />
            Github-Repo
          </a>
          <a
            href={openLink}
            className={`flex  items-center  gap-2 px-2 py-0.5 rounded-full  border-[0.1px] border-gray-500 ${isDark ? "bg-linear-to-tl  from-slate-600 via-cyan-800/50  to-black text-white" : "bg-white text-black shadow-[inset_0_0_5px_rgba(0,0,0,0.8)]"}`}>
            {" "}
            <ExternalLink size={12} />
            Open-Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
