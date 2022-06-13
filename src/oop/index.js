export class Customer{  //saf js de class diye bir şey yoktur. bunlar arkada fonksiyona dönüşür
   // export, java daki public e denk gelir. başka yerlerden erişilmesini sağlar
    constructor(id, customerNumber){
       this.id=id
       this.customerNumber=customerNumber
   } 
}


let customer = new Customer(1,"1235")

//prototyping   classta var olmayan bir şeyi ekleyebiliyoruz. yukarıda name degişkeni yok
customer.name = "Murat Şahin"  // instance ' a yapılan prototyping
console.log(customer.id)  // eğer constructor içerisinde this.id=id yapmazsak bu değişkene ulaşamayız
console.log(customer.name)


Customer.bisey="Bişey"  // class ' a yapılan prototyping
console.log(Customer.bisey)  
console.log(customer.bisey)



class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}
