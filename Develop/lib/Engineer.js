// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// creating class called Engineer which we are telling to inherit all of the Employee attributes
class Engineer extends Employee{
    constructor(name, id, email, github){
        // super gives the same "Employee" name, id, and email values to Engineer
        super(name, id, email)
        this.github = github
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}
module.exports=Engineer;