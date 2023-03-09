const Employee = require('../lib/employee');

// TTD for employee questions
// Main questions for each employee
describe('Employee', () => {
    describe('Initialization', () => {
      // Test 1 should evaluate if the script creates the employee object
      it('should create an employee object', () => {
        // PLacedholder variable for what inputs should be. Important to add required fields for this
        // I had a recurring problem with other employee roles by not adding their individual inputs
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        // Expectatiosn on what each input should be valued as
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });
  
    // Test for name input
    describe('addName', () => {
      it('should get the employee name', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addName()).toEqual(expect.any(String));
      });
    });
  
    // Test for ID input
    describe('addId', () => {
      it('should get the employee ID', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addId()).toEqual(expect.any(Number));
      });
    });
  
    // Test for email input
    describe('addEmail', () => {
      it('should get the employee email', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addEmail()).toEqual(expect.stringContaining(employee.email.toString()));
      });
    });
  
    // Test for adding role of employee (Manager, Intern, Engineer)
    describe('addRole', () => {
      it('should get the role of employee', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.addRole()).toEqual("Employee");
      });
    });
  });