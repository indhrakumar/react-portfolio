import { MenuIcon, X } from "lucide-react";

function Navbar({ setPage, isOpen, setIsOpen }) {
  const handlePage = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <nav className=" sticky top-0 z-50 h-20  w-full px-4 border-b  border-gray-800 bg-black/80 text-cyan-300 backdrop-blur-sm flex justify-between items-center font-mulish">
      {/* Logo */}
      <div
        className="text-cyan-400 font-bold text-2xl lg:text-4xl"
        style={{ textShadow: "0 0 20px" }}>
        Indhra Kumar <span className="text-blue-600">R M</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6">
        <button onClick={() => handlePage("home")}>Home</button>

        <button onClick={() => handlePage("about")}>About</button>
        <button onClick={() => handlePage("education")}>Education</button>

        <button onClick={() => handlePage("skills")}>Skills</button>

        <button onClick={() => handlePage("projects")}>Projects</button>

        <button onClick={() => handlePage("contact")}>Contact</button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </button>
    </nav>
  );
}

export default Navbar;
