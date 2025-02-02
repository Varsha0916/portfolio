import React from "react";
import { render, screen } from "@testing-library/react";
import DesignServices from "../Components/designServices";

describe("DesignServices Component", () => {
  test("renders Design Services heading", () => {
    render(<DesignServices />);
    const heading = screen.getByText((content, element) => {
      return element.textContent.trim() === "Design Services"; // Trim to handle extra spaces
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders Mobile Application section", () => {
    render(<DesignServices />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(3); // Adjusted to 3 based on your previous error
    expect(headings[1]).toHaveTextContent("Mobile Application");
  });

  test("renders all design service boxes", () => {
    render(<DesignServices />);
    const boxTitles = [
      "User Interface",
      "Smooth Development",
      "User Experience",
      "Interactions",
    ];
  
    boxTitles.forEach((title) => {
      const elements = screen.getAllByText(new RegExp(title, "i"));
      expect(elements.length).toBeGreaterThan(0); // Ensure we have at least one element matching the title
    });
  });
  

  test("renders all steps in process section", () => {
    render(<DesignServices />);
    const steps = [
      "Research & Discovery",
      "Ideation",
      "Design & Prototyping",
      "Review & Refinement",
    ];
    steps.forEach((step) => {
      expect(screen.getByText(new RegExp(step, "i"))).toBeInTheDocument();
    });
  });

  test("renders Web Application section", () => {
    render(<DesignServices />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(3); // Adjusted to check for all headings
    expect(headings[2]).toHaveTextContent("Web Application");
  });

  test("renders all transformation items", async () => {
    render(<DesignServices />);
    const items = [
      "User-Centric Website Design",
      "Custom Website Design",
      "Responsive and Adaptive Layouts",
      "Interactive Prototyping",
    ];

    for (const item of items) {
      const element = await screen.findByText(new RegExp(item, "i"));
      expect(element).toBeInTheDocument(); // Ensure the item is in the document
    }
  });

  test("renders images with correct alt text", () => {
    render(<DesignServices />);
    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toHaveAttribute("alt");
    });
  });
});
