import SearchChannel from './SearchChannel';
import SearchVideo from './SearchVideo';
import './searchcontainer.css';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { addSearchvideos } from '../../redux/features/searchSlice';
import { status } from '../../redux/features/statusSlice';
import Playlist from './Playlist';
import Searchskeleton from './Searchskeleton';


function SearchContent({sidebar, input}) {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.input.videos.items);
  // const fetchStatus = useSelector(state => state.status.status);
  const pageToken = useSelector(state => state.input.videos.nextPageToken);
  const list = [1,2,3,4,5,6,7,8,9]
  async function fetchNewData() {
    dispatch(status("loading"));
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${input}&regionCode=IN&pageToken=${pageToken}&key=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const videos = await response.json();
      dispatch(addSearchvideos(videos));
      dispatch(status("success"));
    } catch (error) {
      dispatch(status("fail"));
    }
  }

  return (
    <div className={`${sidebar ? "SearchContent_sidebar" : "SearchContent"}`}>
      <InfiniteScroll
          dataLength={videos ? videos?.length : 0}
          next={fetchNewData}
          hasMore={true}
          loader={<p>Loading..</p>}
      >
      {videos ?
        videos?.map((video,index) =>{
          if(video) {
            if(video.id.kind === "youtube#video") {
              return <SearchVideo video={video} key={`video-${video.id.videoId}/${index}`}/>
            }
            if(video.id.kind === "youtube#channel") {
              return <SearchChannel video={video} key={`channel-${video.id.channelId}-/xy${index}`}/>
            }
            if(video.id.kind === "youtube#playlist") {
              return <Playlist video={video} />
            }
          }}) : list.map(() => <Searchskeleton />)
      }
      </InfiniteScroll>
    </div>
  )
}

export default SearchContent;