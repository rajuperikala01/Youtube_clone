import SearchChannel from './SearchChannel';
import SearchVideo from './SearchVideo';
import './searchcontainer.css';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { nextPageVideos } from '../../redux/features/videoSlice';
import { status } from '../../redux/features/statusSlice';
import Skeleton from '../Skeleton';

function SearchContent({sidebar}) {
  const dispatch = useDispatch();
  const input = useSelector(state => state.input);
  const videos = useSelector(state => state.videos.videos.items);
  const fetchStatus = useSelector(state => state.status.status);
  const pageToken = useSelector(state => state.videos.videos.nextPageToken);

  async function fetchNewData() {
    dispatch(status("loading"));
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=related&regionCode=IN&pageToken=${pageToken}&key=${process.env.REACT_APP_API_KEY}`;
      const respose = await fetch(url);
      const videos = await respose.json();
      dispatch(nextPageVideos(videos));
      dispatch(status("success"));
      // console.log(videos);
    } catch (error) {
      dispatch(status("fail"));
      console.log(error.message);
    }
  }

  return (
    <div className={`${sidebar ? "SearchContent_sidebar" : "SearchContent"}`}>
      <InfiniteScroll
          dataLength={fetchStatus === "success" ? videos?.length : 0}
          next={fetchNewData}
          hasMore={true}
          loader={<Skeleton />}
      >
      {fetchStatus === 'success' ? 
        videos?.map((video,index) => video.id.kind === "youtube#video" ? <SearchVideo video={video} key={`video-${video.id.videoId}/${index}`}/> : <SearchChannel video={video} key={`channel-${video.id.channelId}-/xy${index}`}/>) : <h3>sorry</h3>
      }
      </InfiniteScroll>
    </div>
  )
}

export default SearchContent;