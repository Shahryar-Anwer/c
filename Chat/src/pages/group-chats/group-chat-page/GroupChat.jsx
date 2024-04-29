import React, { useState } from "react";

import "./GroupChat.css";

import SearchBar from "../../../components/chat-page/search-bar/SearchBar";

import ChatProfile from "../../../components/chat-page/chat-profile/ChatProfile";

import profilePicture from "../../../components/chat-page/chat-profile/group-profile-picture.png";

import MessageScreen from "../../single-chat/message-screen/MessageScreen";

export default function GroupChat() {
  const [groupList, setGroupList] = useState([
    {
      picture: profilePicture,
      name: "Group One",
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
      name: "Group Two",
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
      name: "Group Three",
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
      name: "Group Four",
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
      name: "Group Five",
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
      name: "Group Six",
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
      name: "Group Seven",
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
      name: "Group Eight",
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
      name: "Group Nine",
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
      name: "Group Ten",
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
      name: "Group Eleven",
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
      name: "Group Twelve",
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
      name: "Group Thirteen",
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
  const [selectedGroupChat, setSelectedGroupChat] = useState(null);

  return (
    <div className="chat-page-parent">
      <div className="chat-page-all-message-list-and-search-bar">
        <h1 className="chat-page-parent-messages">Groups</h1>

        <SearchBar messageList={groupList} setMessageList={setGroupList} />

        <div className="chat-page-message-list">
          {groupList.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedGroupChat(item);
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

      {selectedGroupChat != null && (
        <div className="chat-page-message-screen">
          <MessageScreen />
        </div>
      )}

      {selectedGroupChat == null && (
        <div className="chat-page-no-message-screen">
          <h1>Select a chat to view messages</h1>
        </div>
      )}
    </div>
  );
}
