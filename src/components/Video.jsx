import React, { useEffect, useState } from "react";
import "./video.css";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import numeral from "numeral";
import { MdOutlineSensors } from "react-icons/md";
function Video({ video }) {
  const [subscribers, setSubscribers] = useState();
  const [channelMediumUrl, setchannelMediumUrl] = useState("");
  const [viewCount, setViewcount] = useState();
  const [likeCount, setLikeCount] = useState();
  const navigate = useNavigate();
  let id, title, medium, channelTitle, publishedAt, channelId, categoryId, live;
  if (video.kind === "youtube#video") {
    id = video.id;
    title = video.snippet.title;
    medium = video.snippet.thumbnails.medium;
    channelTitle = video.snippet.channelTitle;
    publishedAt = video.snippet.publishedAt;
    channelId = video.snippet.channelId;
    categoryId = video.snippet.categoryId;
    live = video.snippet.liveBroadcastContent;
  }

  if (video.kind === "youtube#searchResult") {
    id = video.id.videoId;
    title = video.snippet.title;
    medium = video.snippet.thumbnails.medium;
    channelTitle = video.snippet.channelTitle;
    publishedAt = video.snippet.publishedAt;
    channelId = video.snippet.channelId;
    categoryId = video.snippet.categoryId;
    live = video.snippet.liveBroadcastContent;
  }

  async function channelDetails() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const channelDetails = await respose.json();
      if (channelDetails.items.length > 0) {
        const channelMediumUrl =
          channelDetails.items[0].snippet.thumbnails.medium.url;
        const subscriberCount =
          channelDetails.items[0].statistics.subscriberCount;
        setchannelMediumUrl(channelMediumUrl);
        setSubscribers(numeral(subscriberCount).format("0.a"));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function videoDetails() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const video = await respose.json();
      if (video.items.length > 0) {
        const viewCount = video.items[0].statistics.viewCount;
        const likeCount = video.items[0].statistics.likeCount;
        setViewcount(numeral(viewCount).format("0.a"));
        setLikeCount(numeral(likeCount).format("0.a"));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (channelId) {
      channelDetails();
    }

    if (id) {
      videoDetails();
    }
  }, [channelId]);

  const state = {
    channelName: channelTitle,
    viewCount: viewCount,
    image: channelMediumUrl,
    subscribers: subscribers,
    videoTitle: title,
    likeCount: likeCount,
    category: categoryId,
  };
  return (
    <Link to={`watch/${id}`} state={state} className="video">
      <img src={medium.url} alt="" />
      <div className="details">
        <div className="thumbnail1">
          <img src={channelMediumUrl} alt="channelimg" />
          <h4>{title}</h4>
          <span></span>
        </div>
        <div className="views">
          <p>{channelTitle}</p>
          <div className="views_details">
            <p>{viewCount} views </p>
            <p>{moment(publishedAt).fromNow()}</p>
            {live === "live" && (
            <div className="live">
              <MdOutlineSensors />
              <p>Live</p>
            </div>
          )}
          </div>
          
        </div>
      </div>
    </Link>
  );
}
export default Video;
