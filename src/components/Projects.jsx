import Data from "../data/Data.json";
import Project from "./Project";

function Projects() {
  const data = Data.projects;

  return (
    <>
      <a href="#projects">
        <h1 className="text-center text-3xl mb-5">Projects</h1>
      </a>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
        {data.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
