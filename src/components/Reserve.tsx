import { useState, useRef, useEffect } from "react";
import useBookingsContext from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import {
  TOAST_DEFAULT,
  addNewBooking,
  getReservationData,
  validateBooking,
} from "./Reserve.helper";
import "./Reserve.scss";
import DateInputs from "./DateInputs";
import * as Toast from "@radix-ui/react-toast";

const Reserve = () => {
  const { bookings, setBookings } = useBookingsContext();
  const [toast, setToast] = useState(TOAST_DEFAULT);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const newReservation = getReservationData(evt);
    if (!newReservation) return;

    setToast(TOAST_DEFAULT);
    window.clearTimeout(timerRef.current);
    const { valid, message } = validateBooking(newReservation, bookings);

    if (valid) {
      setBookings(addNewBooking(bookings, newReservation));
      evt.currentTarget.reset();
    }

    timerRef.current = window.setTimeout(() => {
      setToast({ open: true, message, valid });
    }, 100);
  };

  return (
    <form className="reserve" onSubmit={onSubmit}>
      <label>
        Where are you going?
        <input required name="city" placeholder="Enter your destination city" />
      </label>
      <DateInputs />

      <Toast.Provider swipeDirection="right">
        <button type="submit" className="reserve__button">
          <img src={plusCircled} alt="" />
          Reserve
        </button>
        <Toast.Root
          open={toast.open}
          onOpenChange={() => setToast(TOAST_DEFAULT)}
          className={`toast__root${toast.valid ? "" : "--invalid"}`}
        >
          <Toast.Title className="toast__title">{toast.message}</Toast.Title>
          <Toast.Action asChild altText="Close toast">
            <button className="toast__close">X</button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="toast__viewport" />
      </Toast.Provider>
    </form>
  );
};

export default Reserve;
