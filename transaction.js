class Transaction {
    constructor(credit, debit, balance) {
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
        this.date = new Date();
    }
    // data is an object that contains the credit, debit and balance and date
    storedData() {
        let data = {
            date: this.date,
            credit: this.credit,
            debit: this.debit,
            balance: this.balance
        }
    }
}

module.exports = Transaction;