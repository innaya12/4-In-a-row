import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

// const game = require('../classes/game');
// const board = require('../classes/board');

class GameEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numOfPlayers : 0,
            row: 0,
            col: 0,
            numOfPlayers: 0,
        };
    }

    onChange = (e)=> {
        e.preventDefault();
        if (e.target.name === "width"){
            this.setState({
                row: e.target.value
            })
        }else if (e.target.name === "height"){
            this.setState({
                col: e.target.value
            })        
        } else if (e.target.name === "numOfPlayers"){
            this.setState({
                numOfPlayers: e.target.value
            })
        }
    }


    render(){
        console.log(this.state.row, this.state.col, this.state.numOfPlayers)

        return(
            <div>
                <h6>GameEntry component</h6>
                <p>please choose game settings</p>
                <form action="/action_page.php">
                    <select onChange={this.onChange} name="width">
                        <option value="4" defaultValue>4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <select onChange={this.onChange} name="height">
                        <option value="4" defaultValue>4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </form>
                <div>                    
                    <input name={"numOfPlayers"} type={"radio"} value={"1"} onChange={this.onChange}/>1
                    <input name={"numOfPlayers"} type={"radio"} value={"2"} onChange={this.onChange}/>2
                </div>
                
                {this.state.numOfPlayers == 1 && 
                    <Link to="/oneplayer"><a href={"#"}> just here</a></Link>
                }
                {this.state.numOfPlayers == 2 && 
                    <Link to="/twoplayers"><a href={"#"}> just here</a></Link>
                }
            </div>

        )
    }
}

export default GameEntry;