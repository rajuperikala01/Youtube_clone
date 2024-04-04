import moment from "moment";
import "./searchcontainer.css";
import { useState, useEffect } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";

function SearchVideo({ video }) {
  const [channelMediumUrl, setchannelMediumUrl] = useState("");
  const [viewCount, setViewcount] = useState(null);
  const [likes, setLikes] = useState(null);
  const [subscribers, setSubscribers] = useState(null)
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      title,
      channelId,
      description,
      thumbnails: { medium },
      channelTitle,
    },
  } = video;
  async function channelDetails() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const channelDetails = await respose.json();
      if (channelDetails.items.length > 0) {
        const channelMediumUrl =
          channelDetails.items[0].snippet.thumbnails.medium.url;
        const subscribers = channelDetails.items[0].statistics.subscriberCount
        setchannelMediumUrl(channelMediumUrl);
        setSubscribers(numeral(subscribers).format("0.a"));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function videoDetails() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const video = await respose.json();
      if (video.items.length > 0) {
        const viewCount = video.items[0].statistics.viewCount;
        setViewcount(numeral(viewCount).format("0.a"));
        const likeCount = video.items[0].statistics.likeCount;
        setLikes(numeral(likeCount).format('0.a'));
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (channelId) {
      channelDetails();
    }
    if (videoId) {
      videoDetails();
    }
  }, [channelId,videoId]);

  const state = {
    channelName: channelTitle ,
    viewCount: viewCount,
    image: channelMediumUrl,
    subscribers: subscribers,
    videoTitle: title,
    likeCount: likes
  }
  return (
    <Link to={`/watch/${videoId}`} className="video-link" state={state}>
      <div className="SearchVideo">
        <div className="Videobox">
          <img src={medium.url} alt="image" />
        </div>
        <div className="VideoDetails">
          <h4>{title}</h4>
          <div className="viewsDetails">
            <p>{viewCount} views</p>
            {/* <FontAwesomeIcon icon={faCircleDot} /> */}
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
          <div className="channelDetails">
            <img src={channelMediumUrl} alt="channel" />
            <p>{channelTitle}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchVideo;
