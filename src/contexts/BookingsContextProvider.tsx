import { ReactNode, useState } from "react";
import { BookingsContext } from "./BookingsContext";

const BookingsContextProvider = ({ children }: { children: ReactNode}) => {
  const [test, setTest] = useState("");

  return (
    <BookingsContext.Provider value={{ test, setTest }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;
