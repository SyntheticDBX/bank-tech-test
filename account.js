const Statement = require('./statement');
const Transaction = require('./transaction');
class Account {
    constructor() {
        this.balance = 0;
        this.statement = new Statement();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
    viewStatement() {
        return this.statement;
    }

    recordDeposit(amount) {
        const newDeposit = new Transaction(amount, 0, this.balance);
        this.statement.addTransaction(newDeposit.storedData());
    }

    recordWithdrawal(amount) {
        const newWithdrawal = new Transaction(0, amount, this.balance);
        this.statement.addTransaction(newWithdrawal.storedData());
    }
}

module.exports = Account;