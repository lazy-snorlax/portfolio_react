import { PropTypes } from "prop-types";

function Project({ project: { name, github, liveUrl, languages } }) {
  return (
    <div className="card w-96 bg-neutral shadow-md">
      <div className="flex-row items-center">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {name}
            <div className="badge badge-outline badge-accent">{languages}</div>
          </h2>
          <div className="card-actions justify-center">
            {github && (
              <a href={github} className="btn btn-ghost">
                Github
              </a>
            )}

            {liveUrl && (
              <a href={liveUrl} className="btn btn-ghost">
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
