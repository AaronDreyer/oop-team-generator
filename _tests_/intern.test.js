const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
      it('should create an intern object', () => {
        const intern = new Intern('Name', 123, 'employee@gmail.com');
  
        expect(intern.school).toEqual(expect.any(String));
        });
    });

    describe('getSchool', () => {
        it('should get the school of the intern', () => {
          const intern = new Intern('Name', 123, 'employee@gmail.com');
    
          expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
            });
        });

    describe('getRole', () => {
        it('should get the role of the employee', () => {
        const intern = new Intern('Name', 123, 'employee@gmail.com');

        expect(intern.getRole()).toEqual("Intern");
            });
        });
});