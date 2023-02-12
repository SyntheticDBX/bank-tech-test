const Account = require('./account');
const Statement = require('./statement');
const Transaction = require('./transaction');

describe('Account', () => {
    it('has a balance of 0', () => {
        const account = new Account();
        expect(account.balance).toEqual(0);
    })
    it('can deposit money', () => {
        const account = new Account();
        account.deposit(100);
        expect(account.balance).toEqual(100);
    })
    it('can withdraw money', () => {
        const account = new Account();
        account.deposit(100);
        account.withdraw(50);
        expect(account.balance).toEqual(50);
    })
})
