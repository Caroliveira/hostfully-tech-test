import { BookingType } from "../contexts/BookingsContext";

export const TOAST_DEFAULT = { open: false, message: "", valid: false };

export const getReservationData = (
  evt: React.FormEvent<HTMLFormElement>
): BookingType | null => {
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

const isDateOverlap = (
  newCheckIn: string,
  newCheckOut: string,
  existingCheckIn: string,
  existingCheckOut: string
) => {
  const newInDate = new Date(newCheckIn);
  const newOutDate = new Date(newCheckOut);
  const existingInDate = new Date(existingCheckIn);
  const existingOutDate = new Date(existingCheckOut);
  return newInDate < existingOutDate && newOutDate > existingInDate;
};

export const validateBooking = (
  { checkIn, checkOut }: BookingType,
  bookings: BookingType[]
) => {
  const validation = { valid: true, message: "Booking successfully made!" };
  bookings.forEach((booking) => {
    if (isDateOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut)) {
      validation.valid = false;
      validation.message = "Dates overlap with an existing booking.";
    }
  });
  return validation;
};
