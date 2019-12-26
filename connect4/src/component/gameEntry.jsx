import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import Player from './player';
const game = require('../classes/game');

class GameEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numOfPlayers : 0,
            row: 0,
            col: 0,
        };
    }

    onChangeNumOfPlayers = (e) =>{
        this.setState({
            numOfPlayers: e.target.value
        })
    }

    onChange = (e)=> {
        e.preventDefault();
        if(this.state.col != 0 && this.state.row != 0){
            this.bulidingTheBoard(this.state.row, this.state.col);
        } else {
            if (e.target.name === "width"){
                this.setState({
                    row: e.target.value
                })
            }else if (e.target.name === "height"){
                this.setState({
                    col: e.target.value
                })        
            }
        }
    }
    bulidingTheBoard(row,col){
        game.initBoard(row,col);
    }

    render(){
        console.log(this.state.numOfPlayers);
        const {numOfPlayers, row, col} = this.state;
        return(
            <div className='gameEntry'>
                {(row === 0 ||  col ===0) &&
                <div className='inner'>
                    <form action="/action_page.php">
                        <p className='title'>Choose Board Size</p>
                        <div className='sizeInput'>
                            <select onChange={this.onChange} name="width">
                                <option value="0" defaultValue>0</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                        <div className='sizeInput'>
                            <select onChange={this.onChange} name="height">
                                <option value="0" defaultValue>0</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </form>
                </div>}
                {(row !== 0 &&  col !==0) &&
                <div className='inner'>
                    <label>                   
                        <input name={"numOfPlayers"} type={"radio"} value={"1"} onChange={this.onChangeNumOfPlayers}/>
                        <img src='../one.png'/>
                    </label>
                    <label>
                        <input name={"numOfPlayers"} type={"radio"} value={"2"} onChange={this.onChangeNumOfPlayers}/>
                        <img src='../two.png'/>
                    </label>
                </div>}
                {numOfPlayers > 0 && 
                <div>
                    <p>please enter your name and choose color</p>
                    <Player numOfPlayers = {this.state.numOfPlayers}/>
                </div>
                }
                {numOfPlayers == 2 && 
                <div>
                    <Player />
                </div>
            }
            </div>

        )
    }
}

export default GameEntry;