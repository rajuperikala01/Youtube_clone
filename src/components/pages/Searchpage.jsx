import Sidebar from "../Sidebar";
import "../search/searchcontainer.css";
import SearchContent from "../search/SearchContent";
import Minisidebar from "../Minisidebar";

function Searchpage({sidebar, input}) {
  return (
    <div className="searchpage">
      {sidebar ? <Sidebar /> : <Minisidebar />}      
      <SearchContent sidebar={sidebar} input={input}/>
    </div>
  );
}

export default Searchpage;
