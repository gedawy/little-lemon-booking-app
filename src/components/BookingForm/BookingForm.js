import { format } from "date-fns";
import { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimes,
  submitForm,
}) => {
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);
  const [bookingDetails, setBookingDetails] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    time: availableTimes[0],
    numOfGuests: 1,
    occasion: "Birthday",
  });
  const [touchedFlags, setTouchedFlags] = useState({
    date: false,
    time: false,
    numOfGuests: false,
    occasion: false,
  });
  const isDateValid = bookingDetails.date;
  const isTimeValid = bookingDetails.time;
  const isNumOfGuestsValid = Number(bookingDetails.numOfGuests) > 0;
  const isOccasionValid = bookingDetails.occasion;

  const errorExists =
    !isDateValid || !isTimeValid || !isNumOfGuestsValid || !isOccasionValid;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    if (name === "date")
      dispatchAvailableTimes({ type: "UPDATE", payload: value });

    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFieldTouch = (e) => {
    const { name } = e.target;

    setTouchedFlags((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    submitForm(bookingDetails);
  };

  return (
    <form className="booking-form">
      <div className="booking-form__box">
        <label className="booking-form__label" htmlFor="res-date">
          Choose date
          <span className="required">*</span>
        </label>
        <input
          className="booking-form__input"
          type="date"
          id="res-date"
          name="date"
          min={format(new Date(), "yyyy-MM-dd")}
          value={bookingDetails.date}
          onChange={handleFieldChange}
          onBlur={handleFieldTouch}
        />
        {touchedFlags.date && !isDateValid && (
          <p className="error-text">Please choose a valid date</p>
        )}
      </div>

      <div className="booking-form__box">
        <label className="booking-form__label" htmlFor="res-time">
          Choose time
          <span className="required">*</span>
        </label>
        <select
          className="booking-form__input"
          id="res-time"
          name="time"
          value={bookingDetails.time}
          onChange={handleFieldChange}
          onBlur={handleFieldTouch}
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="booking-form__box">
        <label className="booking-form__label" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="booking-form__input"
          type="number"
          min={1}
          max={10}
          id="guests"
          name="numOfGuests"
          value={bookingDetails.numOfGuests}
          onChange={handleFieldChange}
          onBlur={handleFieldTouch}
        />
        {touchedFlags.numOfGuests && !isNumOfGuestsValid && (
          <p className="error-text" data-testid="error-guests">
            Please enter a number between 1 and 10
          </p>
        )}
      </div>

      <div className="booking-form__box">
        <label className="booking-form__label" htmlFor="occasion">
          Occasion
          {/* <span className="required">*</span> */}
        </label>
        <select
          className="booking-form__input"
          id="occasion"
          name="occasion"
          value={bookingDetails.occasion}
          onChange={handleFieldChange}
          onBlur={handleFieldTouch}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button
        data-testid="submit-btn"
        className="btn-primary booking-btn"
        disabled={errorExists}
        type="submit"
        onClick={handleSubmission}
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
