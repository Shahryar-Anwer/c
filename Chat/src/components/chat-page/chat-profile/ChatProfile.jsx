import React, { useState, useEffect } from "react";

import "./ChatProfile.css";

import DoneIcon from "@mui/icons-material/Done";

import DoneAllIcon from "@mui/icons-material/DoneAll";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function ChatProfile({
  profilePicture,
  name,
  message,
  time,
  sentMessageStatus,
  lastMessageWasASentMessage,
  lastMessageWasAReceivedMessage,
  lastReceievedMessageStatus,
}) {

  /* Detect screen width. If it is on desktop devices then disable the Link */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Keep track of which screen needs to be open */
  const openGroups = useSelector((state) => state.ToggleSlice.open);

  return (
    <Link
      to={`${width >= 1024 ? "" : (openGroups == 0 ? "/message-screen" : "/group-message-screen") }`}
      state={{ receipientDetails: { name , profilePicture }}}
      className="chat-profile-parent"
    >
      <div
        className="chat-profile-display-picture"
        style={{ backgroundImage: `url(${profilePicture})` }}
      >
        <div className="chat-profile-display-picture-online"></div>
        <img src={profilePicture} />
      </div>

      <div className="chat-profile-name-and-message">
        <h1>{name}</h1>
        {!lastMessageWasAReceivedMessage && <p>{message}</p>}
        {lastMessageWasAReceivedMessage && (
          <p
            style={{
              fontWeight: lastReceievedMessageStatus == "unread" ? 800 : "",
            }}
          >
            {message}
          </p>
        )}
      </div>

      <div className="chat-profile-time">
        {time}
        {lastMessageWasASentMessage && (
          <div className="chat-profile-tick">
            {sentMessageStatus == "sent" && (
              <DoneIcon sx={{ fontSize: 15, color: "#8696a0" }} />
            )}
            {sentMessageStatus == "delivered" && (
              <DoneAllIcon sx={{ fontSize: 15, color: "#8696a0" }} />
            )}
            {sentMessageStatus == "read" && (
              <DoneAllIcon sx={{ fontSize: 15, color: "#27AE60" }} />
            )}
          </div>
        )}
        {lastMessageWasAReceivedMessage &&
          lastReceievedMessageStatus == "unread" && (
            <div className="chat-profile-number-of-pending-messages">
              <span>2</span>
            </div>
          )}
      </div>
    </Link>
  );
}
