import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "../../pages/About/About";
import Bookings from "../../pages/Booking/Booking";
import ConfirmedBooking from "../../pages/Booking/ConfirmedBooking";
import HomePage from "../../pages/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import Menu from "../../pages/Menu/Menu";
import Order from "../../pages/Order/Order";
import { fetchAPI, submitAPI } from "../../utils/fakeAPI";
import "./Main.css";

function Main() {
  const navigate = useNavigate();
  const updateTimes = (availableTimesState, action) => {
    if (action.type === "UPDATE") {
      const selectedDate = action.payload;
      return fetchAPI(new Date(selectedDate));
    }
  };
  const initializeTimes = (initialTimes) => [
    ...initialTimes,
    ...fetchAPI(new Date()),
  ];

  const submitForm = (formData) => {
    const response = submitAPI(formData);

    if (response) {
      navigate("/confirm");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  return (
    <main data-testid="main-content" className="main-container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="/booking"
          element={
            <Bookings
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirm" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
