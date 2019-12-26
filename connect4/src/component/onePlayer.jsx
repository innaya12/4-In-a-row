import React from 'react';
import { Link } from 'react-router-dom';

class OnePlayer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player1 : null,
            // player2 : new Computer(),
            color: undefined,
            name:undefined,
        };
    }

    onChange = (e) =>{
        e.preventDefault();
        if (e.target.name === "color"){
            this.setState({
                color: e.target.value
            })
        } else if(e.target.name === "name"){
            this.setState({
                name: e.target.value
            })
        }
        // callback = >
        // this.setState.player1: new Player (this.state.name, this.state.color)
    }

    render(){
        console.log("name" , this.state.name);
        console.log("color" , this.state.color);

        return(
            <div>
                <h6>onePlayer component</h6>
                <div>
                    <input type="text" name="name" id="1" onChange={this.onChange}/>
                    <input name={"color"} type={"radio"}  value={"yellow"} onChange={this.onChange}/>yellow
                    <input name={"color"} type={"radio"} value={"blue"} onChange={this.onChange}/>blue
                </div>
                {this.state.name && this.state.color && 
                    <Link to="/play"><a href={"#"}> start playing</a></Link>
                }
            </div>
        )

    }
}

export default OnePlayer;