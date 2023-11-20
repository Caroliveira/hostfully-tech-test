import { format } from "date-fns";

export const monthDayFormat = (date: string) =>
  format(new Date(date), "LLL d");
