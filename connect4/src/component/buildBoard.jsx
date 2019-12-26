import React from 'react';
const game = require('../classes/game');

class BuildBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        };
        this.getSetting();
    }

    getSetting(){
        // console.log("4", game.getBoard());
    }

    render(){
        return(
            <div>
                <div class="board">
                    <div class="col">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                    </div>
                    <div class="col">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                    </div>  
                    <div class="col">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                    </div>
                    </div>

            </div>
        )

    }
}

export default BuildBoard;