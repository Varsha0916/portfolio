import React from 'react';  // Add this import to resolve the error
import { render, screen } from '@testing-library/react';
import App from '../App';

test('checking component loading', () => {
  render(<App />);
  expect(screen.queryByText(/What We Do\?/i)).toBeInTheDocument();
});
