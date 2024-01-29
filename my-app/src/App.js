import './App.css';
import MyBarGraph from "./bargraph.js";
import * as React from 'react';
import Header from "./header.js";
import Tex2SVG from "react-hook-mathjax";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='blurb'>The importance of red wine quality lies in its dual impact on health and taste, creating a delightful and satisfying experience that enhances both well-being and enjoyment.</div>
      <MyBarGraph />
      <div className="row">
        <div className='Col1'>
          <h1>Alcohol</h1>
          <div className="item">Remember to take hydrometer readings throughout the process to estimate alcohol content. If necessary, adjust sugar levels or dilute the wine to achieve your desired alcohol percentage</div>
          <div className="item">Initial Specific Gravity: Before fermentation begins, measure the specific gravity of the wine must using a hydrometer. Float the hydrometer in a sample of the wine must in a graduated cylinder or sample jar. Note the reading where the hydrometer's scale intersects the liquid level.</div>
          <div className="item">Fermentation: Allow the wine to ferment. During fermentation, the yeast will convert sugars into alcohol and carbon dioxide. The specific gravity will decrease as the sugar is consumed.</div>
          <div className="item">Fine Specific Gravity: After fermentation is complete, measure the final specific gravity using the same method as in step 1.</div>
          <div className="item">Tips: 
Adding sugar to a liquid will increase its specific gravity, while diluting the liquid with water will decrease the specific gravity. Specific gravity is a measure of the density of a substance compared to the density of water.</div>
        </div>
        <div className='Col1'>
          <h1>Sulphate</h1>
          <div className="item">
            <Tex2SVG display="inline" latex="Alcohol=(((InitialSG - FinalSG) x 131.25) / 7.362" />
          </div>
          <div className="item">In potassium sulfate (g/liter)</div>
          <div className="item"></div>
        </div>
        <div className='Col1'>
          <h1>Citric Acid</h1>
          <div className="item">(g/liter)</div>
        </div>
        <div className='Col1'>
          <h1>Volatile Acidity</h1>
          <div className="item">In acetic acid (g/liter)</div>
        </div>
      </div>
    </div>
  );
}

export default App;
