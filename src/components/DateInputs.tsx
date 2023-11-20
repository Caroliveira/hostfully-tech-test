import { format } from "date-fns";
import { useState } from "react";
import { getMinCheckoutDate } from "./DateInputs.helper";

const DateInputs = () => {
  const [checkIn, setCheckIn] = useState<string>();

  return (
    <>
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
    </>
  );
};

export default DateInputs;
