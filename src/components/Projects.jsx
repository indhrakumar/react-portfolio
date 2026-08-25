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

function Projects() {
  const projects = [
    {
      title: "Weather App",
      image: weatherApp,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <FaReact color={"cyan"} /> <SiTailwindcss color={"cyan"} />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/weather-api.git",
      openLink: "https://indhrakumar.github.io/weather-api/",
    },
    {
      title: "Loan Tracker",
      image: loantracking,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <RiJavascriptFill color={"yellow"} />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/loan-track.ergit",
      openLink: "https://indhrakumar.github.io/loan-tracker/",
    },
    {
      title: "Meal Explorer",
      image: mealapi,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <FaReact color={"cyan"} /> <SiTailwindcss color={"cyan"} />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/meal-api.git",
      openLink: "https://indhrakumar.github.io/meal-api/",
    },
    {
      title: "QR Code Generator",
      image: qr,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <FaReact color={"cyan"} /> <SiTailwindcss color={"cyan"} />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/QR-code-generator.git",
      openLink: "https://indhrakumar.github.io/QR-code-generator/",
    },
    {
      title: "Shopping Cart",
      image: shop,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <FaReact color={"cyan"} /> <SiTailwindcss color={"cyan"} />{" "}
        </>
      ),
      repolink: "https://github.com/indhrakumar/Shopping-Cart.git",
      openLink: "https://indhrakumar.github.io/Shopping-Cart/",
    },
    {
      title: "ToDo App",
      image: todo,
      about:
        "React + Vite Weather App Features Search any city Temperature Humidity Wind Speed Latitude & Longitude Dynamic Weather Icons Error Handling",
      techIcon: (
        <>
          <FaHtml5 color={"orangered"} /> <FaCss3Alt color={"blue"} />
          <FaReact color={"cyan"} /> <SiTailwindcss color={"cyan"} />{" "}
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
