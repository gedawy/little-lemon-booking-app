import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  return (
    <div className="confirmation">
      <div className="container confirmation__container">
        <FontAwesomeIcon className="confirm-icon" icon={faCheckCircle} />
        <h1 className="confirmation__title">Reservation Confirmed</h1>
        <p className="confirmation__message">
          Thank you! Your table at The Little Lemon Restaurant has been
          successfully reserved. We look forward to serving you a delightful
          experience.
        </p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
