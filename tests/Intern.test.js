const Intern = require('../lib/Intern.js');

describe("Intern Class", () => {
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(Intern.getName()).toEqual();
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(Intern.getId()).toEqual();
        });
    });

    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(Intern.getEmail()).toEqual();
        });
    });

    describe('getSchool()', () => {
        it('Should return the role entered by the user', () => {

            expect(Intern.getSchool()).toEqual();
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(Intern.getRole()).toEqual('Intern');
        });
    });
});