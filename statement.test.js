const Statement = require('./statement');

describe('Statement', () => {
    it('has an empty statement', () => {
        const statement = new Statement();
        expect(statement.statement).toEqual([]);
    })
    it('can add a transaction', () => {
        const statement = new Statement();
        const transaction = { date: '01/01/2020', credit: 100, debit: 0, balance: 100 };
        statement.addTransaction(transaction);
        expect(statement.statement[0]).toEqual(transaction);
    })
    it('can store multiple transactions', () => {
        const statement = new Statement();
        const transaction1 = { date: '01/01/2020', credit: 100, debit: 0, balance: 100 };
        const transaction2 = { date: '01/01/2020', credit: 0, debit: 50, balance: 50 };
        statement.addTransaction(transaction1);
        statement.addTransaction(transaction2);
        expect(statement.statement[1]).toEqual(transaction2);
    })
})