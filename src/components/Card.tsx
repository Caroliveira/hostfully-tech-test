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
        <span>edit</span>
        <span>cancel</span>
      </div>
    </div>
  );
};

export default Card;
