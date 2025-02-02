import React from 'react';  
import { render, screen } from '@testing-library/react';
import App from '../App';

// Test Case 1: Check if the main heading is rendered
it('should render the main heading', () => {
  render(<App />);
  expect(screen.getByText(/What We Do\?/i)).toBeInTheDocument();
});

// Test Case 2: Check if the tagline is rendered
it('should render the tagline correctly', () => {
  render(<App />);
  expect(screen.getByText(/We Develop Products That People Love to Use./i)).toBeInTheDocument();
});

// Test Case 3: Check if an image is rendered with the correct src and alt attributes
it('should render the product image correctly', () => {
  render(<App />);
  const image = screen.getByAltText('Product Image');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', './src/assets/images/service2.svg');
});

// Test Case 4: Check if all child components are loaded
it('should render all expected child components', () => {
  render(<App />);
  screen.debug(); 

  const expectedTexts = [
    /Design\s*Services/i,
    /Design\s*Stages/i,
    /Embedded\s*systems/i,
    /Blockchain/i,
    /Our\s*Story/i
  ];

  expectedTexts.forEach(text => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  // More flexible check for AimlServices if it's dynamically rendered or hidden
  expect(screen.queryByText(/AimlServices/i)).not.toBeNull();
});


// Test Case 5: Check if the main description is present
it('should render the description paragraph', () => {
  render(<App />);
  const descriptions = screen.getAllByText(/We specialize in developing products that not only meet user needs/i);
  expect(descriptions[0]).toBeInTheDocument();  // or descriptions[1] depending on which one you want
});


// Test Case 6: Check if the main section has correct classes for styling
it('should apply correct styling classes to the main section', () => {
  render(<App />);
  const section = document.querySelector('.bg-black'); // Using querySelector to find by class
  expect(section).toHaveClass('bg-black overflow-x-hidden flex items-center justify-center text-center flex-col pb-20');
});
