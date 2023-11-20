import Reserve from "../components/Reserve";
import Card from "../components/Card";
import "./Bookings.scss";

const Bookings = () => {
  return (
    <div className="bookings">
      <header className="bookings__header">
        <h1>Hostfully Tech Test</h1>
      </header>
      <main className="bookings__content">
        <h2>Bookings</h2>
        <Reserve />
        <Card />
      </main>
    </div>
  );
};

export default Bookings;
