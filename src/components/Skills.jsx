import Data from "../data/Data.json";
import Skill from "./Skill";

function Skills() {
  const data = Data.skills;

  return (
    <>
      <h1 className="text-center text-3xl">Skills</h1>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
        {data.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default Skills;
