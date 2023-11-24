import { format, parseISO } from "date-fns";
import { BookingType } from "../contexts/BookingsContext";
import CancelModal from "./CancelModal";
import EditModal from "./EditModal";

export type CardType = { index: number } & BookingType;

const Card = (props: CardType) => {
  const { city, checkIn, checkOut, status } = props;
  const isActive = status === "Confirmed";

  const formatBookingDate = (date: string) => format(parseISO(date), "LLL dd, yyyy");

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
          <EditModal {...props} />
          <CancelModal {...props} />
        </div>
      )}
    </div>
  );
};

export default Card;
