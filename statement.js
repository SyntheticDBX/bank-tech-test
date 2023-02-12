class Statement {
    constructor() {
        this.statement = [];
    }
    addTransaction(transaction) {
        this.statement.push(transaction);
    }

    printStatement() {
        console.log('date || credit || debit || balance');
        this.statement.forEach((transaction) => {
            console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`);
        });
    }
}

module.exports = Statement;