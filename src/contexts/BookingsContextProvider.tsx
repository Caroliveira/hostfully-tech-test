import { ReactNode, useState } from "react";
import historyMock from "../mocks/historyMock";
import {
  BookingType,
  BookingsContext,
  TOAST_DEFAULT,
  ToastType,
} from "./BookingsContext";

const BookingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<BookingType[]>(historyMock);
  const [toast, setToast] = useState<ToastType>(TOAST_DEFAULT);

  return (
    <BookingsContext.Provider
      value={{ bookings, setBookings, toast, setToast }}
    >
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
