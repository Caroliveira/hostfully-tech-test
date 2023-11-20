import pencil from "../svgs/pencil.svg";
import crossCircled from "../svgs/cross-circled.svg";
import "./Card.scss";
import { BookingType } from "../contexts/BookingsContext";
import { monthDayFormat } from "../utils";

const Card = ({ city, checkIn, checkOut, status }: BookingType) => {
  const isActive = status === "Confirmed";

  return (
    <div className="card">
      <div className={`card__content${isActive ? "" : "--history"}`}>
        <strong>Hotel {city} Inn</strong>
        <span>
          {monthDayFormat(checkIn)} - {monthDayFormat(checkOut)} * {city}
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
          <button type="button">
            <img src={crossCircled} alt="" /> Cancel your booking
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
