import "./comment.css";
import moment from "moment";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import numeral from "numeral";

function Comment({ comment }) {
  const {
      snippet: {
        topLevelComment: {
          snippet: {
            textDisplay,
            authorProfileImageUrl,
            publishedAt,
            likeCount,
            authorDisplayName
          },
        },
      },
  } = comment;
  return (
    <div className="cmSection2">
      <div className="user_image">
        <img
          src={`${authorProfileImageUrl ? authorProfileImageUrl : "https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png"}`}
          alt=""
          className="user_img"
        />
      </div>
      <div className="user_details">
        <div className="user_name">
          <h5>{authorDisplayName}</h5>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
        <p className="comment_text">
          {textDisplay}
        </p>
        <div className="reply">
          <AiOutlineLike />
          {likeCount !== 0 && <p>{numeral(likeCount).format("0.a")}</p>}
          <AiOutlineDislike />
          <p>Reply</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
