import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import Dropdown from "./components/Dropdown";
import Blocks from "./components/Blocks";

function App() {
  return (
    <body>
      <Navbar />
      
      <div className="fame">
        <div className="container">
          <Dropdown />
        </div>


        <div className="blockss">
          <Blocks />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          <Blocks  />
          
          </div>
      </div>
    </body>
  );
}

export default App;
