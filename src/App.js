import React, { useState } from "react";
import ChatLine from "./components/ChatLine";
import InputForm from "./components/Input";
import "./style.css";
function App() {
  const [messages, setMessages] = useState([
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
    {
      bot: true,
      message:
        "If you want to disable the quick info hints in Visual Studio Code, but the editor.quickSuggestions option is expecting an object rather than a boolean value, you can set the value of the enabled property of the object to false.",
    },
    {
      bot: false,
      message: "require object instead false",
    },
    {
      bot: true,
      message:
        "requsadasdasdasdasdsadjaskdnaskjdaskdhaskdire object instead false",
    },
  ]);
  return (
    <div className="app">
      <div className="chatWindow">
        {messages.map((message) => (
          <ChatLine theme={message.bot} message={message.message} />
        ))}
        <div className="height150"></div>
      </div>
      <InputForm />
    </div>
  );
}

export default App;
