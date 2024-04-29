import {configureStore} from "@reduxjs/toolkit"

import SingleChatSlice from "../single-chat-slice/SingleChatSlice"

import GroupChatSlice from "../group-chat-slice/GroupChatSlice"

import ToggleSlice from "../toggle-between-single-and-group-chat-slice/ToggleSlice"

export const store = configureStore({

    reducer : {
        SingleChatSlice,
        GroupChatSlice,
        ToggleSlice
    }

})