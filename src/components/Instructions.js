import React from "react";

const Instructions = props => {
  const { message, footnote, bounce } = props;

  return (
    <div className={`instructions ${bounce ? `instructions-bounce` : null}`}>
      <h5 className="title">{message}</h5>
      {footnote && <span className="text">{footnote}</span>}
    </div>
  );
};

export default Instructions;
