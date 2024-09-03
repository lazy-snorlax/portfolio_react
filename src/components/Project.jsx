import { PropTypes } from "prop-types";

function Project({ project: { name, github, liveUrl, languages } }) {
  return (
    <div className="card w-96 bg-neutral shadow-md">
      <div className="flex-row items-center">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {name}
          </h2>
          <div className="badges text-center">
            {languages.map((lang) => (
              <div className="badge badge-outline badge-accent mx-1">{lang}</div>
            ))}
          </div>
          <div className="card-actions justify-center">
            {github && (
              <a href={github} className="btn btn-primary">
                Github
              </a>
            )}

            {liveUrl && (
              <a href={liveUrl} target="_blank" className="btn btn-primary">
                Application Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
