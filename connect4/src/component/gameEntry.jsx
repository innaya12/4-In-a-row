import React from 'react';
import Player from './player';
import './style.css'; 
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
        }, () => { 
            game.initBoard(this.state.row, this.state.col);
        });
    };

    onChange = (e)=> {
        e.preventDefault();
        if (e.target.name === "width"){
            this.setState({
                row: e.target.value
            })
        }else {
            this.setState({
                col: e.target.value
            })        
        }
    }

    render(){
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
                    <h2>How many Players?</h2>
                    <label>                   
                        <input name={"numOfPlayers"} type={"radio"} value={"1"} onChange={this.onChangeNumOfPlayers}/>
                        <img src='../one.png'/>
                    </label>
                    <label>
                        <input name={"numOfPlayers"} type={"radio"} value={"2"} onChange={this.onChangeNumOfPlayers}/>
                        <img src='../two.png'/>
                    </label>
                </div>}
                {numOfPlayers == 1 && 
                <div className='userImput'>
                    <p>Enter your name and choose your color</p>
                    <p style={{fontSize: '11px'}}>(exit out of color selection window to set color)</p>
                    <Player numOfPlayers = {this.state.numOfPlayers}/>
                </div>
                }
                {numOfPlayers == 2 && 
                <div className='userImput'>
                    <p>Enter your name and choose your color</p>
                    <p style={{fontSize: '11px'}}>(exit out of color selection window to set color)</p>
                    <Player numOfPlayers = {this.state.numOfPlayers}/>
                </div>
                }
            </div>

        )
    }
}

export default GameEntry;