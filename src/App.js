import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import Postform from "./Postform";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Router>
        <SideNav />
        <Main>
          <Header />
          <Posts />
          <Postform />
        </Main>
      </Router>
    </div>
  );
}

export default App;
