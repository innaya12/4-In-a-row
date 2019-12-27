import React from 'react';
import './style/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GameEntry from './component/gameEntry';
import OnePlayer from './component/player';
import Play from './component/play';
const game = require('./classes/game');
const Board = require('./classes/board');




function App() {
  return (
    <Router>
      <div className="main">
        <h1 className='header'>Connect Four</h1>
        <Switch>
          <Route path={"/Player"} component={OnePlayer}/>
          <Route path={"/play"} component={Play}/>
          <Route path={"/"} component={GameEntry}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
