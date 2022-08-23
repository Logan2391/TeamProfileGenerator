const Engineer = require('../lib/Engineer.js');


describe("Engineer Class", () => {
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(Engineer.getName()).toEqual();
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(Engineer.getId()).toEqual();
        });
    });

    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(Engineer.getEmail()).toEqual();
        });
    });

    describe('getGithub()', () => {
        it('Should return the role entered by the user', () => {

            expect(Engineer.getGithub()).toEqual();
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(Engineer.getRole()).toEqual('Engineer');
        });
    });
});