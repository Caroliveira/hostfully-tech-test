import { useState } from "react";
import useBookingsContext from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import {
  getReservationData,
} from "../helpers/Reserve.helper";
import DateInputs from "./DateInputs";

const Reserve = () => {
  const { validateAndUpsertBooking } = useBookingsContext();
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newReservation = getReservationData(evt.currentTarget);
    if (!newReservation) return;
    if (validateAndUpsertBooking(newReservation)) {
      setCheckIn("");
      setCheckOut("");
      evt.currentTarget.reset();
    }
  };

  return (
    <form className="reserve" onSubmit={onSubmit}>
      <label>
        Where are you going?
        <input required name="city" placeholder="Enter your destination city" />
      </label>

      <DateInputs
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
      />

      <button type="submit" className="reserve__button">
        <img src={plusCircled} alt="" />
        Reserve
      </button>
    </form>
  );
};

export default Reserve;
