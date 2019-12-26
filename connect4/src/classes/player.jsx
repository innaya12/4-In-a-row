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

    makeMove(columns) {
        const randomNum = Math.floor(Math.random() * (columns - 0)) + 0;
        return randomNum;
    }
}

module.exports = {
    Player,
    Computer
}