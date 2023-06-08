import React, { useState } from 'react';
import './Count.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {

      setCount(count - 1);
    
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
        <h2 className='heading'>Counter</h2>
      <button className="counter__button" onClick={handleDecrement}>-</button>
      <span className="counter__value">{count}</span>
      <button className="counter__button" onClick={handleIncrement}>+</button>
      <button className="counter__reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
