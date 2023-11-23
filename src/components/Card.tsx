import pencil from "../svgs/pencil.svg";
import crossCircled from "../svgs/cross-circled.svg";
import "./Card.scss";
import useBookingsContext, { BookingType } from "../contexts/BookingsContext";
import { cancelBooking, formatBookingDate } from "./Card.helper";

type CardType = { index: number } & BookingType;

const Card = ({ city, checkIn, checkOut, status, index }: CardType) => {
  const { setBookings } = useBookingsContext();
  const isActive = status === "Confirmed";

  const onCancel = () => {
    setBookings((prev) => cancelBooking(prev, index));
  };

  return (
    <div className="card">
      <div className={`card__content${isActive ? "" : "--history"}`}>
        <strong>Hotel {city} Inn</strong>
        <span>
          {formatBookingDate(checkIn)} - {formatBookingDate(checkOut)} * {city}
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
