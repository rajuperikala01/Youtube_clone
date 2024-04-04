import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./comment.css";
import { faThumbsDown, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
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
          src={authorProfileImageUrl}
          alt="user"
          className="user_img"
        />
      </div>
      <div className="user_details">
        <div className="user_name">
          <h5>{authorDisplayName}</h5>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
        <p>
          {textDisplay}
        </p>
        <div className="reply">
          <FontAwesomeIcon icon={faThumbsUp} />
          <FontAwesomeIcon icon={faThumbsDown} />
          <p>Reply</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
