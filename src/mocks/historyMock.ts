import { BookingType } from "../contexts/BookingsContext";

const historyMock: BookingType[] = [
    {
        city: 'Barcelona',
        checkIn: '12-27-2023',
        checkOut: '01-03-2024',
        status: 'Confirmed'
    },
    {
        city: 'São Paulo',
        checkIn: '05-23-2021',
        checkOut: '06-06-2021',
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
