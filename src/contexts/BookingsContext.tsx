import { createContext, useContext } from "react";

type BookingsContextType = {
  test: string;
  setTest: (test: string) => void;
};

const defaultContextValue: BookingsContextType = {
  test: "",
  setTest: () => {},
};

export const BookingsContext =
  createContext<BookingsContextType>(defaultContextValue);

const useBookingsContext = () => {
  const context = useContext(BookingsContext);
  return context;
};

export default useBookingsContext;
