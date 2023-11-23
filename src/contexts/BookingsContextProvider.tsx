import { ReactNode, useState } from "react";
import historyMock from "../mocks/historyMock";
import {
  BookingType,
  BookingsContext,
  TOAST_DEFAULT,
  ToastType,
} from "./BookingsContext";
import { addBooking, validateBooking } from "../helpers/context.helper";

const BookingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<BookingType[]>(historyMock);
  const [toast, setToast] = useState<ToastType>(TOAST_DEFAULT);

  const validateAndUpsertBooking = (
    booking: BookingType,
    updatedBookings = bookings
  ) => {
    setToast(TOAST_DEFAULT);
    const { valid, message } = validateBooking(booking, bookings);
    setToast({ open: true, message, valid });
    if (valid) setBookings(addBooking(updatedBookings, booking));
    return valid;
  };

  return (
    <BookingsContext.Provider
      value={{ bookings, setBookings, toast, setToast, validateAndUpsertBooking }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
