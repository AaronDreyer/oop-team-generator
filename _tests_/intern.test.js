const Intern = require('../lib/intern');

// Test for Intern object creation
describe('Intern', () => {
    describe('Initialization', () => {
      it('should create an intern object', () => {
        // Added school input placeholder
        const intern = new Intern('Name', 123, 'employee@gmail.com', 'school');
  
        expect(intern.school).toEqual(expect.any(String));
        });
    });

    // Test for school input
    describe('addSchool', () => {
        it('should get the school of the intern', () => {
          const intern = new Intern('Name', 123, 'employee@gmail.com', 'school');
    
          expect(intern.addSchool()).toEqual(expect.stringContaining(intern.school.toString()));
            });
        });

    describe('addRole', () => {
        it('should get the role of the employee', () => {
        const intern = new Intern('Name', 123, 'employee@gmail.com', 'school');

        expect(intern.addRole()).toEqual("Intern");
            });
        });
});