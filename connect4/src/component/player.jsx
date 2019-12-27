import React from 'react';
import { Link } from 'react-router-dom';
const game = require('../classes/game');

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player1 : {color:undefined, name:undefined},
            player2 : {color:undefined, name:undefined},
            data: false,
        };
        this.numOfPlayers = this.props.numOfPlayers;
        this.color = '';
        this.name = '';
    }

    buildPlayer(name, color){
        this.setState({
            player1:{
                color: color,
                name: name
            },
            player2:{
                color: "pink",
                name: "computer"
            }, 
            data: true,
        }, () => {
            game.setPlayers(this.state.player1, this.state.player2);
            console.log("please work", game.getCurrentPlayer())
        });
    };
    onChange = (e) =>{
        e.preventDefault();
        if (e.target.name === "color"){
            this.color = e.target.value;
        } else {
            this.name = e.target.value;
        }
        // console.log("name", this.name);
        // console.log("color", this.color);
        // console.log(":this.numOfPlayers", this.numOfPlayers);
        if (this.numOfPlayers == 1){  
            this.buildPlayer(this.name, this.color);
        }
    };

    render(){
        console.log("player1" , this.state.player1);
        console.log("player2" , this.state.player2);
        return(
            <div>
                <div className='userChoices'>
                    <input type="text" name="name" id="1" onChange={this.onChange}/>
                    <input name={"color"} type={"color"} onChange={this.onChange}/>
                </div>
                {this.state.data == true && 
                    <Link to="/play"><p> start playing</p></Link>
                }
            </div>
        )

    }
}

export default Player;