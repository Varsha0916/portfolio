import React from 'react';  // Add this import to resolve the error
import { render, screen, within} from '@testing-library/react';
import App from '../App';

{/*Testcase 1*/}

test('checking component loading', () => {
  render(<App />);
  expect(screen.queryByText(/What We Do\?/i)).toBeInTheDocument();
});

{/*Testcase 2*/}

test('checking next component loading', () => {
  render(<App />);
  expect(screen.queryByText(/We Develop Products That People Love to Use./i)).toBeInTheDocument();
});

{/*Testcase 3*/}

test('renders the image with correct src and alt text', () => {
  render(<App />);
  const image = screen.getByAltText('Product Image');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', './src/assets/images/img1.png');
});

{/*Testcase 4*/}

test('renders all child components correctly', () => {
  render(<App />);
  
  const designServicesComponent = screen.getByText(/Design Services/i); 
  expect(designServicesComponent).toBeInTheDocument();

  const aimlServicesComponent = screen.getByText("AI/ML Solutions"); 
  expect(aimlServicesComponent).toBeInTheDocument();
  
});

{/*Testcase 5*/}

test('renders the description paragraph correctly', () => {
  render(<App />);
  const section = screen.getByTestId('paragraph');
const description = within(section).getByText(
  /We specialize in developing products/i
);
  expect(description).toBeInTheDocument();
});

{/*Testcase 6*/}

test('applies responsive classes correctly', () => {
  render(<App />);
  const section = screen.getByTestId('main-section');
  expect(section).toHaveClass('bg-black h-scroll w-screen flex items-center justify-center');
});

