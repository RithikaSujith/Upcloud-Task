import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import map from "./assets/images/map.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />      
      <Sidebar />
      <img src={map} alt="map image"/>
              
    </>
  );
}

export default App;