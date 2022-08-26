import React from "react";
import ReactDOM from "react-dom";
import { getByRole, getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../../components/sticky/Header/Header";

describe("header component", () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1024,
  });

  interface IRenderedComponent {
    container: HTMLElement;
  }

  it("renders without crashing", () => {
    render(<Header />);
  });
});
