import React from "react";

const Button = ({
  className,
  whatever = () => {},
  value,
  "data-testid": testId,
  ...otherProps
}) => (
  <button
    type="button"
    onClick={() => whatever()}
    className="button"
    data-testid={testId}
    {...otherProps}
  >
    {value}
  </button>
);

export default Button;
