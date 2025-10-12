import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders greeting message", () => {
  render(<Greet name="Amit" />);
  const heading = screen.getByText("Hello, Amit!");
  expect(heading).toBeInTheDocument();
});
