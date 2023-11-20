import useBookingsContext, { BookingType } from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import { getReservationData, sortBookings } from "./Reserve.helper";
import "./Reserve.scss";

const Reserve = () => {
  const { setBookings } = useBookingsContext();

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const newReservation = getReservationData(evt);
    if (!newReservation) return;
    setBookings((prev: BookingType[]) => sortBookings([...prev, newReservation]));
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
        <input required type="date" name="checkIn" />
      </label>
      <label>
        Check-out date
        <input required type="date" name="checkOut" />
      </label>
      <button type="submit" className="reserve__button">
        <img src={plusCircled} alt="" />
        Reserve
      </button>
    </form>
  );
};

export default Reserve;
