const Intern = require('../lib/Intern.js');

describe("Intern Class", () => {
    const intern = new Intern("Test Name","testing@test.com", 42, "testSchool", "Employee");
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(intern.getName()).toBe("Test Name");
        });
    });
    
    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {

            expect(intern.getEmail()).toBe("testing@test.com");
        });
    });

    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(intern.getId()).toBe(42);
        });
    });


    describe('getSchool()', () => {
        it('Should return the school entered by the user', () => {

            expect(intern.getSchool()).toBe("testSchool");
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(intern.getRole()).toBe('Intern');
        });
    });
});