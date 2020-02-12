import React from "react";

const Instructions = props => {
  const { message, footnote, bounce } = props;

  return (
    <div className={`instructions ${bounce ? `instructions-bounce` : null}`}>
      <span
        style={{
          fontFamily: "'Spectral SC', serif",
          fontSize: "1rem",
          color: "rgb(153, 32, 11)",
          fontWeight: "bold"
        }}
      >
        {message}
      </span>
      {footnote && (
        <span
          style={{
            display: "block",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "0.8rem",
            marginTop: "5px"
          }}
        >
          {footnote}
        </span>
      )}
    </div>
  );
};

export default Instructions;
