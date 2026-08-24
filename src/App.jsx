import { useState, useEffect } from "react";
import { PageProvider, usePage } from "./context/PageProvider";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";

import { ThemeContext } from "./context/ThemeContext";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function App() {
  const [page, setPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <PageProvider>
        <AppContent
          page={page}
          setPage={setPage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </PageProvider>
    </ThemeContext.Provider>
  );
}

function AppContent({ page, setPage, isOpen, setIsOpen }) {
  const { singlePage } = usePage();

  const [activePage, setActivePage] = useState("home");

  const pages = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "education", label: "Education" },
    { name: "skills", label: "Skills" },
    { name: "projects", label: "Project" },
    { name: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (singlePage) return;

    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [singlePage]);

  const handlePage = (pageName) => {
    if (singlePage) {
      setPage(pageName);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActivePage(pageName);
    } else {
      document.getElementById(pageName)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => setIsOpen(false), 300);
  };

  const mobileNavigation = (
    <div className={`w-full ${isOpen ? "visible" : "hidden"} relative`}>
      <div className="fixed bottom-0 left-0 w-full lg:hidden py-5 bg-bgDark/30 backdrop-blur-sm overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex w-max gap-5 px-[calc(50vw-42.5px)]">
          {pages.map((item) => (
            <button
              key={item.name}
              onClick={() => handlePage(item.name)}
              className={`min-w-21.25 px-3 py-1 bg-bg rounded-2xl whitespace-nowrap transition-all duration-300 scroll-snap-center font-bold ${
                activePage === item.name
                  ? "border border-gray-300 text-black bg-cyan-400 rounded-lg -translate-y-2 scale-110"
                  : "text-muted"
              }`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full relative bg-bgDark">
      <Navbar
        page={page}
        activePage={activePage}
        setPage={handlePage}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      {singlePage ? (
        <div className="min-h-[calc(100vh-100px)] w-full">
          {page === "home" && (
            <Home setPage={setPage} handlePage={handlePage} />
          )}

          {page === "about" && (
            <About setPage={setPage} handlePage={handlePage} />
          )}

          {page === "education" && (
            <Education setPage={setPage} handlePage={handlePage} />
          )}

          {page === "skills" && <Skills setPage={setPage} />}

          {page === "projects" && <Projects setPage={setPage} />}

          {page === "contact" && <Contact setPage={setPage} />}
        </div>
      ) : (
        <>
          <div id="home" data-section className="scroll-mt-20">
            <Home setPage={setPage} handlePage={handlePage} />
          </div>

          <div id="about" data-section className="scroll-mt-20">
            <About setPage={setPage} />
          </div>

          <div id="education" data-section className="scroll-mt-20">
            <Education setPage={setPage} />
          </div>

          <div id="skills" data-section className="scroll-mt-20">
            <Skills setPage={setPage} />
          </div>

          <div id="projects" data-section className="scroll-mt-20">
            <Projects setPage={setPage} />
          </div>

          <div id="contact" data-section className="scroll-mt-20">
            <Contact setPage={setPage} />
          </div>
        </>
      )}
      <button
        className={` lg:hidden fixed bottom-0 flex items-center justify-center ${isOpen ? "bottom-18" : ""} w-full text-text`}
        onClick={() => setIsOpen(!isOpen)}>
        <span className="flex items-center gap-2 bg-bgCard/30 px-3 py-1 rounded-lg backdrop-blur-sm">
          Menu {isOpen ? <BiDownArrow /> : <BiUpArrow />}{" "}
        </span>
      </button>
      {mobileNavigation}
    </div>
  );
}

export default App;
