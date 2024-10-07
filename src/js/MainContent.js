import React from "react";

export default function MainContent() {
  const [messages, setMessages] = React.useState(["a", "b"]);

  return (
    <div className="message-container">
      {messages.length === 0 ? (
        <h1 className="no-messages">You're all caught up!</h1>
      ) : (
        <h1 className="unread-messages">
          You have {messages.length} unread
          {messages.length > 1 ? " messages" : " message"}
        </h1>
      )}
    </div>
  );
}
