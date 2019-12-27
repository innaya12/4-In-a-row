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

    createRows(i, innerlist, div){
        for (let j = 0; j < innerlist ; j++){
            let innerdiv = document.createElement("div");
            innerdiv.className = "row";
            innerdiv.id = `(${i}, ${j})`;
            div.appendChild(innerdiv);
        }
    }
    createCols(list, innerlist, div){
        let answer;
        for (let i=0; i< list; i++){
            let divWrapper = document.createElement("div");
            divWrapper.id = `col-${i}`;
            divWrapper.className = "col";
            divWrapper.onclick = function(){
                let click = `${i}`;
                let checkIfComputer =  game.getCurrentPlayer();
                let name2 = checkIfComputer.name;
                if (answer == 3 && name2 == "computer"){
                    console.log("cmputers turn");
                    let randomClick = checkIfComputer.makeMove(click);
                    answer = game.move(randomClick);
                    console.log("answer2", answer);
                } else {           
                    console.log("player1 turn");
                    answer = game.move(click);
                    console.log("answer", answer);
                }
            };
            div.appendChild(divWrapper);
            this.createRows(i, innerlist, divWrapper);
        }
    }

    buildingTheboard(list, innerlist){
        let element = document.getElementById("board");
        this.createCols(list, innerlist, element);
    }
    componentDidMount(){
        // console.log("1", game.getPlayer1());
        // console.log("2", game.getPlayer2());
        // console.log("3", game.getCurrentPlayer());      
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