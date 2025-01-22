import React from 'react';  // Add this import to resolve the error
import { render, screen } from '@testing-library/react';
import App from '../App';

test('checking component loading', () => {
  render(<App />);
  expect(screen.queryByText(/What We Do\?/i)).toBeInTheDocument();
});

test('checking next component loading', () => {
  render(<App />);
  expect(screen.queryByText(/We Develop Products That People Love to Use./i)).toBeInTheDocument();
});
