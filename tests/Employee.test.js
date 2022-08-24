const Employee = require('../lib/Employee.js');

describe("Employee Class", () => {
    const employee = new Employee("Test Name","testing@test.com", 42, "Employee");
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {
            
            expect(employee.name).toBe('Test Name');
        });
    });
    
    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(employee.getEmail()).toEqual('testing@test.com');
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(employee.getId()).toEqual(42);
        });
    });


    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(employee.getRole()).toEqual('Employee');
        });
    });
})