import React from 'react';
const game = require('../classes/game');

class BuildBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list :0,
            innerList : 0,
        };
    }

    createRows(colIndex, innerlist, div){
        for (let rowIndex = 0; rowIndex < innerlist ; rowIndex++){
            let innerdiv = document.createElement("div");
            innerdiv.className = "row";
            innerdiv.id = `(${colIndex}, ${rowIndex})`;
            div.appendChild(innerdiv);
        }
    }

    createCols(list, innerlist, div){
        let answer;
        for (let colIndex =0; colIndex< list; colIndex++){
            let divWrapper = document.createElement("div");
            divWrapper.id = `col-${colIndex}`;
            divWrapper.className = "col";
            divWrapper.onclick = function(){
                let player2 =  game.getPlayer2();
                let player2name = player2.name;
                let currentPlayer =  game.getCurrentPlayer();
                let currentPlayername = currentPlayer.name;
                if (player2name == "computer"){
                    if (answer == 1){
                        console.log("answer =",answer);
                        currentPlayer.ifWinning();
                    } else if (answer == 2 ){
                        console.log("answer =",answer);
                        alert("The board is full - Game Over");
                    } else {
                        console.log("answer =",answer);
                        console.log("player1 turn");
                        answer = game.move(colIndex);
                        console.log("answer", answer);
                        setTimeout(() => {
                            console.log("cmputers turn");
                            console.log("game.cols", game.cols)
                            let randomClick = currentPlayer.makeMove(game.cols);
                            answer = game.move(randomClick);
                            console.log("answer2", answer);
                        }, 3000);
                    }
                }
            };
            div.appendChild(divWrapper);
            this.createRows(colIndex, innerlist, divWrapper);
        }
    }

    buildingTheboard(list, innerlist){
        let element = document.getElementById("board");
        this.createCols(list, innerlist, element);
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
            <div className={"board"} id={"board"}>
            </div>
        )

    }
}

export default BuildBoard;