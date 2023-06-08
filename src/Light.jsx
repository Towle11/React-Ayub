import React, { useState } from 'react';
import './Ligh.css';
import lightOnImage from './light-on.png';
import lightOffImage from './light-off.png';

const Light = () => {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => {
    setIsOn(true);
  };

  const turnOff = () => {
    setIsOn(false);
  };

  return (
    <div className={`container ${isOn ? 'on' : 'off'}`}>
        <h3>Switch Light</h3>
      <div className={`light ${isOn ? 'on' : 'off'}`}>
        <img
          src={isOn ? lightOnImage : lightOffImage}
          alt={isOn ? 'Light On' : 'Light Off'}
          className="light-image"
        />
      </div>
      <div className="buttons-container">
        <button onClick={turnOn} disabled={isOn}>Turn On</button>
        <button onClick={turnOff} disabled={!isOn}>Turn Off</button>
      </div>
    </div>
  );
};

export default Light;
