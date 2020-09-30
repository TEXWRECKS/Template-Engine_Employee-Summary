// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// creating class called Manager which we are telling to inherit all of the Employee attributes
class Manager extends Employee{
    constructor(name, id, email, officenumber){
        // super gives the same "Employee" name, id, and email values to Manager
        super(name, id, email)
        this.officenumber = officenumber
    }
    getRole(){
        return "Manager"
    }
    getSchool(){
        return this.officenumber
    }
}
module.exports=Manager;