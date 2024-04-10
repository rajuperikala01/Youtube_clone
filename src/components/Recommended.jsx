import "./mainsection.css";
import { getPopularVideos } from "./Container";
import { useDispatch } from "react-redux";
import { addVideos } from "../redux/features/videoSlice";
import { status } from "../redux/features/statusSlice";

function Recommended() {
  const dispatch = useDispatch();

  const categories = [
    "All",
    "News",
    "Space News",
    "JavaScript",
    "Web Development",
    "Html",
    "Css",
    "React",
    "IndiaCricket",
    "Angular",
    "Andhra Pradesh",
  ];

  async function fetchData(category) {
    dispatch(status("loading"));
    if (category === "All") {
      await getPopularVideos(dispatch);
    } else {
      try {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${category}&regionCode=IN&type=video&key=${process.env.REACT_APP_API_KEY}`;
        const respose = await fetch(url);
        const videos = await respose.json();
        dispatch(addVideos(videos));
        dispatch(status("success"));
      } catch (error) {
        dispatch(status("fail"));
      }
    }
  }
  return (
    <div className="recommended">
      {categories.map((category) => (
        <div
          className="item"
          onClick={() => fetchData(category)}
          key={category}
        >
          <h5>{category}</h5>
        </div>
      ))}
    </div>
  );
}

export default Recommended;
