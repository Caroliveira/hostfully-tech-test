import pencil from '../svgs/pencil.svg';
import crossCircled from '../svgs/cross-circled.svg';
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__content">
        <span>Hotel Test Inn</span>
        <span>April 1 - April 23 * Quebec City</span>
        <span>Canceled</span>
      </div>
      <div>
        <span><img src={pencil} alt="" /> Change dates</span>
        <span><img src={crossCircled} alt="" /> Cancel your booking</span>
      </div>
    </div>
  );
};

export default Card;
