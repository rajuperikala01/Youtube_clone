import Container from "../Container";
import Minisidebar from "../Minisidebar";
import Sidebar from "../Sidebar";
import "../mainsection.css";

function Homepage({sidebar}) {
  return (
    <div className="maincontainer">
      {sidebar ? <Sidebar />: <Minisidebar />}   
      <Container sidebar={sidebar}/>
    </div>
  );
}

export default Homepage ;