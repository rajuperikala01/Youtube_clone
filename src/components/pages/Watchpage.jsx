import "../watch/watch.css";
import Videocard from "./../watch/Videocard";
import Channel from "../watch/Channel";
import Comments from "../watch/Comment Section/Comments";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "../watch/Comment Section/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  addComments,
  addNextComments,
} from "../../redux/features/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendedVideos } from "../../redux/features/recommended";
import { commentStatus } from '../../redux/features/commentStatus';

function Watchpage({ state }) { 
  const location = useLocation();
  const { id } = useParams();
  const {
    channelName,
    viewCount,
    image,
    subscribers,
    videoTitle,
    likeCount,
    category,
  } = location.state;
  console.log(location.state);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsState.comments.items);
  const totalResults = useSelector((state) => state.commentsState.comments.pageInfo ? state.commentsState.comments.pageInfo.totalResults : 0);
  const nextPage = useSelector(
    (state) => state.commentsState.comments.nextPageToken
  );
  const pageToken = useSelector((state) => state.videos.videos.nextPageVideos);
  const related = useSelector(
    (state) => state.recommended.recommendedVideos.items
  );
  const comment_Status = useSelector((state) => state.commentStatus);
  

  async function getComments() {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=${process.env.REACT_APP_API_KEY}`;
    try {
      const commentResponse = await fetch(url);
      const comments = await commentResponse.json();
      dispatch(addComments(comments));
      if (
        comments.error &&
        (comments.error.code === 400 ||
          comments.error.code === 401 ||
          comments.error.code === 403 ||
          comments.error.code === 404)
      ) {
        dispatch(commentStatus("fail"));
      } else {
        dispatch(commentStatus("success"));
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchData() {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&pageToken=${nextPage}&key=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(url);
      const nextComments = await response.json();
      dispatch(addNextComments(nextComments));
    } catch (error) {
      console.log(error.message);
    }
  }

  async function relatedVideos() {
    const url = `${
      process.env.REACT_APP_API_URL
    }/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${
      category || 24
    }&maxResults=9&key=${process.env.REACT_APP_API_KEY}`;

    try {
      const responce = await fetch(url);
      const result = await responce.json();
      dispatch(addRecommendedVideos(result));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getComments();
    relatedVideos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={comments? comments.length : 0}
      next={fetchData}
      hasMore={true}
    >
      <div className="watch">
        <div className="section1">
          <div className="Video">
            <iframe
              className="iframe"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0`}
              allowFullScreen
              frameborder="0"
              title={id}
              rel="0"
              
            ></iframe>
          </div>
          <h2 className="thumbnail">{videoTitle}</h2>
          <Channel
            channelName={channelName}
            subscribers={subscribers}
            image={image}
            likes={likeCount}
          />
          <Comments total={totalResults}/>
          {comment_Status === "success" && totalResults !== 0 && (
            <>
              {comments &&
                comments?.map((comment, index) => (
                  <Comment key={`${comment.id}+${index}`} comment={comment} />
                ))}
            </>
          )}

        </div>
        <div className="section2">
          {related?.map((video) => (
            <Videocard details={video} key={video.id} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Watchpage;
