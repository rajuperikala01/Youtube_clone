import { useEffect, useState } from 'react';
import './searchcontainer.css'
import numeral from 'numeral';


function SearchChannel({video}) {
  const {id,snippet:{description,thumbnails:{medium},channelTitle}} = video;
  const [subscriberCount,setSubscribers] = useState("");

  async function channelDetails() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const channelDetails = await respose.json();
      if (channelDetails.items.length > 0) {
        const subscriberCount =
          channelDetails.items[0].statistics.subscriberCount;
        setSubscribers(numeral(subscriberCount).format("0.a"));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    channelDetails();
  },[]);
  
  return (
    <div>
      <div className="searchChannel">
      <div className="channelimg">
        <img src={medium.url} alt="" />
      </div>
      <div className="channel123">
        <h4>{channelTitle}</h4>
        <div className="ChannelSubscribers">
            <p>@{channelTitle}</p>
            <p>{subscriberCount} subscribers</p>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        
      </div>
      <div className="subscribe">
          <p>Subscribe</p>
        </div>
    </div>
    </div>
  )
}

export default SearchChannel;
