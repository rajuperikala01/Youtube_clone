import { Provider } from "react-redux";
import Header from "./components/Header";
import { store } from "./redux/store";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Searchpage from "./components/pages/Searchpage";
import Watchpage from "./components/pages/Watchpage";
import "./index.css";
import { useState } from "react";

// const router = (
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="/">
//         <Route path="/" element={<Homepage />} />
//         <Route path="/results" element={<Searchpage />} />
//         <Route path="/watch/:id" element={<Watchpage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
function App() {

  const [sidebar, setSidebar] = useState(true);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header toggleSidebar={toggleSidebar}/>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Homepage sidebar={sidebar}/>} />
              <Route path="/results" element={<Searchpage sidebar={sidebar}/>} />
              <Route path="/watch/:id" element={<Watchpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
