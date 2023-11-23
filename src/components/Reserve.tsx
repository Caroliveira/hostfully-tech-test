import { useState } from "react";
import useBookingsContext, { TOAST_DEFAULT } from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import {
  addNewBooking,
  getReservationData,
  validateBooking,
} from "../helpers/Reserve.helper";
import DateInputs from "./DateInputs";

const Reserve = () => {
  const { bookings, setBookings, setToast } = useBookingsContext();
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const newReservation = getReservationData(evt);
    if (!newReservation) return;

    setToast(TOAST_DEFAULT);
    const { valid, message } = validateBooking(newReservation, bookings);

    if (valid) {
      setBookings(addNewBooking(bookings, newReservation));
      setCheckIn("");
      setCheckOut("");
      evt.currentTarget.reset();
    }
    setToast({ open: true, message, valid });
  };

  return (
    <form className="reserve" onSubmit={onSubmit}>
      <label>
        Where are you going?
        <input required name="city" placeholder="Enter your destination city" />
      </label>

      <DateInputs
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
      />

      <button type="submit" className="reserve__button">
        <img src={plusCircled} alt="" />
        Reserve
      </button>
    </form>
  );
};

export default Reserve;
