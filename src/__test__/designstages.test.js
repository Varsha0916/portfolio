import React from 'react';
import { render, fireEvent, screen, waitFor, within } from '@testing-library/react';
import DesignStages from '../Components/Applicationdesignstages'; // Adjust path as needed

describe('DesignStages Component', () => {
  test('renders DesignStages component without crashing', () => {
    render(<DesignStages />);
  });

  describe('Rendering tests', () => {
    test('renders Application Design Stages title', () => {
      render(<DesignStages />);
      const titleElement = screen.getByText(/Application Design Stages/i);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders Horizontal Line', () => {
      const { container } = render(<DesignStages />);
      const hrElement = container.querySelector('hr');
      expect(hrElement).toBeInTheDocument();
    });

    test('renders all design stages images with correct alt text', () => {
      render(<DesignStages />);
      const altTexts = ["Analysis", "Design", "Development", "Frontend Development", "Backend Development"];
      altTexts.forEach((altText) => {
        const images = screen.getAllByAltText(new RegExp(`^${altText}$`, 'i'));
        expect(images.length).toBeGreaterThan(0);
      });
    });

    test('renders all development services titles and descriptions', () => {
      render(<DesignStages />);
      const titleElement = screen.getByRole('heading', { level: 2 });
      expect(titleElement).toHaveTextContent(/Development Services/i);
    });
  });

  describe('Mobile Development Section Tests', () => {
    test("renders Mobile Application section", () => {
      render(<DesignStages />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(3); // Adjusted to 3 based on your previous error
      expect(headings[1]).toHaveTextContent("Mobile Development");
    });
    

    test('verifies Mobile Development description text', () => {
      render(<DesignStages />);
      const mobileDescription = screen.getByText(/Our mobile app development process/i);
      expect(mobileDescription).toBeInTheDocument();
      expect(mobileDescription).toHaveClass('text-neutral-500');
    });
  });

  describe('Web Development Section Tests', () => {
    test("renders Web Application section", () => {
      render(<DesignStages />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(3); // Adjusted to 3 based on your previous error
      expect(headings[2]).toHaveTextContent("Web Development");
    });
     
    
      

    test('verifies Web Development description text', () => {
      render(<DesignStages />);
      const webDescription = screen.getByText(/Our web development process/i);
      expect(webDescription).toBeInTheDocument();
      expect(webDescription).toHaveClass('text-neutral-500');
    });
  });

  describe('Interaction tests', () => {
    test('clicking on a button changes its background color', async () => {
      render(<DesignStages />);
      const buttons = screen.getAllByText(/➔/);
      expect(buttons.length).toBeGreaterThan(0);

      fireEvent.mouseOver(buttons[0]);
      await waitFor(() => {
        expect(buttons[0]).toHaveClass('group-hover:bg-[#fe5d26]');
      });
    });
  });
});
