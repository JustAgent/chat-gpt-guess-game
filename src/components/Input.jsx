import React from "react";
import send from "../assets/send.png";
const InputForm = () => {
  return (
    <div className="input">
      <div className="container">
        <input type="text" placeholder="guess..." />
        <img src={send} alt="Send"></img>
      </div>
    </div>
  );
};

export default InputForm;
