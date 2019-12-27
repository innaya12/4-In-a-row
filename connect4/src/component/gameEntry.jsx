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
        // console.log(this.state.numOfPlayers)
        const {numOfPlayers, row, col} = this.state;
        return(
            <div>
                <h5>Connect 4</h5>
                {(row === 0 ||  col ===0) &&
                <div>
                    <form action="/action_page.php">
                        <p>please choose game settings</p>
                        <select onChange={this.onChange} name="width">
                            <option value="0" defaultValue>0</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <select onChange={this.onChange} name="height">
                            <option value="0" defaultValue>0</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </form>
                </div>}
                {(row !== 0 &&  col !==0) &&
                <div>                    
                    <input name={"numOfPlayers"} type={"radio"} value={"1"} onChange={this.onChangeNumOfPlayers}/>1
                    <input name={"numOfPlayers"} type={"radio"} value={"2"} onChange={this.onChangeNumOfPlayers}/>2
                </div>}
                {numOfPlayers > 0 && 
                <div>
                    <p>please enter your name and choose color</p>
                    <Player numOfPlayers = {this.state.numOfPlayers}
                                        list ={this.props.list}
                                        innerList ={this.props.innerList}/>
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