const Manager = require('../lib/Manager.js');

describe("Manager Class", () => {
    const manager = new Manager("Test Name","testing@test.com", 42, 4, "Manager");

    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(manager.getName()).toBe("Test Name");
        });
    });

    
    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {
            
            expect(manager.getEmail()).toBe("testing@test.com");
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(manager.getId()).toBe(42);
        });
    });

    describe('getOfficeNumber()', () => {
        it('Should return the email entered by the user', () => {

            expect(manager.getOfficeNumber()).toBe(4);
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(manager.getRole()).toBe("Manager");
        });
    });
})