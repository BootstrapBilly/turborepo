import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render label correctly", () => {
    render(<Button label="Button test" />);
    expect(screen.getByText("Button test")).toBeInTheDocument();
  });
});
