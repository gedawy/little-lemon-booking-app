import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];

  test("Renders the BookingForm Button Text", () => {
    render(<BookingForm availableTimes={mockTimes} />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders an error and disables submit button in case number of guests equals zero", () => {
    render(<BookingForm availableTimes={mockTimes} />);

    const numOfGuests = screen.getByLabelText("Number of guests");
    fireEvent.change(numOfGuests, { target: { value: "0" } });
    fireEvent.blur(numOfGuests);

    const errorMsg = screen.getByTestId("error-guests");
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toHaveTextContent(
      "Please enter a number between 1 and 10"
    );

    const submitBtn = screen.getByTestId("submit-btn");
    expect(submitBtn).toBeDisabled();
  });
});
