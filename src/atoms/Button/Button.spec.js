import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("button", () => {
  // from the worst to the better
  // don't do.
  it.skip("should render button with wrapper.getByText", () => {
    //
  });

  // don't do.
  it.skip("should render button with getByText", () => {
    //
  });

  // to use in last resort if there is no text but ask yourself about the html semantic
  it.skip("should render button with screen.getByTestId", () => {
    //
  });

  it.skip("should render button with screen.getByText", () => {
    //
  });

  it.skip("should render button with screen.getByRole", () => {
    //
  });

  describe("onClick", () => {
    it.skip("should call mockedOnclick when clicking on button", () => {
      //
    });

    it.skip("should not call mockedOnclick when clicking on button", () => {
      //
    });
  });
});
