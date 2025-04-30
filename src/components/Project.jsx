import { PropTypes } from "prop-types";

function Project({ project: { name, description, github, liveUrl, languages } }) {
  return (
    <div className="card w-100 bg-neutral shadow-md">
      <div className="flex-row items-center">
        <div className="card-body py-3">
          <div className="card-title justify-center mt-5 mb-1">
          {name}
          </div>
          <div className="badges text-center">
            {languages.map((lang) => (
              <div className="badge badge-outline badge-accent mx-1">{lang}</div>
            ))}
          </div>
          <p className="text-center">{description}</p>
          <div className="card-actions justify-center pb-3">
            {github && (
              <a href={github} className="btn btn-primary">
                Github Repo
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
