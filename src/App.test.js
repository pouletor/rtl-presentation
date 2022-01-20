import { render, screen } from "@testing-library/react";
import App from "./App";

test("render component", () => {
  render(<App />);
  const linkElement = screen.getByText(/RTL presentation/i);
  expect(linkElement).toBeInTheDocument();

  expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
  expect(screen.getByRole("link", { name: "About" })).toBeVisible();
});
