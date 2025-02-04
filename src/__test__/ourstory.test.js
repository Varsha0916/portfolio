import React from 'react';
import { render, screen } from "@testing-library/react";
import OurStory from "../Components/ourStory";

//test 1:
test("renders the centered image", () => {
    render(<OurStory />);
    const image = screen.getByAltText(/Centered Image/i);
    expect(image).toBeInTheDocument();
  });

  //test 2:
  test("renders first block 'Decentralized Design' title and description", () => {
    render(<OurStory />);
    const title = screen.getByText(/Decentralized Design/i);
    const description = screen.getByText(/A team of visionary developers/i);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  //test 3:
  test("renders the footer paragraph about blockchain technology", () => {
    render(<OurStory />);
    const paragraph = screen.getByText(/Blockchain technology is a transformative force/i);
    expect(paragraph).toBeInTheDocument();
  });

  //test 4:
  const generateDots = () => {
    return Array.from({ length: numDots }).map((_, index) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          role="presentation" // Add role="presentation" here
          style={{
            width: "2px",
            height: "2px",
            left: `${x}%`,
            top: `${y}%`,
          }}
        ></div>
      );
    });
  };
  
//test 5:
  test("renders all division titles and numbers", () => {
    render(<OurStory />);
    
    const divisionTitles = ["Transactions recorded", "Network Validated", "Blocks Linked", "Data Encrypted", "Secure Key generated"];
    divisionTitles.forEach((title) => {
      const divisionTitle = screen.getByText(title);
      expect(divisionTitle).toBeInTheDocument();
    });
  
    const divisionNumbers = ["5", "4", "3", "2", "1"];
    divisionNumbers.forEach((number) => {
      const divisionNumber = screen.getByText(number);
      expect(divisionNumber).toBeInTheDocument();
    });
  });