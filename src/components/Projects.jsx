import ProjectCard from "./ProjectCard";
import weatherApp from "../assets/project-img/weather-app.png";
import loantracking from "../assets/project-img/loan-tracker.png";
import qr from "../assets/project-img/qr.png";
import shop from "../assets/project-img/Shopping.png";
import todo from "../assets/project-img/todo.png";
import mealapi from "../assets/project-img/mealexplorer.png";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { isDark } = useTheme();
  const projects = [
    {
      title: "Weather App",
      image: weatherApp,
      about:
        "Real-time weather information with city search, temperature, humidity, wind speed, coordinates, and dynamic weather icons",
      techIcon: (
        <>
          <FaReact
            className={`text-cyan-300 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
          <SiTailwindcss
            className={`text-cyan-300 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/weather-api.git",
      openLink: "https://indhrakumar.github.io/weather-api/",
    },
    {
      title: "Loan Tracker",
      image: loantracking,
      about:
        "Track loans, payments, remaining balances, due dates, and repayment progress with a clean dashboard for easy financial management.",
      techIcon: (
        <>
          <FaHtml5
            className={`text-orange-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
          <FaCss3Alt
            className={`text-blue-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/loan-track.ergit",
      openLink: "https://indhrakumar.github.io/loan-tracker/",
    },
    {
      title: "Meal Explorer",
      image: mealapi,
      about:
        "Explore meals and recipes by category or search, with detailed ingredients, instructions, and food images.",
      techIcon: (
        <>
          <FaHtml5
            className={`text-orange-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <SiTailwindcss
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/meal-api.git",
      openLink: "https://indhrakumar.github.io/meal-api/",
    },
    {
      title: "QR Code Generator",
      image: qr,
      about:
        "Generate QR codes instantly from text or URLs with a simple interface and easy download functionality.",
      techIcon: (
        <>
          <FaHtml5
            className={`text-orange-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <FaReact
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <SiTailwindcss
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/QR-code-generator.git",
      openLink: "https://indhrakumar.github.io/QR-code-generator/",
    },
    {
      title: "Shopping Cart",
      image: shop,
      about:
        "Browse products, add or remove items from the cart, update quantities, and view the total price with a responsive shopping experience.",
      techIcon: (
        <>
          <FaHtml5
            className={`text-orange-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <FaReact
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <SiTailwindcss
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/Shopping-Cart.git",
      openLink: "https://indhrakumar.github.io/Shopping-Cart/",
    },
    {
      title: "ToDo App",
      image: todo,
      about:
        "Create, manage, edit, and complete tasks with status tracking, filtering, and an intuitive task management interface.",
      techIcon: (
        <>
          <FaHtml5
            className={`text-orange-500 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <SiTailwindcss
            className={`text-cyan-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />
          <RiJavascriptFill
            className={`text-yellow-400 h-full p-2 rounded-full border  ${isDark ? "bg-black/30 border-black shadow-[inset_0_0_7px_rgba(255,255,255,0.7)]" : "bg-slate-700 border-white shadow-[inset_0_0_5px_white]"} w-fit`}
          />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/To-Do.git",
      openLink: "https://indhrakumar.github.io/To-Do/",
    },
  ];
  return (
    <div className="text-5xl bg-bg text-text min-h-screen pt-20 font-mulish pb-50">
      <h1 className="text-6xl text-center font-bold mb-10">Projects</h1>
      <div className="grid gap-8 px-4 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            about={project.about}
            techIcon={project.techIcon}
            repolink={project.repolink}
            openLink={project.openLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
