import React, { useState } from 'react';
import Board from './components/Board/Board';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
