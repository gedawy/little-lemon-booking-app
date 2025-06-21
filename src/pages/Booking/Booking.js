import BookingForm from "../../components/BookingForm/BookingForm";
import "./Booking.css";

const Bookings = ({ availableTimes, dispatchAvailableTimes, submitForm }) => {
  console.log("availableTimes ===> ", availableTimes);
  return (
    <section className="booking">
      <h1 className="booking__title">Table Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
    </section>
  );
};

export default Bookings;
