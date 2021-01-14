import React, { useState, useEffect } from "react";
import "./Chatbox.css";
import ChatboxMessage from "./ChatboxMessage";

function Chatbox({ username, seed }) {
  const [pazinojums, setPazinojums] = useState("Šis ir paziņojumu dēlis");
  const [messagesList, setMessagesList] = useState([]);
  const [message, setMessage] = useState("");

  function createMessage(e) {
    e.preventDefault();
    if (message.length < 1) {
      alert(`Message doesn't contain any characters`);
      return;
    }
    let newMessage = [
      ...messagesList,
      {
        username: username,
        userSeed: seed,
        message: message,
      },
    ];
    setMessagesList(newMessage);
    setMessage("");
  }

  return (
    <div className="chatbox">
      <div className="chatbox__main">
        <div
          style={pazinojums ? { display: "block" } : { display: "none" }}
          className="paziņojumi"
        >
          <p className="title__message">{pazinojums}</p>
        </div>
        <div className="chatbox__body">
          {messagesList.map(({ username, userSeed, message }) => (
            <ChatboxMessage
              userSeed={userSeed}
              username={username}
              message={message}
            />
          ))}
        </div>
        <form className="chatbox-form">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write message"
          />
          <button type="submit" onClick={createMessage}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;
