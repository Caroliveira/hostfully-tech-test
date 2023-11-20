import { ReactNode, useState } from "react";
import { BookingType, BookingsContext } from "./BookingsContext";
import historyMock from "../mocks/historyMock";

const BookingsContextProvider = ({ children }: { children: ReactNode}) => {
  const [history, setHistory] = useState<BookingType[]>(historyMock);

  return (
    <BookingsContext.Provider value={{ history, setHistory }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
