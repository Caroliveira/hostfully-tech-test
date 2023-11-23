import { format } from "date-fns";

export const getMinCheckoutDate = (checkIn?: string) => {
  let date = new Date();
  if (checkIn) {
    // To ensure that timezone won't be an issue
    const [year, month, day] = checkIn.split("-").map(Number);
    date = new Date(year, month - 1, day);
  }
  date.setDate(date.getDate() + 1);
  return format(date, "yyyy-MM-dd");
};
