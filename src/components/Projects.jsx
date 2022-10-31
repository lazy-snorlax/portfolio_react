import Data from "../data/Data.json";
import Project from "./Project";

function Projects() {
  const data = Data.projects;

  return (
    <>
      <h2 className="text-center text-3xl mb-3">Projects</h2>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
        {data.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
