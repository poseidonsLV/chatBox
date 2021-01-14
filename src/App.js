import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Chatbox from "./Chatbox";
import Modal from "@material-ui/core/Modal";

function App() {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");
  const [userSeed, setUserSeed] = useState(0);
  const [seeds, setSeeds] = useState([
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    23,
    16,
    50,
    102,
    32,
  ]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  function chooseAvatar(value) {
    setUserSeed(value);
    handleClose();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const makeUser = () => {
    if (username && userSeed) {
      if (window.confirm("Are you sure to make user ?")) {
        return setUser(true);
      }
    } else {
      alert("[ERROR] Try again");
    }
  };

  const body = (
    <div className="avatars-body">
      <h2
        style={{ padding: "20px", textAlign: "center" }}
        id="simple-modal-title"
      >
        Choose your Avatar
      </h2>
      <div className="avatars">
        {seeds.map((seed) => {
          return (
            <Avatar
              key={seed}
              onClick={() => chooseAvatar(seed)}
              className="avatar"
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
              variant="square"
            />
          );
        })}
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="login">
        <div className="login__body">
          {userSeed ? (
            <img
              className="chosenAvatar"
              src={`https://avatars.dicebear.com/api/human/${userSeed}.svg`}
            />
          ) : (
            <button className="chooseAvatar" type="button" onClick={handleOpen}>
              Choose Avatar
            </button>
          )}
          <Modal open={open} onClose={handleClose}>
            {body}
          </Modal>
          <div className="login__container">
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Input username"
            />
            <button onClick={makeUser}>Make User</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      {user && <Chatbox username={username} seed={userSeed} />}
    </div>
  );
}

export default App;
