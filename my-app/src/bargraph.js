import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const MyBarGraph = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'My Dataset',
        data: [sliderValue, sliderValue * 2, sliderValue * 3],
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
      },
    },
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
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
      <Bar data={data} options={options} />
      
    </div>
  );
};

export default MyBarGraph;