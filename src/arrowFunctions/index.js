

let sayHello = () =>{
    console.log("Hello MF")
}
sayHello()


let sayHello2 = function() {
    console.log("Hello 2MF")
}
sayHello2()


function addToCart(productName, quantity, unitPrice){
    
}
addToCart("Elma",2,20)   //tercih etmememiz gereken yöntem.
addToCart("Armut",3,45) // Çünkü göndeririken hanginsinin kilo hangisinin fiyat hangisinin isim olduğunu karıştırabiliriz.
addToCart("Portakal",5,97) // bunu yerine objelerle göndeririz



function addToCart2(product){
    console.log("ürün:"+product.productName)
    console.log("adet:"+product.quantity)
    console.log("fiyat:"+product.unitPrice)
}
let product1={productName:"Elma", unitPrice:12, quantity:5}
addToCart2(product1)

let product2={productName:"Elma", unitPrice:12, quantity:5}
let product3={productName:"Elma", unitPrice:12, quantity:5}
product2=product3  // product2 ve product3 ün referans noktası aynı olur.
product2.productName="Karpuz"// bu yüzden herhangi birinde bir değişiklik yaptığımızda diğerinde de aynı işlem olur
console.log(product3.productName)//bu yüzden product3 ün de productName'i Karpuz oldu



function addToCart3(products){
    console.log(products)
}

let products=[
    {productName:"Elma", unitPrice:12, quantity:5},
    {productName:"Armut", unitPrice:12, quantity:5},
    {productName:"Karpuz", unitPrice:12, quantity:5}
]

addToCart3(products)