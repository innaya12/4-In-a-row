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

    move(columnIndex) { //REMOVE COLOR
        const answer = this.board.move(columnIndex, this.currentPlayer.color);//this.currentPlayer.color
        if (answer === true) {
            // console.log("move > checkWin");
            return this.checkWin()
        } else {
            // console.log("move > ifColumnFull");
            return this.ifColumnFull()
        }
    }

    ifColumnFull() {
        if (this.currentPlayer instanceof Player.Computer) {
            // console.log("ifColumnFull > makeMove");
            this.currentPlayer.makeMove(this.cols);
        } else {
            // console.log("ifColumnFull > false");
            return false
        }
    }

    checkWin() {
        const answer = this.board.checkWin(this.currentPlayer.color);
        if (answer === true) {
            // console.log("checkWin > addWinner");
            return this.addWinner()
        } else {
            // console.log("checkWin > checkFull");
            return this.checkFull()
        }
    }

    addWinner() {
        this.currentPlayer.wins += 1;
        // console.log("addWinner > endGame");
        // console.log('game won');
        return this.endGame(1)
    }

    checkFull() {
        const answer = this.board.checkFull();
        if (answer === true) {
            // console.log("checkFull > endGame");
           return this.endGame(0)
        } else {
            // console.log("checkFull > switchPlayer");
            return this.switchPlayer()
        }
    }

    switchPlayer(){
        // console.log("switchPlayer");
        // console.log("cg befoer this.currentPlayer",this.currentPlayer)
        this.currentPlayer.name === this.player1.name 
        ? 
        this.currentPlayer = this.player2 
        : 
        this.currentPlayer = this.player1;
        // console.log("cg after  this.currentPlayer",this.currentPlayer)
        return 3 // Next players turn
    }

    endGame(num) {
        console.log("endGame");
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