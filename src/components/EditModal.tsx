import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useBookingsContext from "../contexts/BookingsContext";
import pencil from "../svgs/pencil.svg";
import DateInputs from "./DateInputs";

type EditModalType = {
  index: number;
  checkIn: string;
  checkOut: string;
  city: string;
};

const EditModal = ({ index, city, checkIn, checkOut }: EditModalType) => {
  const { bookings, validateAndUpsertBooking } = useBookingsContext();

  const [open, setOpen] = useState<boolean>(false);
  const [newCheckIn, setNewCheckIn] = useState<string>("");
  const [newCheckOut, setNewCheckOut] = useState<string>("");

  useEffect(() => {
    setNewCheckIn(checkIn);
    setNewCheckOut(checkOut);
  }, [checkIn, checkOut]);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const auxBookings = [...bookings];
    auxBookings[index].checkIn = newCheckIn;
    auxBookings[index].checkOut = newCheckOut;
    const [updatedBooking] = auxBookings.splice(index, 1);
    if (validateAndUpsertBooking(updatedBooking, auxBookings)) {
      setNewCheckIn("");
      setNewCheckOut("");
      setOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button">
          <img src={pencil} alt="" /> Change dates
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog__overlay" />
        <Dialog.Content className="dialog__content">
          <Dialog.Close>
            <button className="dialog__close" aria-label="Close">
              X
            </button>
          </Dialog.Close>
          <Dialog.Title className="dialog__title">
            Reschedule your booking at Hotel {city} Inn
          </Dialog.Title>
          <form onSubmit={onSubmit}>
            <Dialog.Description className="dialog__description">
              <DateInputs
                checkIn={newCheckIn}
                setCheckIn={setNewCheckIn}
                checkOut={newCheckOut}
                setCheckOut={setNewCheckOut}
              />
            </Dialog.Description>
            <div className="dialog__buttons">
              <Dialog.Close asChild>
                <button type="button">Cancel</button>
              </Dialog.Close>
              <button type="submit">Reschedule</button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditModal;
