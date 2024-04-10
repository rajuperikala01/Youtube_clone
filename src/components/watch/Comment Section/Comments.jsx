import {
  faArrowUpWideShort,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./comment.css";
import {auth} from "../../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth"

function Comments({total}) {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

  const [user] = useAuthState(auth);
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
            src={`${user ? user.photoURL : 'https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png'}`}
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
          <hr className={`${active === true ? "line-atv" : "line-dtv"}`}/>
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
