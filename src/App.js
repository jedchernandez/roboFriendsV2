import * as React from "react";
import "./App.css";
import NameSearch from "./components/SearchFilter/NameSearch";
import TagSearch from "./components/SearchFilter/TagSearch";
import RoboFriends from "./components/RoboFriends/RoboFriends";

const App = () => {
  return (
    <main data-testid="app" className="App">
      <div className="title-container">
        <h1 className="title">RoboFriends V2</h1>
      </div>
      <NameSearch />
      <TagSearch />
      <RoboFriends />
    </main>
  );
};

export default App;
