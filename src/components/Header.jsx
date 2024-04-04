import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBell,
  faMicrophone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
import { status } from "../redux/features/statusSlice";
import { addVideos } from "../redux/features/videoSlice";
import { auth } from "../firebase/firebase";

function Header({toggleSidebar}) {
  const [input, setInput] = useState("");
  const [userDetails, setUserDetails] = useState({});
  // const [accessToken, setAccessToken] = useState("");
  const dispatch = useDispatch();
  // const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  
  async function login() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result) {
        dispatch(setUser(result.user));
        localStorage.setItem("user", JSON.stringify(result.user));
        console.log(result);
      } else {
        dispatch(setUser(result.user));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    dispatch(status("loading"));
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const videos = await respose.json();
      dispatch(addVideos(videos));
      dispatch(status("success"));
      // console.log(videos);
    } catch (error) {
      dispatch(status("fail"));
      console.log(error.message);
    }
  }

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="Header">
      <div className="nav1">
        <div className="icon1" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
        <div className="logo">
          <img
            className="youtubelogo"
            src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png"
            alt="Youtube"
          />
        </div>
      </div>
      <div className="nav2">
        <form action="" className="form" id="search">
          <div className="searchbox">
            <input
              type="text"
              className="input"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <button className="searchbutton" onClick={(e) => {e.preventDefault()}}>
          <Link to="/results" onClick={fetchData}>
            <div className="searchbutton">
              <FontAwesomeIcon icon={faMagnifyingGlass} class="icon" />
            </div>
          </Link>
          </button>
          
        </form>

        <div className="microphone">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
        </div>
      </div>
      {auth ? (
        <div className="nav3">
          <div className="icon1">
            <FontAwesomeIcon icon={faVideo} className="icon" />
          </div>
          <div className="icon1">
            <FontAwesomeIcon icon={faBell} className="icon" />
          </div>
          <div className="user_img">
            <img src="https://picsum.photos/200/300" alt="User" className="user" />
          </div>
        </div>
      ) : (
        <div>
          <button className="signin" id="signIn" onClick={login}>
            SignIn
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
