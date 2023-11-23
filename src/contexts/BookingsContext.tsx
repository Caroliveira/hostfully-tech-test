import { createContext, useContext } from "react";

type BookingStatus = "Completed" | "Canceled" | "Confirmed";

export type BookingType = {
  city: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
};

export type ToastType = { open: boolean; message: string; valid: boolean };

export const TOAST_DEFAULT = { open: false, message: "", valid: false };

type BookingsContextType = {
  bookings: BookingType[];
  setBookings: React.Dispatch<React.SetStateAction<BookingType[]>>;
  toast: ToastType;
  setToast: React.Dispatch<React.SetStateAction<ToastType>>;
  validateAndUpsertBooking: (
    booking: BookingType,
    updatedBookings?: BookingType[]
  ) => boolean;
};

const defaultBookingsContext: BookingsContextType = {
  bookings: [],
  setBookings: () => {},
  toast: TOAST_DEFAULT,
  setToast: () => {},
  validateAndUpsertBooking: () => false,
};

export const BookingsContext = createContext<BookingsContextType>(
  defaultBookingsContext
);

const useBookingsContext = (): BookingsContextType => {
  const context = useContext(BookingsContext);
  return context;
};

export default useBookingsContext;
