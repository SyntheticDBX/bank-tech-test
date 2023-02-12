const Account = require('./account');

describe('Account', () => {
    it('should have a balance of 0', () => {
        const account = new Account();
        expect(account.balance).toBe(0);
    })
})
