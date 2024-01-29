import logo from './logo.svg';
import './App.css';
import BarChart from "./bargraph.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={4.6}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={1.0}
          max={20.0}
          step={0.1}
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
      <BarChart />
    </div>
  );
}

export default App;
