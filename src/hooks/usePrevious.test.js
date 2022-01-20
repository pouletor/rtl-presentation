import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { usePrevious } from "./usePrevious";

function FakeComponent() {
  const [counter, setCounter] = useState(0);
  const previousCounter = usePrevious(counter);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <span title="previous">{previousCounter}</span>
      <span title="actual">{counter}</span>
    </>
  );
}

describe("usePrevious hook", () => {
  it("should return previous value", () => {
    render(<FakeComponent />);
    expect(screen.getByTitle("actual").textContent).toEqual("0");
    expect(screen.getByTitle("previous").textContent).toEqual("");

    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTitle("actual").textContent).toEqual("1");
    expect(screen.getByTitle("previous").textContent).toEqual("0");

    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTitle("actual").textContent).toEqual("2");
    expect(screen.getByTitle("previous").textContent).toEqual("1");
  });
});
