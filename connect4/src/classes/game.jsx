const board = require('./board');
const Player = require('./player');

class Game {
    constructor() {
        this.board = null;
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
        this.rows = null;
        this.cols = null;
    }

    initBoard(rows, cols) {
        this.board = new board(rows, cols);
        this.rows = rows;
        this.cols = cols;
        console.log('setting board');
    }

    getBoard() {
        return this.board
    }

    setCurrent(player) {
        this.currentPlayer = player
    }

    setPlayers(p1, p2) {
        this.player1 = new Player.Player(p1.name, p1.color);
        if (p2.name === 'computer') {
            this.player2 = new Player.Computer()
        } else {
            this.player2 = new Player.Player(p2.name, p2.color);
        }
        this.setCurrent(this.player2); //Change to Player1
    }

    getPlayer1() {
        return this.player1
    }

    getPlayer2() {
        return this.player2
    }

    getCurrentPlayer() {
        return this.currentPlayer
    }

    move(columnIndex, color) { //REMOVE COLOR
        const answer = this.board.move(columnIndex, color);//this.currentPlayer.color
        if (answer === true) {
            return this.checkWin()
        } else {
            return this.ifColumnFull()
        }
    }

    ifColumnFull() {
        if (this.currentPlayer instanceof Player.Computer) {
            this.currentPlayer.makeMove(this.cols);
        } else {
            return false
        }
    }

    checkWin() {
        const answer = this.board.checkWin('pink'); //this.currentPlayer.color
        if (answer === true) {
            return this.addWinner()
        } else {
            return this.checkFull()
        }
    }

    addWinner() {
        this.currentPlayer.wins += 1;
        console.log('game won');
        return this.endGame(1)
    }

    checkFull() {
        const answer = this.board.checkFull();
        if (answer === true) {
           return this.endGame(0)
        } else {
            return this.switchPlayer()
        }
    }

    switchPlayer() {
        this.currentPlayer.name === this.player1.name 
        ? 
        this.currentPlayer = this.player2 
        : 
        this.currentPlayer = this.player1;
        return 3 // Next players turn
    }

    endGame(num) {
        if(num === 1) {
            console.log(this.currentPlayer.name, " won!");
            return 1 //if winner
        } else {
            return 2 //board full
        }
        return
    }

}

module.exports = new Game()