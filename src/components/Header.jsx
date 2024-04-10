import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMicrophone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
import { status } from "../redux/features/statusSlice";
import { searchvideos } from "../redux/features/searchSlice";
import { auth } from "../firebase/firebase";
import { IoSearchOutline } from "react-icons/io5";
import {useAuthState} from 'react-firebase-hooks/auth'


function Header({ toggleSidebar, input, setInput }) {
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();
  const [user] = useAuthState(auth);
  async function login() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result) {
        dispatch(setUser(result.user));
        localStorage.setItem("user", JSON.stringify(result.user));
      } else {
        dispatch(setUser(result.user));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const videos = await respose.json();
      dispatch(searchvideos(videos));

    } catch (error) {
      dispatch(status("fail"));
    }
  }

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
        <form action="" className="searchbox" id="search">
          <input
            type="text"
            className="input"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Link to={"/results"} className="searchbutton" onClick={fetchData}>
            <button type="submit" className="react_button">
              <div >
                <IoSearchOutline className="search_icon"/>
              </div>
            </button>
          </Link>
        </form>

        <div className="microphone">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
        </div>
      </div>
      {user ? (
        <div className="nav3">
          <div className="icon1">
            <FontAwesomeIcon icon={faVideo} className="icon" />
          </div>
          <div className="icon1">
            <FontAwesomeIcon icon={faBell} className="icon" />
          </div>
          <div className="user_image">
            <img
              src={user?.photoURL}
              alt="User"
              className="user"
            />
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
