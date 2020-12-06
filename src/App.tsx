import React from 'react';
import './App.css';
import Board from "./components/Board";
function App() {
  return (
    <div className="App">
      <header>
        <h2>Chess Master</h2>
      </header>
      <div style={{marginLeft : '33%' }}>
       <Board />
      </div>
    </div>
  );
}

export default App;
