const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
      it('should create an intern object', () => {
        const intern = new Intern('Name', 123, 'employee@gmail.com', 'school');
  
        expect(intern.school).toEqual(expect.any(String));
        });
    });

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