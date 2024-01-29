import logo from './logo.svg';
import './App.css';
import BarChart from "./bargraph.js";
import * as React from 'react';
import MySlider from './slider.js';

function App() {
  return (
    <div className="App">
      <MySlider/>
      <BarChart />
    </div>
  );
}

export default App;
