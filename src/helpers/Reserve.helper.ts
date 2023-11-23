import { BookingType } from "../contexts/BookingsContext";

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