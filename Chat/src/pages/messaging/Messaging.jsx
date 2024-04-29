import ChatPage from "../single-chat/chat-page/ChatPage";

import GroupChat from "../group-chats/group-chat-page/GroupChat";

import BottomNavigate from "../../components/chat-page/bottom-navigation/BottomNavigate";

import "./Messaging.css";

import { useSelector, useDispatch } from "react-redux";

import EmailIcon from "@mui/icons-material/Email";

import GroupsIcon from "@mui/icons-material/Groups";

import { toggleBetweenChatAndGroup } from "../../redux-store/toggle-between-single-and-group-chat-slice/ToggleSlice";

export default function Messaging() {
  /* Keep track of which screen needs to be open */
  const openGroups = useSelector((state) => state.ToggleSlice.open);

  const dispatch = useDispatch();

  return (
    <div className="messaging-parent">
      <div className="messaging-bottom-navigation">
        <BottomNavigate />
      </div>

      <div className="messaging-left-hand-navigation">
        <div
          className="messaging-left-hand-navigation-messages"
          onClick={() => {
            dispatch(toggleBetweenChatAndGroup(0));
          }}
        >
          <EmailIcon sx={{ fontSize: 35, color: (openGroups == 0 ? "#1976d2" : "rgba(0, 0, 0, 0.6)") }} />
        </div>
        <div
          className="messaging-left-hand-navigation-group"
          onClick={() => {
            dispatch(toggleBetweenChatAndGroup(1));
          }}
        >
          <GroupsIcon sx={{ fontSize: 35 , color: (openGroups == 1 ? "#1976d2" : "rgba(0, 0, 0, 0.6)")  }} />
        </div>
      </div>

      {openGroups == 0 && <ChatPage />}

      {openGroups == 1 && <GroupChat />}
    </div>
  );
}
