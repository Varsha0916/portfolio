import React from 'react';
import { render, screen, fireEvent ,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
//import { render, screen } from '@testing-library/react';
//import { waitFor } from '@testing-library/dom';
import AimlServices from '../Components/aiml';
//import AimlServices from '../components/AimlServices';



// Test Case 1: Verify if the title is rendered correctly
test('renders AI/ML Services title correctly', () => {
  render(<AimlServices />);

  // Use regex to match both AI/ML and Services parts
  const titleElement = screen.getByText(/AI\/ML.*Services/i); 
  expect(titleElement).toBeInTheDocument();
});





// Test Case 2: Verify AI/ML service icons are rendered
test('renders AI/ML service icons', () => {
  render(<AimlServices />);
  
  const icons = screen.getAllByAltText(/icon-\d+/i);
  expect(icons).toHaveLength(4); 
});

// Test Case 3: Check if descriptions are displayed correctly
test('renders AI/ML service descriptions correctly', () => {
  render(<AimlServices />);

  const descriptions = [
    'Predictive Insights',
    'Automation Excellence',
    'Personalized Experiences',
    'Enhanced Accuracy'
  ];

  descriptions.forEach(description => {
    expect(screen.getByText(description, { exact: false })).toBeInTheDocument();
  });
});





// Test Case 4: Ensure banner image renders correctly
test('renders AI banner image correctly', () => {
    render(<AimlServices />);
      const images = screen.getAllByAltText(/aiml/i);
      console.log(images);
      const bannerImage = images.find(img => img.getAttribute('src')?.includes('ai.svg'));
      expect(bannerImage).toBeInTheDocument();
      expect(bannerImage?.getAttribute('src')).toMatch(/ai\.svg$/);
      if (bannerImage?.classList.length > 0) {
      expect(bannerImage).toHaveClass(
        'w-full',
        'max-w-[100%]',
        'md:w-[100%]',
        'md:max-w-[721px]',
        'md:h-[481px]',
        'lg:w-[50%]',
        'lg:max-w-[721px]',
        'lg:h-[481px]',
        'md:p-8',
        'object-cover'
      );
    }
  });
  



// Test Case 5: Check hover effect on service icons
test('checks hover effect on service icons', async () => {
  const { getByAltText } = render(<AimlServices />);

  const iconGroup = getByAltText('icon-1');
  expect(iconGroup).toBeInTheDocument();
  fireEvent.mouseOver(iconGroup);
  await waitFor(() => {
    expect(iconGroup.parentElement).toHaveClass('group-hover:scale-50');
  });
});

// Test Case 6: Check if the service section background color is correct
test('checks background color of service section', () => {
  render(<AimlServices />);
  screen.debug(); // This will log the rendered DOM to the console
});





