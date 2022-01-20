import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("button", () => {
  // from the worst to the better
  // don't do.
  it("should render button with wrapper.getByText", () => {
    const wrapper = render(<Button value="this is my button" />);
    expect(wrapper.getByText("this is my button")).toBeVisible();
  });

  // don't do.
  it("should render button with getByText", () => {
    const { getByText } = render(<Button value="this is my button" />);
    expect(getByText("this is my button")).toBeVisible();
  });

  // to use in last resort if there is no text but ask yourself about the html semantic
  it("should render button with screen.getByTestId", () => {
    render(<Button value="this is my button" data-testid="button-testid" />);
    expect(screen.getByTestId("button-testid")).toBeVisible();
  });

  it("should render button with screen.getByText", () => {
    render(<Button value="this is my button" />);
    expect(screen.getByText("this is my button")).toBeVisible();
  });

  it("should render button with screen.getByRole", () => {
    render(<Button value="this is my button" />);
    expect(
      screen.getByRole("button", { name: "this is my button" })
    ).toBeVisible();
  });

  describe("onClick", () => {
    it("should call mockedOnclick when clicking on button", () => {
      const mockedOnclick = jest.fn();
      render(<Button value="this is my button" whatever={mockedOnclick} />);
      const button = screen.getByRole("button", { name: "this is my button" });

      fireEvent.click(button);
      expect(mockedOnclick).toHaveBeenCalled();
    });

    it("should not call mockedOnclick when clicking on button", () => {
      const mockedOnclick = jest.fn();
      render(<Button value="this is my button" whatever={mockedOnclick} />);
      expect(mockedOnclick).not.toHaveBeenCalled();
    });
  });
});
