import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render children correctly", () => {
    render(<Header>Header test</Header>);
    expect(screen.getByText("Header test")).toBeInTheDocument();
  });
});
