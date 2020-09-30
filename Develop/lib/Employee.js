// TODO: Write code to define and export the Employee class
// Creating a class called Employee
class Employee {
    // Establishing what the class "Employee" needs/is.
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Creating a method called getName
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}
// Allows us to export this employee class
module.exports=Employee;