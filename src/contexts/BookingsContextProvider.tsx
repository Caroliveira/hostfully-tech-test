import { ReactNode, useState } from "react";
import { BookingType, BookingsContext } from "./BookingsContext";
import historyMock from "../mocks/historyMock";

const BookingsContextProvider = ({ children }: { children: ReactNode}) => {
  const [bookings, setBookings] = useState<BookingType[]>(historyMock);

  return (
    <BookingsContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
