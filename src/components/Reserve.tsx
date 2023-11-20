import { format } from "date-fns";
import useBookingsContext from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import {
  getMinCheckoutDate,
  getReservationData,
  sortBookings,
} from "./Reserve.helper";
import "./Reserve.scss";
import { useState } from "react";

const Reserve = () => {
  const { setBookings } = useBookingsContext();
  const [checkIn, setCheckIn] = useState<string>();

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const newReservation = getReservationData(evt);
    if (!newReservation) return;
    setBookings((prev) => sortBookings([...prev, newReservation]));
    evt.currentTarget.reset();
  };

  return (
    <form className="reserve" onSubmit={onSubmit}>
      <label>
        Where are you going?
        <input required name="city" />
      </label>
      <label>
        Check-in date
        <input
          required
          type="date"
          name="checkIn"
          onChange={(evt) => setCheckIn(evt.target.value)}
          min={format(new Date(), "yyyy-MM-dd")}
        />
      </label>
      <label>
        Check-out date
        <input
          required
          type="date"
          name="checkOut"
          min={getMinCheckoutDate(checkIn)}
        />
      </label>
      <button type="submit" className="reserve__button">
        <img src={plusCircled} alt="" />
        Reserve
      </button>
    </form>
  );
};

export default Reserve;
