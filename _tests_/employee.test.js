const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
      it('should create an employee object', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });
  
    describe('addName', () => {
      it('should get the employee name', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addName()).toEqual(expect.any(String));
      });
    });
  
    describe('addId', () => {
      it('should get the employee ID', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addId()).toEqual(expect.any(Number));
      });
    });
  
    describe('addEmail', () => {
      it('should get the employee email', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addEmail()).toEqual(expect.stringContaining(employee.email.toString()));
      });
    });
  
    describe('addRole', () => {
      it('should get the role of employee', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addRole()).toEqual("Employee");
      });
    });
  });