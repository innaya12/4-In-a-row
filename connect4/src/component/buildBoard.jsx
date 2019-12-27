import React from 'react';
const game = require('../classes/game');

class BuildBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list :0,
            innerList : 0,
        };
        // this.getSetting();
    }
   
    getCol(){
        let data = document.getElementById("col-${i}");
        console.log(data);
    }
    buildingTheboard(list,innerlist){
        let element = document.getElementById("board")
        for (let i=0; i< list; i++){
            let divWrapper = document.createElement("div");
            divWrapper.id = `col-${i}`;
            divWrapper.className = "col";
            element.appendChild(divWrapper);
            for (let j = 0; j < innerlist ; j++){
                let innerdiv = document.createElement("div");
                innerdiv.className = "row";
                innerdiv.id = `(${i}, ${j})`;
                divWrapper.appendChild(innerdiv);
            }
        }
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
        console.log("DidMount render this.state.list", this.state.list);
        console.log("DidMount render this.state.innerList", this.state.innerList)

        return(
            <div className={"board"} id={"board"}>
            </div>
        )

    }
}

export default BuildBoard;