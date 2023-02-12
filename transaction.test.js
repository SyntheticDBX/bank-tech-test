const Transaction = require('./transaction');

describe('Transaction', () => {
    it('stores the current deposit amount', () => {
        const transaction = new Transaction(100, 0, 100);
        expect(transaction.credit).toEqual(100);
        })
    it('stores the current withdrawal amount', () => {
        const transaction = new Transaction(0, 50, 50);
        expect(transaction.debit).toEqual(50);
    })
    it('stores the current balance', () => {
        const transaction = new Transaction(100, 0, 100);
        expect(transaction.balance).toEqual(100);
    })
    it('stores the current date', () => {
        const transaction = new Transaction(100, 0, 100);
        expect(transaction.date).toEqual(new Date());
    })
})