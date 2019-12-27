import React from 'react';
import BuildBoard from './buildBoard'
import ShowPlayers from './showPlayers';
const game = require('../classes/game');

class Play extends React.Component{
    constructor(props){
        super(props)
      
        // this.getSettings();
    }

    componentDidMount(){
        // console.log("1", game.getPlayer1());
        // console.log("2", game.getPlayer2());
        // console.log("3", game.getCurrentPlayer())
    }

    render(){
        return(
            <div className="play">
                <h2>Round 1</h2>
                <BuildBoard />
                <ShowPlayers />
            </div>
        )
    }
}

export default Play;