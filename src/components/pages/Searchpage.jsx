import Sidebar from "../Sidebar";
import "../search/searchcontainer.css";
import SearchContent from "../search/SearchContent";
import Minisidebar from "../Minisidebar";

function Searchpage({sidebar}) {
  return (
    <div className="searchpage">
      {sidebar ? <Sidebar /> : <Minisidebar />}      
      <SearchContent sidebar={sidebar}/>
    </div>
  );
}

export default Searchpage;
