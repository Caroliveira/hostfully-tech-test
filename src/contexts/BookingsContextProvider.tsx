import { ReactNode, useState } from "react";
import { BookingType, BookingsContext } from "./BookingsContext";

const BookingsContextProvider = ({ children }: { children: ReactNode}) => {
  const [history, setHistory] = useState<BookingType[]>([]);

  return (
    <BookingsContext.Provider value={{ history, setHistory }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
