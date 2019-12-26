import React from 'react';
import './App.css';
const Game = require('./classes/game');
const game = new Game;


function App() {
  game.initBoard(4,4);
  game.move(0, 'pink');
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
