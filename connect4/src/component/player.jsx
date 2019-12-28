import React from 'react';
import { Link } from 'react-router-dom';
const game = require('../classes/game');

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player1 : {color:undefined, name:undefined},
            player2 : {color:'pink', name:'computer'},
            data: false,
            numOfPlayers: undefined,
        };
        this.color1 = '';
        this.name1 = '';
        this.color2 = '';
        this.name2 = '';
    }

    componentDidMount() {
        this.setState({
            numOfPlayers: this.props.numOfPlayers
        });
    }

    buildPlayer(name, color){
        if (this.state.numOfPlayers == 1) {
            this.setState({
                player1:{
                    color: color,
                    name: name
                },
                data: true,
            }, () => {
                game.setPlayers(this.state.player1, this.state.player2);
                console.log("please work", game.getCurrentPlayer())
            });
        } else {
            if (!this.name2) {
                this.setState({
                    player1:{
                        color: color,
                        name: name
                    },
                });
            } else {
                this.setState({
                    player2:{
                        color: color,
                        name: name
                    },
                    data: true,
                }, () => {
                    game.setPlayers(this.state.player1, this.state.player2);
                    console.log("CurrentPlayer", game.getCurrentPlayer())
                });

            }
        }
    };
    onChange = (e) =>{
        e.preventDefault();
        if (e.target.name == "color"){
            this.color1 = e.target.value;
        } else if (e.target.name == 'name'){
            this.name1 = e.target.value;
        }
        this.buildPlayer(this.name1, this.color1);
        if (e.target.name == "color2"){
            this.color2 = e.target.value;
        } else if (e.target.name == 'name2'){
            this.name2 = e.target.value;
        }
        if (this.state.numOfPlayers == 2) {
            this.buildPlayer(this.name2, this.color2);
        }
    };

    render(){
        console.log("player1" , this.state.player1);
        console.log("player2" , this.state.player2);
        console.log(this.state.numOfPlayers);
        return(
            <div>
                <div className='userChoices'>
                    <input type="text" name="name" onChange={this.onChange}/>
                    <input name={"color"} type={"color"} defaultValue='#ff0000' onChange={this.onChange}/>
                </div>
                {this.state.numOfPlayers == 2 &&
                    <div className='userChoices'>
                        <input type="text" name="name2" onChange={this.onChange}/>
                        <input name={"color2"} type={"color"} defaultValue='#ff0000' onChange={this.onChange}/>
                    </div>
                }
                {this.state.data == true && 
                    <Link to="/play"><p> start playing</p></Link>
                }
            </div>
        )
    }
}

export default Player;