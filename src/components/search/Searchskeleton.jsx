import React from "react";

function Searchskeleton() {
  return (
    <div className="searchskeleton">
      <div className="searchbox1"></div>
      <div className="searchbox2">
        <div className="searchtitle"></div>
        <div className="channelbox">
          <div className="imgbox"></div>
          <div className="searchchannelbox"></div>
        </div>
      </div>
    </div>
  );
}

export default Searchskeleton;
