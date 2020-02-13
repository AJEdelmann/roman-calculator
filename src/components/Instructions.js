import React, { useState, useEffect } from "react";

const Instructions = () => {
  const [countMessage, setCountMessage] = useState(0);
  const [bounce, setBounce] = useState(false);
  const [message, setMessage] = useState("Saluto romano!");
  const [footnote, setFootnote] = useState(
    `Click here if you want to know more about this calculator.`
  );

  useEffect(() => {
    setBounce(() => true);
  }, []);

  const updateMessage = () => {
    setBounce(false);

    switch (countMessage) {
      case 0:
        setMessage("Habemus Calculator");
        setFootnote(
          "With this calculator you will be able to perform some operations with Roman numerals."
        );
        setCountMessage(prevCount => prevCount + 1);
        break;

      case 1:
        setMessage("Remember");
        setFootnote("There is no zero nor negative numbers in Roman numerals.");
        setCountMessage(prevCount => prevCount + 1);
        break;

      case 2:
        setMessage("Don't forget the rules");
        setFootnote(
          "In standard Roman numerals we should not use more than three consecutive copies of the same letter. V, L and D are not repeated at all."
        );
        setCountMessage(prevCount => prevCount + 1);
        break;

      case 3:
        setMessage("It's worth recalling that...");
        setFootnote(
          "The traditional Roman numeral system was used for numbers only up to 3,999. We are following this rule here."
        );
        setCountMessage(prevCount => prevCount + 1);
        break;

      case 4:
        setMessage("Have fun!");
        setFootnote("Click if you want to repeat the instructions");
        setCountMessage(0);
        break;

      default:
    }
  };

  return (
    <div className="instructions-box" onClick={updateMessage}>
      <div className={`instructions ${bounce ? `instructions-bounce` : null}`}>
        <h5 className="instructions-title">{message}</h5>
        {footnote && <span className="instructions-text">{footnote}</span>}
      </div>
    </div>
  );
};

export default Instructions;
