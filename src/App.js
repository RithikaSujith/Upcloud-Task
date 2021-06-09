import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />      
      <Sidebar />
      {/* <div className="image">
        <img src={map} alt="map image"/>
      </div> */}
      {/* <div className="row">
        <div className="column">
          <Sidebar/>
        </div>
        <div className="column">
          <img src={map} alt="map image" style="width:100%"/>
        </div>
      </div>  */}
      
    </div>
  );
}

export default App;