import React, { useEffect, lazy, Suspense } from "react";
import "./mainsection.css";
import Video from "./Video";
import Recommended from "./Recommended";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../redux/features/statusSlice";
import { addVideos, nextPageVideos } from "../redux/features/videoSlice";
import Skeleton from "./Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";

export const getPopularVideos = async (dispatch) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=9&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;
    dispatch(status("loading"));
    const response = await fetch(url);
    const videos = await response.json();
    dispatch(addVideos(videos));
    if (
      videos.error &&
      (videos.error.code === 400 ||
        videos.error.code === 401 ||
        videos.error.code === 403 ||
        videos.error.code === 404)
    ) {
      dispatch(status("fail"));
    } else {
      dispatch(status("success"));
    }
  } catch (error) {
    dispatch(status("fail"));
  }
};
function Container({sidebar}) {
  const list = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const result = useSelector((state) => state.status.status);
  const videos = useSelector((state) => state.videos.videos.items);
  const pageToken = useSelector((state) => state.videos.videos.nextPageToken);

  useEffect(() => {
    getPopularVideos(dispatch);
  }, []);

  async function fetchData() {
    const next = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,id&chart=mostPopular&maxResults=9&regionCode=IN&pageToken=${pageToken}&key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(next);
      const nextVideos = await response.json();
      dispatch(nextPageVideos(nextVideos));
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={`${sidebar ? "hero_section_sidebar": "hero_section"}`}>
      <Recommended />
      <InfiniteScroll
        dataLength={
          result === "success" && videos !== undefined ? videos.length : 0
        }
        next={fetchData}
        hasMore={true}
        loader={<Skeleton />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {result === "success" && videos !== undefined ? (
          <div className="container">
            {videos.map((video) => (
              <>
              {typeof video === "object" ?
              (<Video
                video={video}
                id={video.id}
                loading={lazy}
                key={video.id}
              />):(
                <div className="loaded"><h3>All Cought up</h3></div>
              )}</>
            ))}
          </div>
        ) : (
          <div className="container">
            {list.map((item) => (
              <Skeleton key={item} />
            ))}
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}
export default Container;
