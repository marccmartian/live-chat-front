import React, { useState } from "react";
import { ChatInputContainer } from "./ChatElements";

const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");

  const sendMessageChat = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <ChatInputContainer>
      <div className="button-container">
        <div className="emoji">
          <p style={{ fontSize: "1.7rem" }}>🙂</p>
        </div>
      </div>
      <form className="input-container" onSubmit={sendMessageChat}>
        <input
          type="text"
          placeholder="Escribe tu mensaje aquí"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <p style={{ fontSize: "1.7rem" }}> ➤</p>
        </button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
