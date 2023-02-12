class Statement {
    constructor() {
        this.statement = [];
    }
    addTransaction(transaction) {
        this.statement.push(transaction);
    }
}