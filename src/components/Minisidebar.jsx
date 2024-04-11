import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./mainsection.css"
function Minisidebar() {
  return (
    <div className='mini_sidebar'>
      <Link to={"/"} className="box_row">
        <GoHome />
        <p>Home</p>
      </Link>
      <div className="box_row">
        <SiYoutubeshorts />
        <p>Shorts</p>
      </div>
      <div className="box_row">
        <MdOutlineSubscriptions />
        <p>Subscriptions</p>
      </div>

      <div className="box_row">
        <CiYoutube />
        <p>You</p>
      </div>
    </div>
  )
}

export default Minisidebar
