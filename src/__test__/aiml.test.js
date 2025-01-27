import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AimlServices from '../Components/aiml'

// Test Case 1: Verify if the title is rendered correctly
test('renders AI/ML Services title correctly', () => {
  render(<AimlServices />);
  
  const titleElement = screen.getByText("AI/ML");
  expect(titleElement).toBeInTheDocument();
});

// Test Case 2: Verify AI/ML service icons are rendered
test('renders AI/ML service icons', () => {
  render(<AimlServices />);
  
  const icons = screen.getAllByRole('img'); // Assuming each icon is an image
  expect(icons).toHaveLength(4); // There should be 4 icons

  icons.forEach(icon => {
    expect(icon).toBeInTheDocument();
    // expect(icon).toHaveAttribute('src');
    // expect(icon).toHaveAttribute('alt');
  });
});

// Test Case 3: Check if descriptions are displayed correctly
test('renders AI/ML service descriptions correctly', () => {
  render(<AimlServices />);
  
  const descriptions = [
    'Predictive Insights for Data-Driven Decisions',
    'Automation Excellence for Enhanced Efficiency',
    'Personalized Experiences at Scale',
    'Enhanced Accuracy for Better Results'
  ];
  
  descriptions.forEach(description => {
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });
});

// Test Case 4: Check layout of the services section (grid)
test('AI/ML services grid layout', () => {
  render(<AimlServices />);
  
  const serviceGrid = screen.getByTestId('services-grid'); // Assuming the grid has a data-testid="services-grid"
  
  expect(serviceGrid).toBeInTheDocument();
  expect(serviceGrid).toHaveClass('grid-cols-1');
  expect(serviceGrid).toHaveClass('md:grid-cols-2');
  expect(serviceGrid).toHaveClass('lg:grid-cols-4');
});

// Test Case 5: Ensure banner image renders correctly
test('renders AI banner image correctly', () => {
  render(<AimlServices />);
  
  const bannerImage = screen.getByAltText('AI Services Banner'); // Assuming this is the alt text for the image
  expect(bannerImage).toBeInTheDocument();
  expect(bannerImage).toHaveAttribute('src', expect.stringContaining('ai.svg'));
});

// Test Case 6: Check hover effect on icons (use mouse event simulation)
test('checks hover effect on service icons', () => {
  render(<AimlServices />);
  
  const icon = screen.getAllByRole('img')[0]; // Get the first icon
  expect(icon).toHaveClass('group');
  
  // Simulate hover effect
  icon.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  expect(icon).toHaveClass('group-hover:scale-50');
  expect(icon).toHaveClass('group-hover:translate-x-[-2px]');
});

// Test Case 7: Check if the service section background color is correct
test('checks background color of service section', () => {
  render(<AimlServices />);
  
  const serviceSection = screen.getByTestId('service-section'); // Assuming this section has a data-testid="service-section"
  expect(serviceSection).toHaveStyle('background-color: #1e1e1e');
});
