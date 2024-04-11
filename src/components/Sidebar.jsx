import "./mainsection.css";
import { Link } from "react-router-dom";
import { getPopularVideos } from "./Container";
import { useDispatch } from "react-redux";
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
import { RiArrowRightSLine } from "react-icons/ri";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  function signout() {
    if (user) {
      auth.signOut();
      console.log("Sign out successful");
      localStorage.clear();
    } else {
      console.log("sign out not successful");
    }
  }
  return (
    <div className="sidebar">
      <Link
        to={"/"}
        className="sidebar_row"
        onClick={() => getPopularVideos(dispatch)}
      >
        <IoMdHome className="icon" />
        <p>Home</p>
      </Link>
      <div className="sidebar_row">
        <SiYoutubeshorts  className="icon" />
        <p>Shorts</p>
      </div>
      <div className="sidebar_row">
        <MdOutlineSubscriptions  className="icon" />
        <p>Subscriptions</p>
      </div>

      <hr />
      <div className="heading">
        <h4>
          You <RiArrowRightSLine className="icon" />
        </h4>
      </div>

      <div className="sidebar_row">
        <PiUserSquare  className="icon" />
        <p>Your Channel</p>
      </div>
      <div className="sidebar_row">
        <GoHistory  className="icon" />
        <p>History</p>
      </div>
      <div className="sidebar_row">
        <MdPlaylistPlay  className="icon" />
        <p>Your Videos</p>
      </div>
      <div className="sidebar_row">
        <MdOutlineWatchLater  className="icon" />
        <p>Watch Later</p>
      </div>
      <div className="sidebar_row">
        <BiLike  className="icon" />
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
        <BsBag  className="icon" />
        <p>Shopping</p>
      </div>
      <div className="sidebar_row">
        <PiFilmSlate className="icon" />
        <p>Flims</p>
      </div>
      <div className="sidebar_row">
        <SiYoutubegaming  className="icon" />
        <p>Gaming</p>
      </div>

      <div className="sidebar_row">
        <HiOutlineAcademicCap className="icon" />
        <p>Learning</p>
      </div>
      <div className="sidebar_row">
        <PiTShirtThin className="icon" />
        <p>Fashion & beauty</p>
      </div>

      <div className="sidebar_row">
        <MdOutlineFeedback  className="icon" />
        <p>Feedback</p>
      </div>
      {user && (
        <div className="sidebar_row" onClick={signout}>
          <PiSignOutThin className="icon" />
          <p>signOut</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
