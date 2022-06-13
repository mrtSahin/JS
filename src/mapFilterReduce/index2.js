let cart = [
    {id:1, prudoctName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, prudoctName:"Bardak", quantity:2, unitPrice:30},
    {id:3, prudoctName:"Kalem", quantity:1, unitPrice:20},
    {id:4, prudoctName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, prudoctName:"Kitap", quantity:3, unitPrice:30},
    {id:6, prudoctName:"Pot", quantity:5, unitPrice:150}
]

//console.log(...cart)// spread

//map
cart.map(product =>{
     console.log(product.prudoctName)
     console.log(product.quantity)
})

//filter
let quantityOverTwo=cart.filter(product=> product.quantity>2)
console.log(quantityOverTwo)

//reduce
let total = cart.reduce((acc,product)=> acc+product.unitPrice*product.quantity,0)
console.log(total)



function addToaCart(sepet){
    sepet.push({id:7, prudoctName:"Ruhsat", quantity:1, unitPrice:20}) // diziye yeni eleman ekleme
}

addToaCart(cart)
console.log(cart)


let sayi=10

function sayiTopla(number) {
    number+=1
}

sayiTopla(sayi)
console.log(sayi) // referans tip değil o yüzden number ve sayi değerlerinin arasında hiçbir bağlantı yok




