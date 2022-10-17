import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Post from "./Post";
import InputOption from "./InputOption";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={OndemandVideoIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={NewspaperIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <Post
        name="Sonny Snagha"
        description="This is a test"
        message="WOW this worked"
      />
    </div>
  );
};

export default Feed;
