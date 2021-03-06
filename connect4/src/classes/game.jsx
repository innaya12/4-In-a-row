const board = require('./board');
const Player = require('./player');
const EventEmitter = require('events').EventEmitter;

class Game {
    constructor() {
        this.board = null;
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
        this.rows = null;
        this.cols = null;
        this.event = new EventEmitter();
        this.status = null;
    }

    initBoard(rows, cols) {
        this.board = new board(rows, cols);
        this.rows = rows;
        this.cols = cols;
        this.status = 0;
    }

    getBoard() {
        return this.board;
    }

    setCurrent(player) {
        this.currentPlayer = player;
    }

    setPlayers(p1, p2) {
        this.player1 = new Player.Player(p1.name, p1.color);
        if (p2.name === 'computer') {
            this.player2 = new Player.Computer()
        } else {
            this.player2 = new Player.Player(p2.name, p2.color);

        }

        this.setCurrent(this.player1);
    }

    getPlayer1() {
        return this.player1
    }

    getPlayer2() {
        return this.player2
    }
    getCurrentPlayer() {
        return this.currentPlayer;
    }

    move(columnIndex) { 
        const answer = this.board.move(columnIndex, this.currentPlayer.color);
        if (answer === true) {
            document.getElementById(`(${this.board.currentMove[1]},${this.board.currentMove[0]})`).style.backgroundColor = this.currentPlayer.color;
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
        const answer = this.board.checkWin(this.currentPlayer.color);
        if (answer === true) {
            return this.addWinner()
        } else {
            return this.checkFull()
        }
    }

    addWinner() {
        this.currentPlayer.wins += 1;
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

    switchPlayer(){
        this.currentPlayer.name === this.player1.name 
        ? 
        this.currentPlayer = this.player2 
        : 
        this.currentPlayer = this.player1;
        this.event.emit('status');
        return 3 // Next players turn
    }

    endGame(num) {
        if(num === 1) {
            this.status = 1;
            this.event.emit('status');
            return 1 //if winner
        } else {
            this.status = 2;
            this.event.emit('status');
            return 2 //board full
        }
    }
}

module.exports = new Game()