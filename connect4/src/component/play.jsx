import React from 'react';
import BuildBoard from './buildBoard'
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
            <div>
                <h6>component play</h6>
                <h2>here</h2>
                <BuildBoard />
            </div>
        )
    }
}

export default Play;