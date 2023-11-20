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

const defaultContextValue: BookingsContextType = {
  history: [],
  setHistory: () => {},
};

export const BookingsContext =
  createContext<BookingsContextType>(defaultContextValue);

const useBookingsContext = () => {
  const context = useContext(BookingsContext);
  return context;
};

export default useBookingsContext;
