import './App.css';
import MyBarGraph from "./bargraph.js";
import * as React from 'react';
import MySlider from './slider.js';

function App() {
  return (
    <div className="App">
      <MySlider />
      <MyBarGraph />
    </div>
  );
}

export default App;
