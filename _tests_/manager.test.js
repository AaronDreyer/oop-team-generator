const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
      it('should create a manager object', () => {
        const manager = new Manager('Name', 123, 'employee@gmail.com', 123);
  
        expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

  describe('addRole', () => {
    it('should get the role of the employee', () => {
      const manager = new Manager('Name', 123, 'employee@gmail.com', 123);

      expect(manager.addRole()).toEqual("Manager");
        });
    });
});