import Data from "../data/Data.json";
import Project from "./Project";

function Projects() {
  const data = Data.projects;

  return (
    <>
      <div id="projects" className="text-center">
        <h1 className="mb-5 text-5xl font-bold">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
        {data.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
