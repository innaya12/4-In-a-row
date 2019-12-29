import React from 'react';
import ShowPlayers from './showPlayers';
import EndGame from './endGame';
const game = require('../classes/game');
const board = require('../classes/board');

class BuildBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list :0,
            innerList : 0,
            status: 0,
            currentPlayer: game.getCurrentPlayer(),
            status: 0,
        };
    }

    createRows(colIndex, innerlist, div){
        for (let rowIndex = 0; rowIndex < innerlist ; rowIndex++){
            let innerdiv = document.createElement("div");
            innerdiv.className = "row";
            innerdiv.id = `(${colIndex},${rowIndex})`;
            div.appendChild(innerdiv);
        }
    }

    createCols(list, innerlist, div){
        let answer;
        let computersClick;
        let player2 =  game.getPlayer2();
        let player2name = player2.name;
        let currentPlayer =  game.getCurrentPlayer();
        for (let colIndex =0; colIndex< list; colIndex++){
            let divWrapper = document.createElement("div");
            divWrapper.id = `col-${colIndex}`;
            divWrapper.className = "col";

            divWrapper.onclick = function(){
                function one(){
                    answer = game.move(colIndex);
                }

                function two(){
                    answer = game.move(computersClick);
                }
                if (player2name == "computer"){
                    computersClick = player2.makeMove(game.cols);
                    one();
                    if (answer == 3) {
                        setTimeout(function() {
                            two()
                        }, 1000);
                    }
                } else {
                    one(); // call this function when there is a click
                }
            };
            div.appendChild(divWrapper);
            this.createRows(colIndex, innerlist, divWrapper);
        }
    }

    buildingTheboard(list, innerlist){
        let element = document.getElementById("board");
        this.createCols(list, innerlist, element);
        game.event.on('status', () => {
            this.setState({
                currentPlayer: game.getCurrentPlayer()
            })
            if (game.status == 1) {
                this.setState({
                    status: 1
                })
            } else if (game.status == 2) {
                this.setState({
                    status:  2
                })
            }
        });
        
    }
    componentDidMount(){
        this.setState({
            list :game.cols,
            innerList : game.rows,
        }, ()=>{    
            this.buildingTheboard(this.state.list, this.state.innerList);
        })
    }

    render(){
        return(
            <div>
                {this.state.status == 0 &&
                <div>
                    <div className={"board"} id={"board"}>
                    </div>
                    <ShowPlayers currentPlayer={this.state.currentPlayer}/>
                </div>
                }
                {this.state.status == 1 &&
                    <EndGame endGameNum={this.state.status}/>
                }
                {this.state.status == 2 &&
                    <EndGame endGameNum={this.state.status}/>
                }
            </div>
        )

    }
}

export default BuildBoard;