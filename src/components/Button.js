import React from "react";

const Button = props => {
  const { className, children, handleClick, error, testId } = props;
  return (
    <div
      data-testId={testId}
      className={className}
      style={error ? { pointerEvents: "none", opacity: "0.2" } : null}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
