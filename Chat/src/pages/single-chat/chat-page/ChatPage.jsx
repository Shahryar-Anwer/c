import React, { useState } from "react";

import "./ChatPage.css";

import SearchBar from "../../../components/chat-page/search-bar/SearchBar";

import ChatProfile from "../../../components/chat-page/chat-profile/ChatProfile";

import profilePicture from "../../../components/chat-page/chat-profile/profile-picture.png";

import MessageScreen from "../message-screen/MessageScreen";

export default function ChatPage() {
  /* List of people user has talked to */
  const [messageList, setMessageList] = useState([
    {
      picture: profilePicture,
      name: "John Doe",
      message: "How are you doing?",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "sent",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Robert Parker",
      message: "Awesome",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "delivered",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Rick Owens",
      message: "Good idea 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "delivered",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Franz Kafka",
      message: "Are you interested in insectitides for..",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "read",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Tom Hardy",
      message: "Smells like design spirit..",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "sent",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Vivienne Westwood",
      message: "This cat is so funny 😸",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "read",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Anthony Paul",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "delivered",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Anthony Paul",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "read",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Anthony Paul",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "sent",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Anthony Paul",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "sent",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Anthony Paul",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: true,
        messageStatus: "read",
      },
      messageReceived: {
        isReceived: false,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Tim David",
      message: "Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: false,
        messageStatus: null,
      },
      messageReceived: {
        isReceived: true,
        messageStatus: "read",
      },
    },
    {
      picture: profilePicture,
      name: "Jack Charlie",
      message:
        "Check out my page 🤩 , Check out my page 🤩 , Check out my page 🤩 , Check out my page 🤩",
      time: "16:45",
      messageSend: {
        isSent: false,
        messageStatus: null,
      },
      messageReceived: {
        isReceived: true,
        messageStatus: "unread",
      },
    },
  ]);

  /* Keep track of which chat needs to be opened on desktop devices */
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="chat-page-parent">
      <div className="chat-page-all-message-list-and-search-bar">
        <h1 className="chat-page-parent-messages">Messages</h1>

        <SearchBar messageList={messageList} setMessageList={setMessageList} />

        <div className="chat-page-message-list">
          {messageList.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedChat(item);
              }}
            >
              <ChatProfile
                profilePicture={item.picture}
                name={item.name}
                message={item.message}
                time={item.time}
                lastMessageWasASentMessage={item.messageSend.isSent}
                sentMessageStatus={item.messageSend.messageStatus}
                lastMessageWasAReceivedMessage={item.messageReceived.isReceived}
                lastReceievedMessageStatus={item.messageReceived.messageStatus}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedChat != null && (
        <div className="chat-page-message-screen">
          <MessageScreen />
        </div>
      )}

      {selectedChat == null && (
        <div className="chat-page-no-message-screen">
          <h1>Select a chat to view messages</h1>
        </div>
      )}
    </div>
  );
}
