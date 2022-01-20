import { fireEvent, render, screen } from "@testing-library/react";

import DisruptionMessage from "./DisruptionMessage";

const defaultProps = {
  title: "Title of the message",
  content: "Content of the message",
};

describe("DisruptionMessage", () => {
  it.skip("should display the title, button to expand and close button", () => {
    render(<DisruptionMessage {...defaultProps} />);
    //
  });

  it.skip("should display/hide the content when toggling the expand button", () => {
    render(<DisruptionMessage {...defaultProps} />);
    //
  });

  it.skip("should call mockedCloseFn when clicking on close button", () => {
    render(<DisruptionMessage {...defaultProps} />);
    //
  });
});
