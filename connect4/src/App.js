import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import GameEntry from './component/gameEntry';
// import OnePlayer from './component/onePlayer';
// import TwoPlayers from './component/twoPlayers'
// import Play from './component/play'
const game = require('./classes/game');
// const Board = require('./classes/board');




function App() {
  game.setPlayers()
  game.initBoard(4, 4);
  game.move(0, 'pink');
  game.move(0, 'pink');
  game.move(0, 'blue');
  game.move(0, 'pink');
  game.move(1, 'blue');
  game.move(1, 'pink');
  game.move(1, 'pink');
  game.move(1, 'blue');
  game.move(2, 'blue');
  game.move(2, 'pink');
  game.move(2, 'pink');
  game.move(2, 'blue');
  game.move(3, 'pink');
  game.move(3, 'blue');
  game.move(3, 'pink');
  game.move(3, 'blue');
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path={"/oneplayer"} component={OnePlayer}/>
          <Route path={"/twoplayers"} component={TwoPlayers}/>
          <Route path={"/play"} component={Play}/>
          <Route path={"/"} component={GameEntry}/> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
