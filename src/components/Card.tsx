import pencil from "../svgs/pencil.svg";
import crossCircled from "../svgs/cross-circled.svg";
import "./Card.scss";
import { BookingType } from "../contexts/BookingsContext";
import { monthDayFormat } from "../utils";

const Card = ({ city, checkIn, checkOut, status }: BookingType) => {
  const isHistory = ['Completed', 'Canceled'].includes(status);
  return (
    <div className="card">
      <div className="card__content">
        <span>Hotel {city} Inn</span>
        <span>
          {monthDayFormat(checkIn)} - {monthDayFormat(checkOut)} * {city}
        </span>
        <span>{status}</span>
      </div>
      {!isHistory && <div>
        <span>
          <img src={pencil} alt="" /> Change dates
        </span>
        <span>
          <img src={crossCircled} alt="" /> Cancel your booking
        </span>
      </div>}
    </div>
  );
};

export default Card;
