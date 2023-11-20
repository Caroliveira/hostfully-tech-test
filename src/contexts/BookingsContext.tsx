import { createContext, useContext } from "react";

export type BookingType = {
  city: string;
  checkIn: string;
  checkOut: string;
  status: string;
};

type BookingsContextType = {
  bookings: BookingType[];
  setBookings: React.Dispatch<React.SetStateAction<BookingType[]>>
};

const defaultBookingsContext = {
  bookings: [],
  setBookings: () => {},
};

export const BookingsContext = createContext<BookingsContextType>(
  defaultBookingsContext
);

const useBookingsContext = (): BookingsContextType => {
  const context = useContext(BookingsContext);
  return context;
};

export default useBookingsContext;
