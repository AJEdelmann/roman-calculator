import React from "react";

const Button = props => {
  const { className, handleClick, error, data } = props;
  return (
    <div
      className={className}
      style={error ? { pointerEvents: "none", opacity: "0.2" } : null}
      onClick={() => handleClick(data)}
    >
      <p className="p-operator">{data}</p>
    </div>
  );
};

export default Button;
