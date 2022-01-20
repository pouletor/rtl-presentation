import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
  it("should render the navigation menu", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavigationMenu />
      </Router>
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
    expect(screen.getByRole("link", { name: "About" })).toBeVisible();
  });

  // when no need to access history
  it("should render the navigation menu withMemoryRouter boilerplate", () => {
    render(<NavigationMenu />, { wrapper: MemoryRouter });
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
    expect(screen.getByRole("link", { name: "About" })).toBeVisible();
  });

  it("should navigate through the links", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavigationMenu />
      </Router>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    const aboutLink = screen.getByRole("link", { name: "About" });

    // default
    expect(history.location.pathname).toEqual("/");

    // when clicking on about
    fireEvent.click(aboutLink);
    expect(history.location.pathname).toEqual("/about");

    // when clicking on home
    fireEvent.click(homeLink);
    expect(history.location.pathname).toEqual("/");
  });
});
