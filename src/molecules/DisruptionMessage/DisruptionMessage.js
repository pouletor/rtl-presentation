import React, { useState } from "react";

import Button from "../../atoms/Button/Button";
// import ExampleLink from "../../atoms/ExampleLink/ExampleLink";

const DisruptionMessage = ({ title, content, close = () => {} }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded((wasExpanded) => !wasExpanded);
  };

  return (
    <div className="disruption">
      <div className="disruption__content">
        <div className="disruption__content__title">{title}</div>
        <Button
          className="disruption__more_details"
          onClick={() => toggle()}
          value="More details"
        />
      </div>
      {expanded && <div className="disruption__content"> {content}</div>}
      <Button value="Close" className="pointer" onClick={() => close()} />
      {/* <ExampleLink value="example" href="/" /> */}
    </div>
  );
};

export default DisruptionMessage;
