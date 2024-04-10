import {
  faDownload,
  faEllipsis,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./watch.css";
import numeral from "numeral";
import { BiLike,BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
function Channel({ channelName, subscribers, image, likes }) {
  return (
    <div className="channel1">
      <div className="subscribe_section">
        <div className="channel_main">
          <img src={image} alt="name" />
          <div className="channelname">
            <h5>{channelName}</h5>
            <p>{numeral(subscribers).format("0.a")} Subscribers</p>
          </div>
        </div>
        <div className="subscription">
          <p>Subscribe</p>
        </div>
      </div>
      <div className="likes_box">
        <div className="like">
          <BiLike className="icon" />
          <h5>{numeral(likes).format("0.a")}</h5>
          <hr />
          <BiDislike  className="icon" />
        </div>
        <div className="share like">
          <PiShareFatThin  className="icon" />
          <p>Share</p>
        </div>
        <div className="download like">
          <TfiDownload className="icon" />
          <p>Download</p>
        </div>
        <div className="dots like">
          <HiOutlineEllipsisHorizontal  className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Channel;
