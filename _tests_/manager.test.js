const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
      it('should create a manager object', () => {
        const manager = new Manager('Name', 123, 'employee@gmail.com');
  
        expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

  describe('getRole', () => {
    it('should get the role of the employee', () => {
      const manager = new Manager('Name', 123, 'employee@gmail.com');

      expect(manager.getRole()).toEqual("Manager");
        });
    });
});