import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
function Minisidebar() {
  return (
    <div className='mini_sidebar'>
      <div className="box_row">
        <GoHome />
        <p>Home</p>
      </div>
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
