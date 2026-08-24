import ProjectCard from "./ProjectCard";
import weatherApp from "../assets/project-img/weather-app.png";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

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
  ];
  return (
    <div className="text-5xl text-text min-h-screen pt-20 font-mulish">
      <h1 className="text-6xl text-center font-bold mb-10">Projects</h1>
      <div className="grid gap-5 px-4 max-w-7xl mx-auto grid-cols-2 lg:grid-cols-3">
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
