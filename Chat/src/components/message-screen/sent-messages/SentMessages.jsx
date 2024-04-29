import React from "react";

import "./SentMessages.css";

import profilePicture from "./profile-picture.png";

import DoneIcon from "@mui/icons-material/Done";

import DoneAllIcon from "@mui/icons-material/DoneAll";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function SentMessages({ messages }) {
  return (
    <div className="sent-messages-parent">
      <div className="sent-messages-profile-picture">
        <img src={profilePicture} />
      </div>
      <div className="sent-messages-content">
        {messages.map((message, index) => (
          <div key={index} className="sent-messages-indiviual">
            {message.messageType == "text" && <p>{message.content}</p>}
            {message.messageType == "image" && <img src={message.content} />}
            {message.messageType == "document" && (
              <a
                href={message.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sent-messages-indiviual-document"
              >
                {message.content.name}

                <OpenInNewIcon sx={{fontSize : 20}} />
              </a>
            )}

            <div className="sent-messages-indiviual-details">
              <span>{message.time}</span>
              {message.messageStatus == "sent" && (
                <DoneIcon sx={{ fontSize: 15, color: "#8696a0" }} />
              )}
              {message.messageStatus == "delivered" && (
                <DoneAllIcon sx={{ fontSize: 15, color: "#8696a0" }} />
              )}
              {message.messageStatus == "read" && (
                <DoneAllIcon sx={{ fontSize: 15, color: "#27AE60" }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
