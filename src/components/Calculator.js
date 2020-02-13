import React, { useState, useEffect } from "react";
import { validateNumber, toRoman, toNumber } from "../utils/convert";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [curNum, setCurNum] = useState("");
  const [prevNum, setPrevNum] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const [history, setHistory] = useState("");

  // Data for rendering the buttons
  const numbersKeys = ["C", "D", "M", "V", "X", "L", "CE", "I", "="];
  const operatorsKeys = ["+", "-", "×"];

  const handleInput = val => {
    // To clean the display automatically if you start typing a number after an operation
    if (result && result === input) {
      setInput("");
    }
    setInput(prevInput => prevInput + val);
  };

  const clearInput = () => {
    setInput("");
    setHistory("");
  };

  // Input manipulation triggered after user click an operator
  const calculation = operator => {
    setPrevNum(input);
    setInput("");
    setOperator(operator);
    setHistory(`${history} ${input} ${operator} `);
  };

  const evaluate = () => {
    const prevNumber = toNumber(prevNum);
    const curNumber = toNumber(curNum);
    let operation;

    if (operator === "+") {
      operation = toRoman(prevNumber + curNumber);
    } else if (operator === "-") {
      operation = toRoman(prevNumber - curNumber);
    } else if (operator === "×") {
      operation = toRoman(prevNumber * curNumber);
    } else {
      // In case the user click the equal button without previously selecting an operator
      operation = toRoman(curNumber);
    }
    setResult(operation);
    setInput(operation);
    setOperator("");
    setHistory(`${history} ${input}`);
  };

  useEffect(() => {
    setError(validateNumber(input));
    setCurNum(input);
  }, [input]);

  return (
    <div className="calculator instructions-bounce ">
      <Display error={error} history={history}>
        {input}
      </Display>

      <div className="numbers-wrapper">
        {numbersKeys.map(k => {
          return (
            <Button
              data={k}
              key={k}
              error={k !== "CE" ? error : null}
              handleClick={
                k === "CE" ? clearInput : k === "=" ? evaluate : handleInput
              }
              className={`button ${
                k === "=" || k === "CE" ? "utility" : "number"
              } ${k === "CE" ? "ce" : ""}`}
            >
              {k}
            </Button>
          );
        })}
      </div>
      <div className="operators-wrapper">
        {operatorsKeys.map(k => {
          return (
            <Button
              key={k}
              error={error}
              className="button operator"
              handleClick={calculation}
              data={k}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
