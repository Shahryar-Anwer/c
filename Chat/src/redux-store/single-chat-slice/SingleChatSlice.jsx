import { createSlice } from "@reduxjs/toolkit";

import profilePictureOne from "./userOne.png"

const singleChatSlice = createSlice({
  name: "single-chat-slice",
  initialState: {
    messages: [
      {
        typeOfMessage: "sent message",
        messages: [
          {
            messageType: "text",
            content: "Hello There",
            time: "15:30",
            messageStatus: "sent",
          },
          {
            messageType: "text",
            content: "Have you seen my backpack anywhere in office?",
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
            name : "User One",
            profilePicture : profilePictureOne
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
    ],
  },
  reducers: {
    
    updateMessages : (state , action) => {
        state.messages = [...state.messages , action.payload]
    }

  }
});

export const {updateMessages} = singleChatSlice.actions

export default singleChatSlice.reducer