import React from 'react';
const game = require('../classes/game');
const board = require('../classes/board');

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
            innerdiv.id = `(${colIndex},${rowIndex})`;
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
                console.log("click", colIndex);
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
                        // console.log("board.currnetMove", board.currentMove);
                        // document.getElementById(`(${this.currentMove[1]},${this.currentMove[1]})`).style.backgroundColor = "red";
                        // console.log("elem", elem)
                        function one(){
                            console.log("answer =",answer);
                            console.log("player1 turn");
                            console.log(`${currentPlayer.name} turn`);
    
                            document.getElementById(`(${colIndex},3)`).style.backgroundColor = "yellow";
                            answer = game.move(colIndex);
                            console.log("answer", answer);
                        }

                        function two(){
                            console.log("cmputers turn");
                            console.log(`${currentPlayer.name} turn`);
                            colIndex = currentPlayer.makeMove(game.cols);
                            console.log("computersClick", colIndex);
                            answer = game.move(colIndex);
                            // document.getElementById((1,3)).style.backgroundColor = "pink";
                            console.log("answer2", answer);
                            console.log(`${currentPlayer.name} turn`);
                        }
                        one();
                        two();


                    }
                } else {
                    if (answer == 1){
                        console.log("answer =",answer);
                        currentPlayer.ifWinning();
                    } else if (answer == 2 ){
                        console.log("answer =",answer);
                        alert("The board is full - Game Over");
                    } else {
                        // one(); // call this function when there is a click
                        console.log("answer =",answer);
                        console.log(`${currentPlayer.name} turn`);
                        answer = game.move(colIndex);
                        console.log("answer", answer);
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