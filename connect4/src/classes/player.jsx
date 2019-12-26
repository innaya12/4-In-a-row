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
        super(name, color);
        this.name = computer;
        this.color = 'pink';
        this.wins = 0
    }

    makeMove(columns) {

    }
}

module.exports = {
    Player,
    Computer
}