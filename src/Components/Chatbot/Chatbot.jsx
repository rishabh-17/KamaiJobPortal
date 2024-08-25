import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (messageText) => {
    const userMessage = { text: messageText, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("https://dev.kamai.ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageText }),
      });

      const botReply = await response.json();
      const botMessage = {
        text: botReply.response,
        sender: "bot",
        buttons: botReply.buttons || [],
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching bot reply:", error);
    }

    setInput("");
  };

  const handleSend = () => {
    sendMessage(input);
  };

  const handleButtonClick = (buttonText) => {
    sendMessage(buttonText);
  };

  return (
    <>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="../../public/assets/img/icons/Chatbot.png" alt="Chatbot" />
      </div>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <img
              src="../../public/assets/img/icons/Chatbot.png"
              alt="Chatbot"
            />{" "}
            {/* Add your profile picture URL */}
            <h2>Chatbot</h2>
            <button onClick={toggleChatbot} className="chatbot-close">
              <img
                src="../../public/assets/img/icons/Cancel.png"
                alt="close"
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
                {msg.buttons && (
                  <div className="chatbot-buttons">
                    {msg.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        className="chatbot-button"
                        onClick={() => handleButtonClick(button)}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>
              <img
                src="../../public/assets/img/icons/send.png"
                alt="sent"
                style={{ width: "25px" }}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
