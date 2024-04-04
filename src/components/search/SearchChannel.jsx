import './searchcontainer.css'

function SearchChannel({video}) {
  const {id,snippet:{publishedAt,title,description,thumbnails:{medium},channelTitle}} = video
  return (
    <div>
      <div className="searchChannel">
      <div className="channelimg">
        <img src={medium.url} alt="" />
      </div>
      <div className="channel">
        <h4>{channelTitle}</h4>
        <div className="ChannelSubscribers">
            <p>@{channelTitle}</p>
            {/* <FontAwesomeIcon icon={faCircleDot} /> */}
            <p>4M subscribers</p>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        
      </div>
      <div className="subscribe">
            <p className='subscription'>Subscribe</p>
        </div>
    </div>
    </div>
  )
}

export default SearchChannel;
