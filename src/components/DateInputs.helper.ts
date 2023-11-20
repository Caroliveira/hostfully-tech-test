import { format } from "date-fns";

export const getMinCheckoutDate = (checkIn?: string) => {
  const today = new Date();
  const date = checkIn? new Date(checkIn) : today;
  date.setDate(date.getDate() + 1);
  return format(date, 'yyyy-MM-dd');
};