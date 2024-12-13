import React from 'react';

const trackStyle = {
  backgroundColor: 'var(--backgroundOppositeSecond)',
};

const railStyle = {
  backgroundColor: 'var(--backgroundFirst)',
};

const handleStyle = {
  border: 'none',
  backgroundColor: 'var(--greenColorConstant)',
  opacity: '1',
  height: '20px',
  width: '20px',
  top: '2px',
  rigth: '5px',
};

const activeDotStyle = {
  borderColor: 'var(--greenColorConstant)',
};

const marks = {
  0: '0$',
  100: '100$',
  200: '200$',
  300: '300$',
};

export { trackStyle, railStyle, handleStyle, activeDotStyle, marks };
