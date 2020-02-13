import React from "react";

const Display = props => {
  const { error } = props;
  return (
    <div className={`display-wrapper ${error ? "display-error" : ""} `}>
      <div className="display-error-message">{error}</div>
      <div
        className={
          "display-number" + (props.children.length > 7 ? " small" : "")
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default Display;
