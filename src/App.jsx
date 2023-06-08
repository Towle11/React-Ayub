import React from 'react';
import TodoList from './Todo';
import Counter from './Counter';
import LightSwitch from './Light';

const App = () => {
  return (
    <div className="container">
  
      <TodoList/>
      <Counter/>
      <LightSwitch/>
    </div>
  );
};


export default App;
