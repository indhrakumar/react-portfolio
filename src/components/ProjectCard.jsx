import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ title, image, repolink, openLink, techIcon, about }) => {
  const { isDark } = useTheme();
  return (
    <div className="pb-3 h-auto bg-slate-800/50 border z-10 border-slate-500/30 shadow-[inset_5px_5px_15px_aliceblue,5px_15px_20px_rgba(0,0,0,0.6)]  rounded-lg text-2xl">
      <h1 className="text-center font-bold font-poppins mt-2">{title}</h1>
      <div className="w-full px-1  rounded-t-2xl h-60 mt-4 overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover " />
      </div>
      <div className="px-3 py-2">
        <p className="h-35 italic font-semibold text-xl md:text-lg overflow-scroll ">
          <span
            className={`block not-italic text-muted text-sm sticky top-0 ${isDark ? "bg-black/1" : "bg-white/1"}  backdrop-blur-sm`}>
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
            className={`flex items-center text-white gap-2 px-2 py-0.5 rounded-full  border-[0.1px] border-gray-500 ${isDark ? "bg-linear-to-tl  from-gray-800 via-gray-900 to-black" : "bg-linear-to-tl  from-black/20 via-slate-700/60 to-black"}`}>
            {" "}
            <BsGithub />
            Github-Repo
          </a>
          <a
            href={openLink}
            className={`flex animate-pulse items-center text-white gap-2 px-2 py-0.5 rounded-full  border-[0.1px] border-gray-500 ${isDark ? "bg-linear-to-tl  from-gray-800 via-gray-900 to-black" : "bg-linear-to-tl  from-black/20 via-slate-700/60 to-black"}`}>
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
