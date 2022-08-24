const Engineer = require('../lib/Engineer.js');


describe("Engineer Class", () => {
    const engineer = new Engineer("Test Name","testing@test.com", 42, "testing239", "Engineer");
    describe('getName()', () => {
        it('Should return the name entered by the user', () => {

            expect(engineer.getName()).toBe("Test Name");
        });
    });

    
    describe('getEmail()', () => {
        it('Should return the email entered by the user', () => {
            
            expect(engineer.getEmail()).toBe("testing@test.com");
        });
    });
    
    describe('getId()', () => {
        it('Should return the Id entered by the user', () => {

            expect(engineer.getId()).toBe(42);
        });
    });

    describe('getGithub()', () => {
        it('Should return the github username entered by the user', () => {

            expect(engineer.getGithub()).toBe("testing239");
        });
    });

    describe('getRole()', () => {
        it('Should return the role entered by the user', () => {

            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});