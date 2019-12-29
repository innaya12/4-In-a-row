import React from 'react';
import { Link } from 'react-router-dom';
const game = require('../classes/game');

class EndGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 2//this.props.endGameNum //1=winner 2=board full
        }
    }
    render() {
        const winner = game.getCurrentPlayer();
        return (
            <div className='endGame'>
                {this.state.status === 1 ? 
                    <div className='winner' style={{backgroundImage: 'url(./winner.jpg)', backgroundPosition: 'top'}}>
                        <div>
                            <h2>Congratulations</h2>
                            <h1>{winner.name}</h1>
                            <h2>You've won!</h2>
                        </div>
                        <Link to='/'>Play Again</Link>
                    </div>
                :
                <div className='winner'>
                    <div>
                        <h3>No More Moves :(</h3>
                        <Link to='/'>Play Again</Link>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default EndGame