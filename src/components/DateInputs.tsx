import { useState } from "react";
import { format, isBefore } from "date-fns";
import { getMinCheckoutDate } from "./DateInputs.helper";

const DateInputs = () => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const onCheckInChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckInDate = evt.target.value
    if(checkOut && isBefore(new Date(checkOut), new Date(newCheckInDate))) {
      setCheckOut("")
    }
    setCheckIn(newCheckInDate)
  }

  const onCheckOutChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(evt.target.value)
  }

  return (
    <>
      <label>
        Check-in date
        <input
          required
          type="date"
          name="checkIn"
          value={checkIn}
          onChange={onCheckInChange}
          min={format(new Date(), "yyyy-MM-dd")}
        />
      </label>
      <label>
        Check-out date
        <input
          required
          type="date"
          name="checkOut"
          value={checkOut}
          onChange={onCheckOutChange}
          min={getMinCheckoutDate(checkIn)}
        />
      </label>
    </>
  );
};

export default DateInputs;
