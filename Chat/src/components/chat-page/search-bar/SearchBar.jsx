import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

import { useEffect, useState } from "react";

export default function SearchBar({ messageList, setMessageList }) {
  /* When the user makes a search, the original messageList changes. So, we need it to save the original list in a different useState */
  const [originalMessageList , setOriginalMessageList] = useState(messageList);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length == 0) {
      setMessageList(originalMessageList);
    } else {
      const searchedPeople = originalMessageList.filter((message) =>
        message.name.toLowerCase().includes(search.toLowerCase())
      );
      setMessageList(searchedPeople);
    }
  }, [search]);

  return (
    <div className="chat-page-parent-messages-search">
      <div className="chat-page-parent-messages-search-icon">
        <SearchIcon sx={{ color: "#676767" }} />
      </div>

      <div className="chat-page-parent-messages-search-input">
        <input
          placeholder="Search"
          className="chat-page-parent-messages-search-input-field"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
