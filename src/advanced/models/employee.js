import User from "./user.js"

export default class Employee extends User{

    constructor(id, firstName, surName, city, age, salary){
        super(id, firstName, surName, city, age)
        this.salary=salary
    }
}
