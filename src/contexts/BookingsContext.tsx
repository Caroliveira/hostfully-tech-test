import { createContext, useContext } from "react";

export type BookingType = {
  city: string;
  checkIn: string;
  checkOut: string;
  status: string;
};

type BookingsContextType = {
  history: BookingType[];
  setHistory: (history: BookingType[]) => void;
};

export const BookingsContext =
  createContext<BookingsContextType | null>(null);

const useBookingsContext = () => {
  const context = useContext(BookingsContext);
  return context;
};

export default useBookingsContext;
