import { PropTypes } from "prop-types";

function Project({ project: { name, github, liveUrl } }) {
  return (
    <div className="card">
      <div className="flex-row items-center text-center">
        <div className="">
          <h2 className="text-2xl">{name}</h2>
          {github && (
            <a href={github} className="btn btn-ghost">
              Github Repo
            </a>
          )}

          {liveUrl && (
            <a href={liveUrl} className="btn btn-ghost">
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
