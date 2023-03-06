describe('Employee', () => {
    describe('Initialization', () => {
      it('should create an employee object', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });
  
    describe('getName', () => {
      it('should get the employee name', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.getName()).toEqual(expect.any(String));
      });
    });
  
    describe('getId', () => {
      it('should get the employee ID', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.getId()).toEqual(expect.any(Number));
      });
    });
  
    describe('getEmail', () => {
      it('should get the employee email', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
      });
    });
  
    describe('getRole', () => {
      it('should get the role of employee', () => {
        const employee = new Employee('Name', 123, 'employee@gmail.com');
  
        expect(employee.getRole()).toEqual("Employee");
      });
    });
  });