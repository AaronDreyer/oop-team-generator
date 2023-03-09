const Engineer = require('../lib/engineer');

// Test for Engineer object creation
describe('Engineer', () => {
    describe('Initialization', () => {
      it('should create an engineer object', () => {
        // Added github field for placeholder
        const engineer = new Engineer('Name', 123, 'employee@gmail.com', 'github');
  
        expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // Test for Guthub input
    describe('addGithub', () => {
        it('should get the github username of the engineer', () => {
          const engineer = new Engineer('Name', 123, 'employee@gmail.com', 'github');
    
          expect(engineer.addGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
            });
        });

    // Test ofr adding another employee role
    describe('addRole', () => {
        it('should get the role of the employee', () => {
        const engineer = new Engineer('Name', 123, 'employee@gmail.com', 'github');

        expect(engineer.addRole()).toEqual("Engineer");
            });
        });
});