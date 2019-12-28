class Board {
    constructor(rows, cols) {
        this.board = this.buildBoard(rows, cols);
        this.count = 0;
        this.boardLength = rows * cols;
        this.currentMove = undefined
    }

    buildBoard(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                if (i === rows-1) {
                    matrix[i][j] = null
                } else {
                    matrix[i][j] = 'empty'
                }
            }
        }
        console.log("matrix", matrix);
        return matrix
    }

    move(colIndex, color) {
        this.count += 1;
        let counter = 0;
        for (let i = 0; i < this.board.length; i++) {
            counter += 1;
            if(this.board[i][colIndex] === null) {
                this.board[i][colIndex] = color;
                if (i !== 0) {
                    this.board[i-1][colIndex] = null;
                }
                this.currentMove = [i, colIndex];
                console.log("colIndex", colIndex);
                console.log("board class this.currentMove", this.currentMove);
                document.getElementById(`(${this.currentMove[1]},${this.currentMove[0]})`).style.backgroundColor = "red";
                return true
            }
        }
        if (counter === this.board.length) {
            return false
        }
    }

    checkWin(color) {
        const cur = this.currentMove;
        if (this.checkVertical(cur, color)) {
            console.log('vert');
            return true
        }else {
            if(this.checkHorizontal(cur, color)){
                console.log('hori');
                return true
            } else {
                if (this.checkDiagonalRight(cur, color)) {
                    console.log('right');
                    return true
                } else {
                    if (this.checkDiagonalLeft(cur, color)) {
                        console.log('left');
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
    }

    checkVertical(current, color) {
        const x = current[0];
        const y = current[1];
        const board = this.board;
        if (x < board.length-3){
            if (board[x][y] === color && board[x+1][y] === color && board[x+2][y] === color && board[x+3][y] === color) {
                return true
            }
            return false
        }
    }

    checkHorizontal(current, color) {
        const x = current[0];
        const y = current[1];
        const board = this.board;
        if (y >= 3 || y <= board[0].length-3){
            if (board[x][y-1] === color && board[x][y-2] === color && board[x][y-2] === color || 
                board[x][y+1] === color && board[x][y+2] === color && board[x][y+2] === color) {
                return true
            }
        }
        return false
    }

    checkDiagonalRight(current, color) {
        const x = current[0];
        const y = current[1];
        const board = this.board;
        if (x < board.length-3) {
            if (board[x][y] === color && board[x+1][y-1] === color && board[x+2][y-2] === color && board[x+3][y-3] === color){
                return true
            }
        } else if (x >= 3) {
            if (board[x][y] === color && board[x-1][y+1] === color && board[x-2][y+2] === color && board[x-3][y+3] === color) {
                return true
            }
        }
        return false
    }

    checkDiagonalLeft(current, color) {
        const x = current[0];
        const y = current[1];
        const board = this.board;
        if (x < board.length-3) {
            if (board[x][y] === color && board[x+1][y+1] === color && board[x+2][y+2] === color && board[x+3][y+3] === color){
                return true
            } 
        } else if (x >= 3) {
            if (board[x][y] === color && board[x-1][y-1] === color && board[x-2][y-2] === color && board[x-3][y-3] === color) {
                return true
            }
        }
       
        return false
    }

    checkFull() {
        if (this.count === this.boardLength) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Board