import {
  faArrowUpWideShort,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./comment.css";

function Comments({total}) {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div className="comments">
      <div className="cmsection1">
        <h3>{total} Comments</h3>
        <div className="sort">
          <FontAwesomeIcon icon={faArrowUpWideShort} />
          <p>sort by</p>
        </div>
      </div>

      <div className="inputsection">
        <div className="img">
          <img
            src="https://yt3.googleusercontent.com/f251QfvprQ5hKnis5bAWMQMWENg8EdRZWxBaRrobTXV4WFGtwuxm-qTI80HohMmJQoaWebxEfg=s900-c-k-c0x00ffffff-no-rj"
            alt="name"
          />
        </div>

        <div className="addcomment">
          <input
            type="text"
            onClick={() => setActive(true)}
            value={input}
            onChange={handleChange}
          />
          <hr />
        </div>
      </div>
      {active && (
            <div className="emoji">
              <div className="smiley">
                <FontAwesomeIcon icon={faFaceSmile} />
              </div>
              <div className="buttons">
                <button onClick={() => setActive(false)} className="btn">
                  Cancel
                </button>
                <button disabled={input === ""} className="btn_1">
                  Comment
                </button>
              </div>
            </div>
          )}
    </div>
  );
}

export default Comments
