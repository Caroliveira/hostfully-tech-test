import * as Dialog from "@radix-ui/react-dialog";
import crossCircled from "../svgs/cross-circled.svg";
import useBookingsContext from "../contexts/BookingsContext";
import { cancelBooking } from "../helpers/components.helper";

type CancelModalType = {
  index: number;
  city: string;
};

const CancelModal = ({ index, city }: CancelModalType) => {
  const { setBookings } = useBookingsContext();

    const onCancel = () => {
      setBookings((prev) => cancelBooking(prev, index));
    };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button">
          <img src={crossCircled} alt="" /> Cancel reservation
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog__overlay" />
        <Dialog.Content className="dialog__content">
          <Dialog.Close asChild>
            <button className="dialog__close" aria-label="Close">
              X
            </button>
          </Dialog.Close>
          <Dialog.Title className="dialog__title">
            Are you sure you wanna cancel?
          </Dialog.Title>
          <Dialog.Description className="dialog__description">
            Cancelling your reservation means giving up your booking at{" "}
            <strong>Hotel {city} Inn</strong>. Once you cancel, your reservation
            spot becomes available to other guests, and we cannot guarantee that
            the same room will be available in the future.
          </Dialog.Description>
          <div className="dialog__buttons"
          >
          <Dialog.Close asChild>
            <button onClick={onCancel}>Yes, I'm sure</button>
          </Dialog.Close>
            <Dialog.Close asChild>
              <button>No, never mind</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CancelModal;
