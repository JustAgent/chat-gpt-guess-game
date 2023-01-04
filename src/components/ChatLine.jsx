import React from "react";
import iconBot from "../assets/chat.png";
import iconUser from "../assets/profile.webp";
import "../style.css";
const ChatLine = ({ theme, message }) => {
  return (
    <div className={theme ? "message message-dark" : "message message-light"}>
      <img src={theme ? iconBot : iconUser}></img>
      <div className="messageContainer">{message}</div>
    </div>
  );
};

export default ChatLine;
