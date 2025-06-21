import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";

const getStarRating = (number) => {
  let tracker = number;
  const distribution = [];

  for (let i = 0; i < 5; i++) {
    if (tracker >= 1) {
      distribution.push(1);
      tracker -= 1;
    } else if (tracker > 0) {
      distribution.push(0.5);
      tracker = 0;
    } else {
      distribution.push(0);
    }
  }

  return distribution;
};

function Rating({ number }) {
  return (
    <span>
      {getStarRating(number).map((value, index) =>
        value === 1 ? (
          <FontAwesomeIcon key={index} className="star" icon={faStar} />
        ) : value === 0.5 ? (
          <FontAwesomeIcon key={index} className="star" icon={faStarHalf} />
        ) : null
      )}
    </span>
  );
}

export default Rating;
