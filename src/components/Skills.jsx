import Data from "../data/Data.json";
import Skill from "./Skill";

function Skills() {
  const data = Data.skills;

  return (
    <>
      <div id="skills" className="text-center">
        <h1 className="mb-5 text-5xl font-bold">SKILLS</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
        {data.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default Skills;
