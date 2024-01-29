import logo from './logo.svg';
import './App.css';
import BarChart from "./bargraph.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
      <BarChart />
    </div>
  );
}

export default App;
