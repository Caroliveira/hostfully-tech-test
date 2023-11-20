import { format } from "date-fns";
import { BookingType } from "../contexts/BookingsContext";

export const getReservationData = (evt: React.FormEvent<HTMLFormElement>): BookingType | null => {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);

  const city = formData.get("city")?.toString();
  const checkIn = formData.get("checkIn")?.toString();
  const checkOut = formData.get("checkOut")?.toString();

  if (!city || !checkIn || !checkOut) return null;
  return {
    city,
    checkIn,
    checkOut,
    status: "Confirmed",
  };
};

export const sortBookings = (bookings: BookingType[]) => {
  return bookings.sort((a, b) => {
    const dateA = new Date(a.checkIn);
    const dateB = new Date(b.checkIn);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getMinCheckoutDate = (checkIn?: string) => {
  const today = new Date();
  const date = checkIn? new Date(checkIn) : today;
  date.setDate(date.getDate() + 1);
  return format(date, 'yyyy-MM-dd');
};