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
function Channel({ channelName, subscribers, image, likes }) {
  return (
    <div className="channel1">
      <div className="subscribe_section">
        <img src={image} alt="name" />
        <div className="channelname">
          <h4>{channelName}</h4>
          <p>{numeral(subscribers).format("0.a")} Subscribers</p>
        </div>
        <div className="subscription">
          <p>Subscribe</p>
        </div>
      </div>
      <div className="likes">
        <div className="like">
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <h5>{numeral(likes).format("0.a")}</h5>
          <hr />
          <FontAwesomeIcon icon={faThumbsDown} className="icon" />
        </div>
        <div className="share like">
          <FontAwesomeIcon icon={faShare} className="icon" />
          <p>Share</p>
        </div>
        <div className="download like">
          <FontAwesomeIcon icon={faDownload} className="icon" />
          <p>Download</p>
        </div>
        <div className="dots like">
          <FontAwesomeIcon icon={faEllipsis} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Channel;
