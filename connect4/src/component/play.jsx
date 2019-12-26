import React from 'react';
import BuildBoard from './buildBoard'
const game = require('../classes/game');

class Play extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        };
        this.getSettings();
    }



    getSettings(){
        console.log("1", game.getPlayer1());
        console.log("2", game.getPlayer2());
        console.log("3", game.getCurrentPlayer());
        // console.log("4", game.getBoard());
        let board = 4;
    }


    render(){
        return(
            <div>
                <h6>component game</h6>
                <BuildBoard />
               
            </div>
        )

    }
}

export default Play;