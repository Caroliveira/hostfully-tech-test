import { format, isBefore } from "date-fns";
import { getMinCheckoutDate } from "../helpers/DateInputs.helper";

type DateInputsType = {
  checkIn: string;
  setCheckIn: (checkIn: string) => void;
  checkOut: string;
  setCheckOut: (checkOut: string) => void;
};

const DateInputs = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
}: DateInputsType) => {
  const onCheckInChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckInDate = evt.target.value;
    setCheckIn(newCheckInDate);
    if (checkOut && isBefore(new Date(checkOut), new Date(newCheckInDate))) {
      setCheckOut("");
    }
  };

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
          onChange={(evt) => setCheckOut(evt.target.value)}
          min={getMinCheckoutDate(checkIn)}
        />
      </label>
    </>
  );
};

export default DateInputs;
