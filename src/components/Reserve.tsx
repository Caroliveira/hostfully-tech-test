import plusCircled from "../svgs/plus-circled.svg";
import "./Reserve.scss";

const Reserve = () => {
  return (
      <form className="reserve">
        <label>
          Where are you staying?
          <input />
        </label>
        <label>
          Check-in date
          <input type="date" />
        </label>
        <label>
          Check-out date
          <input type="date" />
        </label>
        <button className="reserve__button">
          <img src={plusCircled} alt="" />
          Reserve
        </button>
      </form>
  );
};

export default Reserve;
