import Reserve from "../components/Reserve";
import Card from "../components/Card";
import useBookingsContext, { TOAST_DEFAULT } from "../contexts/BookingsContext";
import * as Toast from "@radix-ui/react-toast";

const Bookings = () => {
  const { bookings, toast, setToast } = useBookingsContext();
  return (
    <Toast.Provider swipeDirection="right">
      <div className="bookings">
        <header className="bookings__header">
          <h1>Hostfully Tech Test</h1>
        </header>
        <main className="bookings__content">
          <h2>Bookings</h2>
          <Reserve />
          {bookings.map((booking, index) => (
            <Card key={index} index={index} {...booking} />
          ))}
        </main>
      </div>
      <Toast.Root
        open={toast.open}
        onOpenChange={() => setToast(TOAST_DEFAULT)}
        className={`toast__root${toast.valid ? "" : "--invalid"}`}
      >
        <Toast.Title className="toast__title">{toast.message}</Toast.Title>
        <Toast.Action asChild altText="Close toast">
          <button className="toast__close">X</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="toast__viewport" />
    </Toast.Provider>
  );
};

export default Bookings;
