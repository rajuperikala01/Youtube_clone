import numeral from "numeral";
import "./watch.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Videocard({ details }) {
  const [channelMediumUrl, setchannelMediumUrl] = useState("");
  const [subscribers, setSubscribers] = useState("");
  const {
    id,
    snippet: {
      publishedAt,
      title,
      description,
      channelTitle,
      channelId,
      categoryId,
      thumbnails: { medium },
    },
    statistics: { viewCount, commentCount, likeCount },
  } = details;

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

  useEffect(() => {
    channelDetails();
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
    <Link to={`/watch/${id}`} className="link" state={state}>
      <div className="videocard">
        <div className="part1">
          <img src={medium.url} alt="ff" />
        </div>
        <div className="part2">
          <h5>{title}</h5>
          <p>{channelTitle}</p>
          <div className="views_1">
            <p>{numeral(viewCount).format("0.a")} views</p>
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Videocard;
