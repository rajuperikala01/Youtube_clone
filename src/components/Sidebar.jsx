import React, { useEffect } from "react";
import "./mainsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronRight,
  faCirclePlay,
  faCircleQuestion,
  faClock,
  faClockRotateLeft,
  faFilm,
  faFire,
  faFontAwesome,
  faGamepad,
  faGear,
  faGraduationCap,
  faHouse,
  faMessage,
  faMusic,
  faNewspaper,
  faPlay,
  faPodcast,
  faShirt,
  faShoppingBag,
  faSignOut,
  faThumbsUp,
  faTowerBroadcast,
  faTrophy,
  faUser,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase/firebase";

function Sidebar() {

  function signout() {
    auth.signOut()
  } 
  return (
    <div className="sidebar">
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faHouse} className="icon" />
        <p>Home</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faPlay} className="icon" />
        <p>Shorts</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faUsersLine} className="icon" />
        <p>Subscriptions</p>
      </div>

      <hr />
      <div className="heading">
        <h4>
          You <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </h4>
      </div>

      <div className="sidebar_row">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <p>Your Channel</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
        <p>History</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faCirclePlay} className="icon" />
        <p>Your Videos</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faClock} className="icon" />
        <p>Watch Later</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        <p>Liked Videos</p>
      </div>
      <hr />
      <div className="heading">
        <h4>Subscriptions</h4>
      </div>
      <div className="sidebar_row">
        <img src="https://picsum.photos/40" alt="Backbench Coder" />
        <p>Backbench Coder</p>
      </div>
      
      <hr />
      <div className="heading">
        <h4>Explore</h4>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        <p>Shopping</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faFilm} className="icon" />
        <p>Flims</p>
      </div> 
        <div className="sidebar_row">
        <FontAwesomeIcon icon={faGamepad} className="icon" />
        <p>Gaming</p>
      </div>
      
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        <p>Learning</p>
      </div>
      <div className="sidebar_row">
        <FontAwesomeIcon icon={faShirt} className="icon" />
        <p>Fashion & beauty</p>
    </div>

       <div className="sidebar_row">
         <FontAwesomeIcon icon={faMessage} className="icon" />
        <p>Feedback</p>
       </div>
      <div className="sidebar_row" onClick={signout}>
        <FontAwesomeIcon icon={faSignOut} className="icon" />
        <p>signOut</p>
      </div>
    </div>
  );
}

export default Sidebar;
