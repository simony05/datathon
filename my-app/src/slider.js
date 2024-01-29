import React, { useState } from 'react';
import Range from 'react-range';

const MyRangeSlider = () => {
  const [values, setValues] = useState([20, 50]);

  return (
    <div>
      <Range
        values={values}
        onChange={setValues}
        min={0}
max={100}
        step={1}
      />
      <div>Values: {values.join(', ')}</div>
    </div>
  );
};

export default MyRangeSlider;