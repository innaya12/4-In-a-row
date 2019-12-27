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
        console.log("4", game.getBoard());
    }

    render(){
        return(
            <div>
                <div className="board">
                    <div className="col">
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                    </div>
                    <div className="col">
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                    </div>  
                    <div className="col">
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                    </div>
                    </div>

            </div>
        )

    }
}

export default BuildBoard;