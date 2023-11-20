import { BookingType } from "../contexts/BookingsContext";

const historyMock: BookingType[] = [
    {
        city: 'São Paulo',
        checkIn: '05-05-2020',
        checkOut: '06-06-2020',
        status: 'Canceled'
    },
    {
        city: 'New York City',
        checkIn: '02-02-2020',
        checkOut: '03-03-2020',
        status: 'Completed'
    }
]

export default historyMock;
