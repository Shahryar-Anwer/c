import { createSlice } from "@reduxjs/toolkit";

import profilePictureOne from "./userOne.png"
import profilePictureTwo from "./userTwo.png"
import profilePictureThree from "./userThree.png"
import profilePictureFour from "./userFour.png"

const groupChatSlice = createSlice({
  name: "group-chat-slice",
  initialState: {
    messages: [
      {
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "text",
            content: "This is group chat",
            time: "15:30",
            messageStatus: "sent",
          },
          {
            messageType: "text",
            content: "This is group chat",
            time: "15:35",
            messageStatus: "delivered",
          },
          {
            messageType: "text",
            content: "I think I forgot it near the vending machine",
            time: "15:38",
            messageStatus: "read",
          },
        ],
      },
      {
        typeOfMessage: "received message",
        messageSentBy: {
            name : "User One",
            profilePicture : profilePictureOne
        },
        messages: [
          { content: "Hi!", time: "15:40" },
          {
            content: "Yup! found you bag",
            time: "15:43",
          },
        ],
      },
      {
        typeOfMessage: "received message",
        messageSentBy: {
            name : "User Three",
            profilePicture : profilePictureThree
        },
        messages: [
          {
            content: "It is in your locker.",
            time: "15:44",
            messageStatus: "read",
          },
        ],
      },
      {
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "text",
            content: "Great! Thank you very much.",
            time: "15:42",
            messageStatus: "delivered",
          },
        ],
      },
      {
        typeOfMessage: "received message",
        messageSentBy: {
            name : "User Two",
            profilePicture : profilePictureTwo
        },
        messages: [
          {
            content: "It is in your locker.",
            time: "15:44",
            messageStatus: "read",
          },
        ],
      },
      {
        typeOfMessage: "received message",
        messageSentBy: {
            name : "User Four",
            profilePicture : profilePictureFour
        },
        messages: [
          {
            content: "It is in your locker.",
            time: "15:44",
            messageStatus: "read",
          },
        ],
      },
    ],
  },
  reducers: {
    updateGroupChat: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const {updateGroupChat} = groupChatSlice.actions
export default groupChatSlice.reducer