import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <TextField
      fullWidth
      label="Message"
      margin="normal"
      multiline
      onChange={evt => setMessage(evt.target.value)}
      onKeyDown={evt => {
        if (evt.key === "Enter") {
          evt.preventDefault();
          pushSendMessage(message);
          setMessage("");
        }
      }}
      rows="4"
      value={message}
    />
  );
};

export default MessageBox;
