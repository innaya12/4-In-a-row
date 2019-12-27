class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.wins = 0;
    }

    makeMove() {

    }
}

class Computer extends Player {
    constructor() {
        super();
        this.name = 'computer';
        this.color = 'pink';
        this.wins = 0
    }
    ifWinning(){
        this.wins += 1;
        return this.wins;
    }
    makeMove(columns) {
        console.log("computer is moving")
        const randomNum = Math.floor(Math.random() * (columns - 0)) + 0;
        console.log("Computer class randomNum", randomNum);
        return randomNum;
    }

}

module.exports = {
    Player,
    Computer
}