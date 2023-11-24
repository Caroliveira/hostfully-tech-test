import { format, parseISO } from "date-fns";
import { BookingType } from "../contexts/BookingsContext";

export const cancelBooking = (bookings: BookingType[], index: number) => {
  const auxBookings = [...bookings];
  auxBookings[index].status = "Canceled";
  const [canceledBooking] = auxBookings.splice(index, 1);

  let newIndex = -1;
  for (let i = auxBookings.length - 1; i >= 0; i--) {
    if (
      parseISO(canceledBooking.checkIn) <= parseISO(auxBookings[i].checkIn) ||
      auxBookings[i].status === "Confirmed"
    ) {
      newIndex = i + 1;
      break;
    }
  }

  if (newIndex === -1) {
    auxBookings.unshift(canceledBooking);
  } else {
    auxBookings.splice(newIndex, 0, canceledBooking);
  }

  return auxBookings;
};

export const getMinCheckoutDate = (checkIn?: string) => {
  let date = checkIn ? parseISO(checkIn) : new Date();
  date.setDate(date.getDate() + 1);
  return format(date, "yyyy-MM-dd");
};

export const getReservationData = (
    rawFormData: EventTarget & HTMLFormElement
  ): BookingType | null => {
    const formData = new FormData(rawFormData);
  
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