import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import Box from '@mui/material/Box';
import './bargraph.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { MathComponent } from "mathjax-react";

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
            <h1>Wine Variables</h1>
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
              <h1>Wine Quality</h1>
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
      <div className="row">
        <div className='Col1'>
          <h1>% Alcohol Content</h1>
          <div className="item">Specific gravity is a measure of the density of a substance compared to the density of water.
          <br/> Initial Specific Gravity: Before fermentation begins, measure the specific gravity of the wine using a hydrometer. Float the hydrometer in a sample of the wine in a graduated cylinder or sample jar.
          <br/> Allow the wine to ferment. During fermentation, the yeast will convert sugars into alcohol and carbon dioxide. The specific gravity will decrease as the sugar is consumed.
          <br/> Fine Specific Gravity: After fermentation is complete, measure the final specific gravity using the same method as above.
          <MathComponent tex={String.raw`Alc.\%=\frac{(InitialSG - FinalSG) * 131.25}{7.362}`} />
          <br/> Tips: Adding sugar to a liquid will increase its specific gravity, while diluting the liquid with water will decrease the specific gravity.

</div>
        </div>
        <div className='Col1'>
          <h1>Sulphate</h1>
          <div className="item">
          </div>
          <div className="item">These compounds release sulfur dioxide when added to wine, helping to protect it from spoilage, oxidation, and unwanted microbial activity.
          <br/> Based on the difference between the current sulfite level and the desired level, calculate the amount of the compound needed for adjustment.
          <br/> The calculation will depend on the volume of wine and the desired increase in sulfur dioxide (SO2). 
          <br/> Measure the appropriate amount of powder and dissolve in warm water to create a sulphate solution before slowly adding it to the red wine. Ensure even distribution. Wait for some time to allow the sulfate to fully integrate into the wine before retesting to ensure that it meets the desired target.
</div>
        </div>
        <div className='Col1'>
          <h1>Citric Acid</h1>
          <div className="item">In winemaking, citric acid is used as an additive to adjust the acidity of the wine, an essential factor that influences its taste, balance, and stability.
          <br/> Citric acid is added to crushed grapes or juice to increase the overall acidity of the wine, particularly relevant if the grapes used for winemaking are low in natural acidity.
          <br/> Citric acid has antioxidant properties, which means it can help prevent oxidation in wine.
          <br/> In small amounts, citric acid can enhance the fruitiness and brightness of the wine's flavors. It can be used to lift the overall flavor profile, especially in wines made from low-acid grapes.
          <br/> Measure the calculated amount of citric acid powder. Dissolve it in a small amount of water to create a citric acid solution. Stir until fully dissolved.


</div>
        </div>
        <div className='Col1'>
          <h1>Volatile Acidity</h1>
          <div className="item">Volatile acidity refers to acetic acid, a natural compound arising during the fermentation process which contributes to the perception of sourness and vinegar-like aromas.
          <br/> High levels of volatile acidity can be undesirable, leading to off-flavors and aromas, signs of spoilage or microbial issues.
          <br/> Volatile acidity is influenced by the cleanliness of winemaking equipment, the health of the grapes, the presence of acetic acid bacteria, and the winemaking practices employed. 
          <br/> Tips: Ensure that all winemaking equipment are thoroughly cleaned and sanitized to prevent contamination.
          <br/> If you suspect contamination, consider adding sulfites and resealing containers to inhibit the growth of acetic acid bacteria.
</div>
        </div>
      </div>
    </div>
  );
};

export default MyBarGraph;