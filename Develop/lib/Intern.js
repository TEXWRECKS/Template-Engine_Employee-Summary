// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// creating class called Intern which we are telling to inherit all of the Employee attributes
class Intern extends Employee{
    constructor(name, id, email, school){
        // super gives the same "Employee" name, id, and email values to Intern
        super(name, id, email)
        this.school = school
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}
module.exports=Intern;