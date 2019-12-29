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
        this.color = '#740023';
        this.wins = 0
    }
    ifWinning(){
        this.wins += 1;
        return this.wins;
    }
    makeMove(columns) {
        const randomNum = Math.floor(Math.random() * (columns - 0)) + 0;
        return randomNum;
    }

}

module.exports = {
    Player,
    Computer
}