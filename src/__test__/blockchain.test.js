import React from "react";
import { render, screen } from "@testing-library/react";
import BlockChain from "../Components/blockChain";

describe("BlockChain Component", () => {
  test("renders the Blockchain Technology heading", () => {
    render(<BlockChain />);
     const heading = screen.getByText((content, element) => {
          return element.textContent.trim() === "BlockChain Technology";
        });
        expect(heading).toBeInTheDocument();
      });

  test("renders the main blockchain image", () => {
    render(<BlockChain />);
    const blockchainImage = screen.getByAltText("Blockchain");
    expect(blockchainImage).toBeInTheDocument();
  });

  test("renders all blockchain feature cards", () => {
    render(<BlockChain />);
    const featureTitles = [
      "Military-grade encryption",
      "Data Accuracy",
      "Scalable Solutions",
      "Robust Performance",
    ];

    featureTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("renders all blocks with correct titles", () => {
    render(<BlockChain />);
    const blockTitles = screen.getAllByTestId("block-title");
    expect(blockTitles.length).toBe(4);
    expect(blockTitles[0]).toHaveTextContent("Military-grade encryption");
    expect(blockTitles[1]).toHaveTextContent("Data Accuracy");
    expect(blockTitles[2]).toHaveTextContent("Scalable Solutions");
    expect(blockTitles[3]).toHaveTextContent("Robust Performance");
      });
  

  test("renders blockchain description text", () => {
    render(<BlockChain />);
    const descriptionText = screen.getByText(/Revolutionize the way you do business/i);
    expect(descriptionText).toBeInTheDocument();
  });
});
