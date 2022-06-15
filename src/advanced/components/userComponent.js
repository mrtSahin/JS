import BaseLogger, { ElasticLogger, MongoLogger } from "../crossCuttingCorners/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Çalıştı")



let logger1= new MongoLogger()
let userService = new UserService(logger1)

let user1=new User(1,"Murat","Şahin","Sivas")
let user2=new User(2,"Baran","Gökçekli","Muğla")

userService.add(user1)
userService.add(user2)

console.log(userService.getCustomerById(2))
console.log(userService.listCustomers())

console.log("------------------")

userService.load()

let customerToAdd= new Customer(1,"Seda","Yılmaz","Sivas",25)
customerToAdd.type="customer"
userService.add(customerToAdd)

console.log(userService.getCustomersSorted())
console.log("Customers") 
console.log(userService.customers)
console.log("Employees")
console.log(userService.employees)
console.log(userService.errors)

