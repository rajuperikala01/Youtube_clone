import "./mainsection.css";

function Skeleton() {
  return (
    <div className="Skeleton">
      <div className="box1"></div>
      <div className="box2">
        <div className="circle-box">
          <div className="circle"></div>
        </div>
        <div className="rectangular-box">
          <div className="row"></div>
          <div className="row2"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
