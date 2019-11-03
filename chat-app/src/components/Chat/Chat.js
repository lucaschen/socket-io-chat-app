import React from "react";

import useChat from "./_useChat";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

const Chat = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div>
      <Messages messages={messages} />
      <MessageBox
        onSendMessage={message => {
          sendMessage({ message });
        }}
      />
    </div>
  );
};

export default Chat;
