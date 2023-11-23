import { BookingType } from "../contexts/BookingsContext";

export const cancelBooking = (bookings: BookingType[], index: number) => {
  const auxBookings = [...bookings];
  auxBookings[index].status = "Canceled";
  const [canceledBooking] = auxBookings.splice(index, 1);

  let newIndex = -1;
  for (let i = auxBookings.length - 1; i >= 0; i--) {
    if (
      new Date(canceledBooking.checkIn) <= new Date(auxBookings[i].checkIn) ||
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
