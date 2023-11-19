import React from 'react';
import { render, screen } from '@testing-library/react';
import Bookings from './Bookings';

test('renders learn react link', () => {
  render(<Bookings />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
