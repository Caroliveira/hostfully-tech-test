import Reserve from "../components/Reserve";
import Card from "../components/Card";
import "./Bookings.scss";
import useBookingsContext from "../contexts/BookingsContext";

const Bookings = () => {
  const context = useBookingsContext();
  return (
    <div className="bookings">
      <header className="bookings__header">
        <h1>Hostfully Tech Test</h1>
      </header>
      <main className="bookings__content">
        <h2>Bookings</h2>
        <Reserve />
        {context?.bookings.map((booking, index) => (
          <Card key={index} index={index} {...booking} />
        ))}
      </main>
    </div>
  );
};

export default Bookings;
