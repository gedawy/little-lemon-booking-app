import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="wip">
      <div className="wip__container">
        <FontAwesomeIcon className="wip-icon" icon={faPersonDigging} />
        <h1 className="wip__title">Under Construction</h1>
        <p className="wip__description">
          This page is currently under construction. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
