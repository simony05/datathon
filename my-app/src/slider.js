import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const MySlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
        <Box sx={{ width: 300 }}>
            <Slider
            size="small"
            value={sliderValue}
            onChange={handleSliderChange}
            defaultValue={10.0}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={1.0}
            max={20.0}
            step={0.1}
            />
        </Box>
      <div>Value: {sliderValue}</div>
    </div>
  );
};

export default MySlider;