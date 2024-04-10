import React from "react";
import "./searchcontainer.css";

function Playlist({ video }) {
  const {
    id,
    snippet: {
      publishedAt,
      title,
      description,
      thumbnails: { medium },
      channelTitle,
    },
  } = video;
  return (
    <div className="playlist">
      <div className="playimg">
        <img src={medium.url} alt="" />
      </div>
      <div className="playlist_channel">
        <h4>{channelTitle}</h4>
        <div className="playlist_ChannelSubscribers">
          <p>{channelTitle}</p>

          <p>. Playlist</p>
        </div>
        <div className="playlist_des">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
