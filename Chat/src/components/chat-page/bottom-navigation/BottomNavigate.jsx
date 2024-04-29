import React, { useEffect } from "react";

import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import EmailIcon from '@mui/icons-material/Email';

import GroupsIcon from '@mui/icons-material/Groups';

import { useSelector , useDispatch } from "react-redux";

import { toggleBetweenChatAndGroup } from "../../../redux-store/toggle-between-single-and-group-chat-slice/ToggleSlice";

export default function BottomNavigate({setOpenGroups}) {
  
  const openGroups = useSelector((state) => state.ToggleSlice.open);
  
  const dispatch = useDispatch()

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={openGroups}
        onChange={(event, newValue) => {
          dispatch(toggleBetweenChatAndGroup(newValue))
        }}
      >
        <BottomNavigationAction label="Messages" icon={<EmailIcon />} />
        <BottomNavigationAction label="Groups" icon={<GroupsIcon />} />
      </BottomNavigation>
    </Box>
  );
}
