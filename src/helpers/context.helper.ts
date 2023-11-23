import { BookingType } from "../contexts/BookingsContext";

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
  for (const booking of bookings) {
    if (booking.status !== "Confirmed") break;
    if (isDateOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut)) {
      return {
        valid: false,
        message: "Dates overlap with an existing booking.",
      };
    }
  }
  return { valid: true, message: "Booking successfully made!" };
};

export const addBooking = (
  bookings: BookingType[],
  newBooking: BookingType
) => {
  const auxBookings = [...bookings];
  const index = auxBookings.findIndex((booking) => {
    return (
      new Date(newBooking.checkIn) > new Date(booking.checkIn) ||
      booking.status !== "Confirmed"
    );
  });
  if (index === -1) auxBookings.push(newBooking);
  else auxBookings.splice(index, 0, newBooking);
  return auxBookings;
};
