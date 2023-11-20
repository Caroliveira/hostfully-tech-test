import useBookingsContext, { BookingType } from "../contexts/BookingsContext";
import plusCircled from "../svgs/plus-circled.svg";
import "./Reserve.scss";

const Reserve = () => {
  const { setBookings } = useBookingsContext();
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);

    const city = formData.get("city")?.toString();
    const checkIn = formData.get("checkIn")?.toString();
    const checkOut = formData.get("checkOut")?.toString();

    if (!city || !checkIn || !checkOut) return;
    const newReservation: BookingType = {
      city,
      checkIn,
      checkOut,
      status: "Confirmed",
    };
    setBookings((prev: BookingType[]) => [...prev, newReservation]);
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
