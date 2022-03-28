import React from "react";
import Background from "./components/Background/Background";
import Outline from "./components/Outline/Outline";
import "../src/App.css";

function App() {
  return (
    <>
      <div className="page">
        <div className="background">
          <div className="outline">
            <Outline />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
