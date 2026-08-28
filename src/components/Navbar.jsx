import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageProvider";

function Navbar({ setPage, isOpen, setIsOpen, page, activePage }) {
  const { isDark, setIsDark } = useTheme();
  const { singlePage, setSinglePage } = usePage();

  const handlePage = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-999 h-20 w-full px-4 ${isDark ? "bg-bg/20" : ""}  text-text backdrop-blur-sm flex justify-between items-center font-mulish`}>
      {/* Logo */}
      <div
        className="text-text2 font-extrabold text-2xl md:text-3xl lg:text-4xl"
        style={{
          textShadow: isDark
            ? "0 0 20px"
            : "0 0 20px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,1)",
        }}>
        Indhra Kumar{" "}
        <span className={`${isDark ? " text-blue-600" : " text-green-500"}`}>
          R M
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-5">
        <button
          onClick={() => handlePage("home")}
          className={`${activePage === "home" ? " -translate-y-2 bg-cyan-400 text-black ease-in-out  rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          Home
        </button>
        <button
          onClick={() => handlePage("about")}
          className={`${activePage === "about" ? " -translate-y-2 bg-cyan-400 text-black ease-in-out  rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          About
        </button>
        <button
          onClick={() => handlePage("education")}
          className={`${activePage === "education" ? " -translate-y-2 bg-cyan-400 text-black ease-in-out  rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          Education
        </button>
        <button
          onClick={() => handlePage("skills")}
          className={`${activePage === "skills" ? " -translate-y-2 bg-cyan-400  text-black ease-in-out rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          Skills
        </button>
        <button
          onClick={() => handlePage("projects")}
          className={`${activePage === "projects" ? " -translate-y-4 bg-cyan-400   rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          Projects
        </button>
        <button
          onClick={() => handlePage("contact")}
          className={`${activePage === "contact" ? " -translate-y-2 bg-cyan-400 text-black ease-in-out  rounded-lg transition-all duration-500" : " none"} px-3  font-semibold text-lg`}>
          Contact
        </button>
      </div>
      <div className="w-40 hidden lg:flex flex-col gap-3">
        <div className="flex gap-2">
          <span className="ms-auto font-bold italic ">Theme</span>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-10 rounded-full ${isDark ? "bg-slate-700 border-gray-700 shadow-[inset_0_0_5px_white]" : "bg-white"} border shadow-[inset_0_0_5px_black]`}>
            <div
              className={`w-5 h-5 transition-all duration-300 ease-in-out ${isDark ? "bg-black text-white shadow-[0_0_15px_white] ms-auto" : "bg-slate-800 text-yellow-300 shadow-[0_0_5px_black]"} scale-110 text-cyan-400 border-gray-500 border-[0.5px] flex items-center justify-center rounded-full`}>
              {isDark ? (
                <Moon size={15} className="drop-shadow-[0_0_2px_white]" />
              ) : (
                <Sun size={15} />
              )}
            </div>
          </button>
        </div>
        <button
          onClick={() => setSinglePage(!singlePage)}
          className={`relative p-1 text-sm flex overflow-hidden w-full ${isDark ? "border border-cyan-400 " : "border border-slate-700"}   rounded-full`}>
          {/* Animated Background */}
          <span
            className={`absolute top-1 bottom-1 bg-cyan-400 rounded-full
    ${singlePage ? "left-1 w-[calc(50%-4px)]" : "left-1/2 w-[calc(50%-4px)]"}
  `}
            style={{
              animation: `${singlePage ? "scrollToPage" : "pageToScroll"} 0.5s ease-in-out`,
              animationFillMode: "forwards",
            }}
          />
          {/* Page */}
          <span
            className={`relative z-10 w-1/2 text-center ${
              singlePage ? "text-black font-bold" : ""
            }`}>
            Page
          </span>

          {/* Scroll */}
          <span
            className={`relative z-10 w-1/2 text-center ${
              !singlePage ? "text-black font-bold " : " "
            }`}>
            Scroll
          </span>
        </button>
      </div>

      {/* Mobile */}

      <div className="lg:hidden flex gap-3">
        <div className="w-40  flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="ms-auto font-bold italic ">Theme</span>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`w-10 rounded-full ${isDark ? "bg-slate-700 border-gray-700 shadow-[inset_0_0_5px_white]" : "bg-white"} border shadow-[inset_0_0_5px_black]`}>
              <div
                className={`w-5 h-5 transition-all duration-300 ease-in-out ${isDark ? "bg-black text-white shadow-[0_0_15px_white] ms-auto" : "bg-slate-800 text-yellow-300 shadow-[0_0_5px_black]"} scale-110 text-cyan-400 border-gray-500 border-[0.5px] flex items-center justify-center rounded-full`}>
                {isDark ? (
                  <Moon size={15} className="drop-shadow-[0_0_2px_white]" />
                ) : (
                  <Sun size={15} />
                )}
              </div>
            </button>
          </div>
          <button
            onClick={() => setSinglePage(!singlePage)}
            className={`relative p-1 text-sm flex overflow-hidden w-full ${isDark ? "border border-cyan-400 " : "border border-slate-700"}   rounded-full`}>
            {/* Animated Background */}
            <span
              className={`absolute top-1 bottom-1 bg-cyan-400 rounded-full
    ${singlePage ? "left-1 w-[calc(50%-4px)]" : "left-1/2 w-[calc(50%-4px)]"}
  `}
              style={{
                animation: `${singlePage ? "scrollToPage" : "pageToScroll"} 0.5s ease-in-out`,
                animationFillMode: "forwards",
              }}
            />
            {/* Page */}
            <span
              className={`relative z-10 w-1/2 text-center ${
                singlePage ? "text-black font-bold" : ""
              }`}>
              Page
            </span>

            {/* Scroll */}
            <span
              className={`relative z-10 w-1/2 text-center ${
                !singlePage ? "text-black font-bold " : " "
              }`}>
              Scroll
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
