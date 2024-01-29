import './App.css';
import MyBarGraph from "./bargraph.js";
import * as React from 'react';
import Header from "./header.js";
import Tex2SVG from "react-hook-mathjax";

function App() {
  return (
    <div className="App">
      <Header />
      <MyBarGraph />
      <div className="row">
        <div className='Col1'>
          <h1>Alcohol</h1>
          <div className="item">Remember to take hydrometer readings throughout the process to estimate alcohol content. If necessary, adjust sugar levels or dilute the wine to achieve your desired alcohol percentage</div>
        </div>
        <div className='Col1'>
          <h1>Sulphate</h1>
          <div className="item">
            <Tex2SVG display="inline" latex="Alcohol=(((InitialSG - FinalSG) x 131.25) / 7.362" />
          </div>
        </div>
        <div className='Col1'>
          <h1>Citric Acid</h1>
          <div className="item">Remember to take hydrometer readings throughout the process to estimate alcohol content. If necessary, adjust sugar levels or dilute the wine to achieve your desired alcohol percentage</div>
        </div>
        <div className='Col1'>
          <h1>Volatile Acidity</h1>
          <div className="item">Remember to take hydrometer readings throughout the process to estimate alcohol content. If necessary, adjust sugar levels or dilute the wine to achieve your desired alcohol percentage</div>
        </div>
      </div>
    </div>
  );
}

export default App;
