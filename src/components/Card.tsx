import pencil from "../svgs/pencil.svg";
import crossCircled from "../svgs/cross-circled.svg";
import "./Card.scss";
import useBookingsContext, { BookingType } from "../contexts/BookingsContext";
import { format } from "date-fns-tz";

type CardType = { index: number } & BookingType;

const Card = ({ city, checkIn, checkOut, status, index }: CardType) => {
  const { bookings, setBookings } = useBookingsContext();
  const isActive = status === "Confirmed";

  const formatDate = (date: string) => format(new Date(date), "LLL dd, yyyy");

  const onCancel = () => {
    const auxBookings = [...bookings];
    auxBookings[index].status = "Canceled";
    setBookings(auxBookings);
  };

  return (
    <div className="card">
      <div className={`card__content${isActive ? "" : "--history"}`}>
        <strong>Hotel {city} Inn</strong>
        <span>
          {formatDate(checkIn)} - {formatDate(checkOut)} * {city}
        </span>
        <span className={`card__content__status${isActive ? "--active" : ""}`}>
          {status}
        </span>
      </div>
      {isActive && (
        <div className="card__buttons">
          <button type="button">
            <img src={pencil} alt="" /> Change dates
          </button>
          <button type="button" onClick={onCancel}>
            <img src={crossCircled} alt="" /> Cancel reservation
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
