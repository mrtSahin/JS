import User from "./user.js"

export default class Customer extends User{

    constructor(id, firstName, surName, city, age, creditCardNumber){
        super(id, firstName, surName, city, age)
        this.creditCardNumber=creditCardNumber
    }
}
