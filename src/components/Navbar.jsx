import { MenuIcon, Moon, Sun, X } from "lucide-react";
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
      <div className="hidden lg:flex gap-6">
        <button
          onClick={() => handlePage("home")}
          className={`${activePage === "home" ? " -translate-y-2 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          Home
        </button>
        <button
          onClick={() => handlePage("about")}
          className={`${activePage === "about" ? " -translate-y-2 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          About
        </button>
        <button
          onClick={() => handlePage("education")}
          className={`${activePage === "education" ? " -translate-y-2 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          Education
        </button>
        <button
          onClick={() => handlePage("skills")}
          className={`${activePage === "skills" ? " -translate-y-2 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          Skills
        </button>
        <button
          onClick={() => handlePage("projects")}
          className={`${activePage === "projects" ? " -translate-y-4 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          Projects
        </button>
        <button
          onClick={() => handlePage("contact")}
          className={`${activePage === "contact" ? " -translate-y-2 scale-105 text-blue-700" : " none"} font-semibold text-lg`}>
          Contact
        </button>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 border border-cyan-400 rounded-full">
          {isDark ? <Sun /> : <Moon />}
        </button>
        <button
          onClick={() => setSinglePage(!singlePage)}
          className="p-3 text-sm border border-cyan-400 rounded-full">
          {singlePage ? "Scroll-View" : "Page-View"}
        </button>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex gap-5">
        <button
          onClick={() => setSinglePage(!singlePage)}
          className="p-3 text-xs me-5 border border-cyan-400 rounded-full">
          {singlePage ? "Scroll-View" : "Page-View"}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 border ${
            isDark
              ? "border-cyan-600 shadow-[0_0_15px_cyan]"
              : "border-gray-200 shadow-[0_0_15px_black]"
          } bg-muted/20 rounded-full`}>
          {isDark ? <Sun /> : <Moon />}
        </button>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
