const Manager = require('../lib/Manager.js');

describe("Manager Class", () => {
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(Manager.getName()).toEqual();
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(Manager.getId()).toEqual();
        });
    });

    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(Manager.getEmail()).toEqual();
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(Manager.getRole()).toEqual('Manager');
        });
    });
})