const board = require('./board');

class Game {
    constructor() {
        this.board = null;
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
    }

    initBoard(rows, cols) {
        this.board = new board(rows, cols);
    }

    setCurrent(player) {
        this.currentPlayer = player
    }

    setPlayers(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.setCurrent(this.player1)
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
        if (answer == true) {
            return this.checkWin()
        } else {
            return false
        }
    }

    checkWin() {
        const answer = this.board.checkWin('pink'); //this.currentPlayer.color
        if (answer == true) {
            this.addWinner()
        } else {
            return this.checkFull()
        }
    }

    addWinner() {
        // this.currentPlayer.win = 1;
        return this.endGame(1)
    }

    checkFull() {
        const answer = this.board.checkFull();
        // if (answer == true) {
        //     return this.endGame(0)
        // } else {
        //     return this.switchPlayer()
        // }
    }

    switchPlayer() {
        this.currentPlayer.name == this.player1.name 
        ? 
        this.currentPlayer = this.player2 
        : 
        this.currentPlayer = this.player1;
        return true
    }

    endGame(num) {
        return num
    }

}

module.exports = new Game()