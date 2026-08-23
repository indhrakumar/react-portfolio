import { FaReact } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

import { ArrowBigDown } from "lucide-react";
import { usePage } from "../context/PageProvider";

function Home({ handlePage }) {
  const { isDark } = useTheme();
  const { singlePage } = usePage();
  return (
    <div
      className={`text-text ${isDark ? "bg-bgDark" : "bg-gradient-to-bl from-slate-500 via-cyan-300/40 to-blue-300"} relative w-full min-h-screen justify-center items-center flex font-mulish `}>
      <div className="p-5  flex flex-col rounded-lg">
        <h1
          className={` z-99  text-5xl lg:text-8xl p-3 font-bold flex gap-3 justify-center items-center ${isDark ? "animate-pulse" : "z-[0]"}`}
          style={{ textShadow: isDark ? "0 0 25px" : "" }}>
          <span
            className={` ${isDark ? "text-cyan-400" : " text-cyan-800"} flex gap-2`}>
            <FaReact
              className={`${isDark ? "text-cyan-400  drop-shadow-[0_0_25px_#22d3ee]" : " text-cyan-800 "}`}
            />
            React
          </span>{" "}
          Portfolio
        </h1>
        <div className="mb-5">
          <p
            className={`text-center tracking-widest z-999 italic text-lg lg:text-2xl ${isDark ? "text-cyan-400" : " text-cyan-800 font-bold"}`}>
            Welcome to my portfolio website.
          </p>
          <p className="text-center tracking-widest text-lg lg:text-2xl z-999 italic text-muted ">
            Its just a simple Design.
          </p>
        </div>
        <div
          className={`flex items-center justify-center ${!singlePage ? "hidden" : ""}`}>
          <ArrowBigDown className="animate-bounce" />
        </div>
        <div className=" flex items-center justify-center">
          <button
            onClick={() => handlePage("about")}
            className={`z-999  border cursor-pointer ${isDark ? " shadow-[inset_0_0_10px_black] bg-gradient-to-bl text-black from-white via-cyan-200 to-cyan-400" : " shadow-[inset_0_0_10px_black] bg-gradient-to-bl from-white via-cyan-200 to-cyan-400 z-[0]"}   rounded-full  flex items-center justify-center w-1/2 font-bold tracking-widest text-xl  p-3`}>
            Explore
          </button>
        </div>
      </div>
      <div>
        <FaReact
          size={500}
          className={`z-0 absolute ${isDark ? "opacity-10 " : "opacity-25 z-0"}text-9xl text-cyan-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/7 `}
        />
      </div>
    </div>
  );
}

export default Home;
