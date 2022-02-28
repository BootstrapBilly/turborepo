import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("input", () => {
  it("should render correctly", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
