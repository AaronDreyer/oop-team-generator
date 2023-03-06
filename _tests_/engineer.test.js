const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
      it('should create an engineer object', () => {
        const engineer = new Engineer('Name', 123, 'employee@gmail.com');
  
        expect(engineer.github).toEqual(expect.any(String));
        });
    });

    describe('getSchool', () => {
        it('should get the github username of the engineer', () => {
          const engineer = new Engineer('Name', 123, 'employee@gmail.com');
    
          expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
            });
        });

    describe('getRole', () => {
        it('should get the role of the employee', () => {
        const engineer = new Engineer('Name', 123, 'employee@gmail.com');

        expect(engineer.getRole()).toEqual("Engineer");
            });
        });
});