import { Provider } from "react-redux";
import Header from "./components/Header";
import { store } from "./redux/store";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Searchpage from "./components/pages/Searchpage";
import Watchpage from "./components/pages/Watchpage";
import "./index.css";
import { useState } from "react";
import ScrolltoTop from "./ScrolltoTop";

function App() {

  const [sidebar, setSidebar] = useState(true);
  const [input , setInput] = useState("");
  function toggleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <ScrolltoTop />
          <Header toggleSidebar={toggleSidebar} input={input} setInput={setInput}/>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Homepage sidebar={sidebar}/>} />
              <Route path="/results" element={<Searchpage sidebar={sidebar} input={input}/>} />
              <Route path="/watch/:id" element={<Watchpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
