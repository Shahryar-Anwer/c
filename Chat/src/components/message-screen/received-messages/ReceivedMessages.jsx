import React from "react";

import "./ReceivedMessages.css";

export default function ReceivedMessages({ user , messages }) {
  return (
    <div className="received-messages-parent">
      <div className="received-messages-profile-picture">
        <img src={user.profilePicture} />
      </div>
      <div className="received-messages-content">
        {messages.map((message, index) => (
          <div key={index} className="received-messages-indiviual">
            <p>{message.content}</p>

            <div className="received-messages-indiviual-details">
              <span>{message.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
