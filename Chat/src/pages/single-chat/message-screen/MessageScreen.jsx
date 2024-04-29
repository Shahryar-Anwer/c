import React, { useState, useEffect, useRef } from "react";

import "./MessageScreen.css";

import SentMessages from "../../../components/message-screen/sent-messages/SentMessages";

import ReceivedMessages from "../../../components/message-screen/received-messages/ReceivedMessages";

import AttachFileIcon from "@mui/icons-material/AttachFile";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import NoteAddIcon from "@mui/icons-material/NoteAdd";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { updateMessages } from "../../../redux-store/single-chat-slice/SingleChatSlice";

export default function MessageScreen() {
  /* When user comes to this page, extract details as to whom is he talking to */
  let { state } = useLocation();

  /* All messages between two particular users */
  const messages = useSelector((state) => state.SingleChatSlice.messages);

  // const messages = useSelector((state) => state.SingleChatSlice.messages);

  const dispatch = useDispatch();

  /* Calculate the current time to be sent with a new message */
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0"); // Get hours and pad with leading zero if needed
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Get minutes and pad with leading zero if needed

    return `${hours}:${minutes}`;
  };

  /* logic to send the message */
  const [textMessage, setTextMessage] = useState("");

  const handleInputMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    dispatch(
      updateMessages({
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "text",
            content: textMessage,
            time: getCurrentTime(),
            messageStatus: "sent",
          },
        ],
      })
    );

    setTextMessage("");
  };

  /* When a new message is sent, scroll to the last sent message in the chat*/
  const lastMessageRef = useRef(null);

  const notLastMessageRef = useRef(null);

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const scrollToLastMessage = () => {
    lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  /* Open or close the image/file attachment div */
  const [openFileAttachment, setOpenFileAttachment] = useState(false);

  const handleFileAttachment = () => {
    setOpenFileAttachment(!openFileAttachment);
  };

  /* Upload and display image being sent in the message  */
  const imageUploadRef = useRef(null);

  const chooseImage = () => {
    imageUploadRef.current.click(); // Trigger click event on the hidden input
  };

  const sendImage = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);

    dispatch(
      updateMessages({
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "image",
            content: url,
            time: getCurrentTime(),
            messageStatus: "sent",
          },
        ],
      })
    );
  };

  /* Upload and display the document being sent in the message */
  const documentUploadRef = useRef(null);

  const chooseDocument = () => {
    documentUploadRef.current.click(); // Trigger click event on the hidden input
  };

  const sendDocument = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    dispatch(
      updateMessages({
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "document",
            content: file,
            documentUrl: url,
            time: getCurrentTime(),
            messageStatus: "delivered",
          },
        ],
      })
    );

  };

  return (
    <div className="message-screen-parent">
      <div className="message-screen-person-details">
        <div className="message-screen-profile-picture">
          <img src={state?.receipientDetails?.profilePicture} />
        </div>
        <div className="message-screen-name-and-status">
          <h1>{state?.receipientDetails?.name}</h1>
          <h6>Online</h6>
        </div>
      </div>

      <div className="message-screen-all-messages">
        {messages?.map((message, index) => {
          if (message.typeOfMessage == "sent message") {
            return (
              <div
                key={index}
                ref={
                  index == messages.length - 1
                    ? lastMessageRef
                    : notLastMessageRef
                }
              >
                <SentMessages messages={message.messages} />
              </div>
            );
          } else if (message.typeOfMessage == "received message") {
            return (
              <div key={index}>
                <ReceivedMessages user={message.messageSentBy} messages={message.messages} />
              </div>
            );
          }
        })}
      </div>

      <form onSubmit={sendMessage} className="message-screen-send-message">
        <div className="message-screen-send-attachment">
          {openFileAttachment && (
            <div className="message-screen-select-attachment">
              <div className="message-screen-select-picture">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={imageUploadRef}
                  onChange={sendImage}
                />
                <div onClick={chooseImage}>
                  <AddPhotoAlternateIcon sx={{ fontSize: 35 }} />
                </div>
              </div>
              <div className="message-screen-select-document">
                <input
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  ref={documentUploadRef}
                  onChange={sendDocument}
                />
                <div onClick={chooseDocument}>
                  <NoteAddIcon sx={{ fontSize: 35 }} />
                </div>
              </div>
            </div>
          )}
          <div onClick={handleFileAttachment}>
            <AttachFileIcon sx={{ color: "#78909c", fontSize: 25 }} />
          </div>
        </div>
        <div className="message-screen-type-message">
          <input
            onChange={handleInputMessage}
            placeholder="Type your message here.."
            value={textMessage}
          />
        </div>
        <button type="submit" className="message-screen-send-message-button">
          <span>SEND</span>
        </button>
      </form>
    </div>
  );
}
