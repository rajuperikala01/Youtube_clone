import React, { useEffect } from "react";
import "./mainsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getPopularVideos } from "./Container";
import {
  faChevronRight,
  faCirclePlay,
  faClock,
  faClockRotateLeft,
  faFilm,
 
  faGamepad,

  faGraduationCap,

  faMessage,

  faPlay,

  faShirt,
  faShoppingBag,
  faSignOut,
  faThumbsUp,
 
  faUser,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux"
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { PiFilmSlate } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";
import { PiSignOutThin } from "react-icons/pi";
import { PiTShirtThin } from "react-icons/pi";

function Sidebar() {
  const auth = getAuth();
  const dispatch = useDispatch();
  function signout() {
    if(auth) {
      auth.signOut();
      console.log("Sign out successful");
      localStorage.clear();
    }
    else{
      console.log("sign out not successful");
    }
    
  } 
  return (
    <div className="sidebar">
      <div className="sidebar_row" onClick={() => getPopularVideos(dispatch)}>
        <IoMdHome className="icon" />
        <p>Home</p>
      </div>
      <div className="sidebar_row">
        <SiYoutubeshorts icon={faPlay} className="icon" />
        <p>Shorts</p>
      </div>
      <div className="sidebar_row">
        <MdOutlineSubscriptions icon={faUsersLine} className="icon" />
        <p>Subscriptions</p>
      </div>

      <hr />
      <div className="heading">
        <h4>
          You <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </h4>
      </div>

      <div className="sidebar_row">
        <PiUserSquare icon={faUser} className="icon" />
        <p>Your Channel</p>
      </div>
      <div className="sidebar_row">
        <GoHistory icon={faClockRotateLeft} className="icon" />
        <p>History</p>
      </div>
      <div className="sidebar_row">
        <MdPlaylistPlay icon={faCirclePlay} className="icon" />
        <p>Your Videos</p>
      </div>
      <div className="sidebar_row">
        <MdOutlineWatchLater icon={faClock} className="icon" />
        <p>Watch Later</p>
      </div>
      <div className="sidebar_row">
        <BiLike icon={faThumbsUp} className="icon" />
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
        <BsBag icon={faShoppingBag} className="icon" />
        <p>Shopping</p>
      </div>
      <div className="sidebar_row">
        <PiFilmSlate icon={faFilm} className="icon" />
        <p>Flims</p>
      </div> 
        <div className="sidebar_row">
        <SiYoutubegaming icon={faGamepad} className="icon" />
        <p>Gaming</p>
      </div>
      
      <div className="sidebar_row">
        <HiOutlineAcademicCap icon={faGraduationCap} className="icon" />
        <p>Learning</p>
      </div>
      <div className="sidebar_row">
        <PiTShirtThin icon={faShirt} className="icon" />
        <p>Fashion & beauty</p>
    </div>

       <div className="sidebar_row">
         <MdOutlineFeedback icon={faMessage} className="icon" />
        <p>Feedback</p>
       </div>
      <div className="sidebar_row" onClick={signout}>
        <PiSignOutThin icon={faSignOut} className="icon" />
        <p>signOut</p>
      </div>
    </div>
  );
}

export default Sidebar;
