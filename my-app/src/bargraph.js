import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import Box from '@mui/material/Box';
import './bargraph.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

Chart.register(...registerables);

const MyBarGraph = () => {
  const [sliderValue, setSliderValue] = useState(7.5);
  const [sliderValue1, setSliderValue1] = useState(1.0);
  const [sliderValue2, setSliderValue2] = useState(0.5);
  const [sliderValue3, setSliderValue3] = useState(1.0);
  const minslider = 0;

  function calcQuality(alcohol, sulfate, citric_acid, volatile_acidity) {
    let quality = Math.round(0.306035 * alcohol + 0.699891 * sulfate - 0.0782779 * citric_acid - 1.27901 * volatile_acidity + 2.6814)
    return quality < 0 ? 0 : quality;
  }

  const theme = createTheme({
    palette: {
      primary: pink
    },
  });

  const data = {
    labels: ['Alcohol (vol.%)', 'Sulphate (g/L)', 'Citric Acid (g/L)', 'VA (g/L)'],
    datasets: [
      {
        label: '',
        data: [sliderValue, sliderValue1, sliderValue2, sliderValue3],
        backgroundColor: '#fadadd',
        borderColor: '#fadadd',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },           
    },
    indexAxis: 'y',
    responsive: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x:{
        beginAtZero: true,
        min: 0.0,
        max: 16.0,
      },
      y: {
        beginAtZero: true,
        min: 0.0,
        max: 15.0,
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
      <div class="row">
        <div class="Col1">
            <h1>Wine Variables: </h1>
              <br />
              <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <div>Percent Alcohol Content: {sliderValue}%</div>
              <Slider value={sliderValue} onChange={handleSliderChange} 
              width={300}
              defaultValue={10.0}
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              min={minslider}
              max={16.0}
              step={0.1}
              color='primary'
              />
              
<br />
              <div>Sulphate Content: {sliderValue1} g/liter</div>
              <Slider value={sliderValue1} onChange={handleSliderChange1} 
              width={300}
              defaultValue={1.0}
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              min={minslider}
              max={2.0}
              step={0.1}/>

              <div>Citric Acid Content: {sliderValue2} g/liter</div>
              <Slider value={sliderValue2} onChange={handleSliderChange2} 
              width={300}
              defaultValue={1.0}
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              min={minslider}
              max={1.0}
              step={0.1}/>
              

              <div>Volatile Acidity: {sliderValue3} g/liter</div>
              <Slider value={sliderValue3} onChange={handleSliderChange3} 
              width={300}
              defaultValue={1.0}
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              min={minslider}
              max={2.0}
              step={0.1}/>
              
            </Box>
            </ThemeProvider>
            </div>
            <div class = "Col2">
              <Bar data={data} options={options} />
            </div>
            <div class = "Col3">
              <h1>Wine Quality: </h1>
              <br />
              <div>
                <span class="stacked-fraction">
                  <div class="numerator">
                    <h1>{calcQuality(sliderValue, sliderValue1, sliderValue2, sliderValue3)}</h1>
                  </div>
                  <div class="denominator">
                    <h1>10</h1>
                  </div>
                </span>
              </div>
            </div>
      </div>
    </div>
  );
};

export default MyBarGraph;