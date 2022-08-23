const Employee = require('../lib/Employee.js');

describe("Employee Class", () => {
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(Employee.getName()).toEqual();
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(Employee.getId()).toEqual();
        });
    });

    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(Employee.getEmail()).toEqual();
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(Employee.getRole()).toEqual('Employee');
        });
    });
})