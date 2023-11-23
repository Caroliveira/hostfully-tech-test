import { BookingType } from "../contexts/BookingsContext";

const historyMock: BookingType[] = [
    {
        city: 'Barcelona',
        checkIn: '2023-12-27',
        checkOut: '2024-01-03',
        status: 'Confirmed'
    },
    {
        city: 'São Paulo',
        checkIn: '2025-05-23',
        checkOut: '2025-06-06',
        status: 'Canceled'
    },
    {
        city: 'New York City',
        checkIn: '2020-02-02',
        checkOut: '2020-03-03',
        status: 'Completed'
    }
]

export default historyMock;
