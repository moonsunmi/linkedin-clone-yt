import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Header.css";
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://drive.google.com/uc?export=view&id=14Ut_BLcjdgZnDZ-2o9ZelmSMkUfGYGa3"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Job" />
        <HeaderOption Icon={TextsmsIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption Icon={AccountCircleIcon} title="me" />
      </div>
    </div>
  );
};

export default Header;
