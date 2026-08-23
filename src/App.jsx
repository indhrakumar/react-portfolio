import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [page, setPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const pages = [
    {
      name: "home",
      label: "Home",
    },
    {
      name: "about",
      label: "About",
    },
    {
      name: "education",
      label: "Education",
    },
    {
      name: "skills",
      label: "Skills",
    },
    {
      name: "projects",
      label: "Project",
    },
    {
      name: "contact",
      label: "Contact",
    },
  ];

  const handlePage = (pageName) => {
    setPage(pageName);

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="min-h-screen w-full relative bg-bgDark">
        <Navbar
          page={page}
          setPage={handlePage}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

        <div className="min-h-[calc(100vh-1000px)] w-full">
          {page === "home" && <Home setPage={setPage} />}
          {page === "about" && <About setPage={setPage} />}
          {page === "education" && <Education setPage={setPage} />}
          {page === "skills" && <Skills setPage={setPage} />}
          {page === "projects" && <Projects setPage={setPage} />}
          {page === "contact" && <Contact setPage={setPage} />}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            w-full
            ${isOpen ? "visible" : "hidden"}
            relative
          `}>
          <div
            className="
              fixed
              bottom-0
              left-0
              w-full
              lg:hidden
              py-5
              bg-black/30
              backdrop-blur-sm
              overflow-x-auto
              overflow-y-hidden
              scrollbar-hide
            ">
            <div
              className="
                flex
                w-max
                gap-5
                px-[calc(50vw-42.5px)]
              ">
              {pages.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handlePage(item.name)}
                  className={`
                    min-w-21.25
                    px-3
                    py-1
                    whitespace-nowrap
                    transition-all
                    duration-300
                    scroll-snap-center
                    font-bold
                    ${
                      page === item.name
                        ? "border border-gray-300 text-black bg-cyan-400 rounded-lg -translate-y-2 scale-110"
                        : "text-muted"
                    }
                  `}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
