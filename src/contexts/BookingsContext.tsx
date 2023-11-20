import { createContext, useContext } from "react";

type BookingStatus = "Completed" | "Canceled" | "Confirmed";

export type BookingType = {
  city: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
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
