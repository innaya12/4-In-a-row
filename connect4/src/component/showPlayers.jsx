import React from 'react';
const game = require('../classes/game');

class ShowPlayers extends React.Component {
    render() {
        const player1 = game.getPlayer1();
        const player2 = game.getPlayer2();
        const current = this.props.currentPlayer
        return (
            <div className='players'>
                <div>
                    <h2>Player 1</h2>
                    <h3>{player1.name}</h3>
                    <div className='showColor' style={{background: player1.color}}></div>
                    {current.name === player1.name && 
                    <p>Player 1, your turn!</p>}
                </div>
                <div>
                    <h2>Player 2</h2>
                    <h3>{player2.name}</h3>
                    <div className='showColor' style={{background: player2.color}}></div>
                    {current.name === player2.name && 
                    <p>Player 2, your turn!</p>}
                </div>
            </div>
        )
    }
}

export default ShowPlayers