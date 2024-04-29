import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle-between-single-and-group-chat-slice",
  initialState: {
    open : 0
  },
  reducers: {
    
    toggleBetweenChatAndGroup : (state , action) => {
        state.open = action.payload
    }

  }
});

export const {toggleBetweenChatAndGroup} = toggleSlice.actions

export default toggleSlice.reducer