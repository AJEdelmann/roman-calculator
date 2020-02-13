import React from "react";
import Calculator from "./Calculator";
import Instructions from "./Instructions";
import "../styles/App.css";

const App = () => {
  return (
    <div className="main-container fade-in">
      <header className="header">ROMAN CALCULATOR</header>
      <Calculator />
      <Instructions />
    </div>
  );
};

export default App;
