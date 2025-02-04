import React from 'react';
import { render, screen } from "@testing-library/react";
import EmbeddedSystems from "../Components/embedded";

//test 1:embedded components
describe("EmbeddedSystems Component", () => {
  test("renders main heading", () => {
    render(<EmbeddedSystems />);
    const heading = screen.getByTestId("main-container");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Embedded Services");
  });

  //test 2:rensers service image
  test("renders embedded service image", () => {
    render(<EmbeddedSystems />);
    const image = screen.getByAltText("Embedded Service");
    expect(image).toBeInTheDocument();
  });

  //test 3::service cards
  test("renders all service cards", () => {
    render(<EmbeddedSystems />);
    const serviceTitles = [
      "Custom Embedded Development",
      "Firmware Design and Development",
      "IoT Solutions",
      "Testing and Optimization",
    ];
    serviceTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

 //test 4:paragraphs 
  test("renders descriptive paragraph", () => {
    render(<EmbeddedSystems />);
    const paragraphText = /At the heart of technological innovation lies embedded systems/i;
    const paragraph = screen.getByText(paragraphText);
    expect(paragraph).toBeInTheDocument();
  });
});
