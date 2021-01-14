import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chatbox.css";

function ChatboxMessage({ userSeed, username, message }) {
  return (
    <div className="chatboxmessage">
      <div className="message__box">
        <Avatar
          className="avatar"
          src={`https://avatars.dicebear.com/api/human/${userSeed}.svg`}
          variant="square"
        >
          Davids
        </Avatar>
        <div className="text">
          <h4>{username}</h4>
          <p className="teksts">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatboxMessage;
