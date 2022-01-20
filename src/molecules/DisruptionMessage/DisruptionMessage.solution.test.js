import { fireEvent, render, screen } from "@testing-library/react";

import DisruptionMessage from "./DisruptionMessage";

const defaultProps = {
  title: "Title of the message",
  content: "Content of the message",
};

describe("DisruptionMessage", () => {
  it("should display the title, button to expand and close button", () => {
    render(<DisruptionMessage {...defaultProps} />);
    expect(screen.getByText("Title of the message")).toBeVisible();
    expect(screen.getByRole("button", { name: "More details" })).toBeVisible();
    expect(
      screen.queryByText("Content of the message")
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close" })).toBeVisible();
  });

  it("should display/hide the content when toggling the expand button", () => {
    render(<DisruptionMessage {...defaultProps} />);
    const expandBtn = screen.getByRole("button", { name: "More details" });
    expect(
      screen.queryByText("Content of the message")
    ).not.toBeInTheDocument();

    // I click once
    fireEvent.click(expandBtn);
    expect(screen.getByText("Content of the message")).toBeVisible();

    // I reclick
    fireEvent.click(expandBtn);
    expect(
      screen.queryByText("Content of the message")
    ).not.toBeInTheDocument();
  });

  it("should call mockedCloseFn when clicking on close button", () => {
    const mockedCloseFn = jest.fn();
    render(<DisruptionMessage {...defaultProps} close={mockedCloseFn} />);
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(mockedCloseFn).toHaveBeenCalled();
  });
});
