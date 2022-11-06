import { PropTypes } from "prop-types";

function Skill({ skill: { name, icon } }) {
  return (
    <div className="card shadow-md side bg-neutral">
      <div className="flex-row items-center card-body">
        <div className="">
          <i className={icon !== "" ? icon + " text-7xl text-center" : ""}></i>
        </div>
        <h2 className="card-title uppercase">{name}</h2>
      </div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
