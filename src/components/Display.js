import React from "react";

const Display = props => {
  const { error, history } = props;
  return (
    <div className={`display-wrapper ${error ? "display-error" : ""} `}>
      <div className="display-history">{history}</div>
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
