import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import Box from '@mui/material/Box';

Chart.register(...registerables);

const MyBarGraph = () => {
  const [sliderValue, setSliderValue] = useState(10.0);
  const [sliderValue1, setSliderValue1] = useState(10.0);
  const [sliderValue2, setSliderValue2] = useState(10.0);
  const [sliderValue3, setSliderValue3] = useState(10.0);

  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        label: 'My Dataset',
        data: [sliderValue, sliderValue1, sliderValue2, sliderValue3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 20.0,
      },
    },
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleSliderChange1 = (event, newValue) => {
    setSliderValue1(newValue);
  };
  const handleSliderChange2 = (event, newValue) => {
    setSliderValue2(newValue);
  };
  const handleSliderChange3 = (event, newValue) => {
    setSliderValue3(newValue);
  };

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Slider value={sliderValue} onChange={handleSliderChange} 
        width={300}
        defaultValue={10.0}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
        min={1.0}
        max={20.0}
        step={0.1}/>
        <div>Value: {sliderValue}</div>

        <Slider value={sliderValue1} onChange={handleSliderChange1} 
        width={300}
        defaultValue={10.0}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
        min={1.0}
        max={20.0}
        step={0.1}/>
        <div>Value: {sliderValue1}</div>

        <Slider value={sliderValue2} onChange={handleSliderChange2} 
        width={300}
        defaultValue={10.0}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
        min={1.0}
        max={20.0}
        step={0.1}/>
        <div>Value: {sliderValue2}</div>

        <Slider value={sliderValue3} onChange={handleSliderChange3} 
        width={300}
        defaultValue={10.0}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
        min={1.0}
        max={20.0}
        step={0.1}/>
        <div>Value: {sliderValue3}</div>

      </Box>
      <Bar data={data} options={options} />
      
    </div>
  );
};

export default MyBarGraph;