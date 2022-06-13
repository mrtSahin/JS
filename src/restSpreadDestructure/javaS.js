let student = {id:1, name:"Murat"}   //obje tanimi
//console.log(student)

function save(ogrenci, puan=10) {   //fonksiyon tanimi
    //console.log(ogrenci.name+": "+puan)

}

save(student,undefined)

let students = ["Murat","Kadir","Bayhan"]
//console.log(students)

let students2 = [student,{id:2,name:"Berkan"}]
//console.log(students2)

//REST = kalan(tr)
//java daki varargs gibi
let showProducts = function(id, ...products){  // ...products   birden fazla veri bu degisken uzerine gelecek. yani bu bir degisken
    // ilk gelen veri id oluyor geriye kalan products oluyor
    
    console.log(id)
    console.log(products[2])
}

//console.log(typeof showProducts)  // degiskenin türünü verir
//showProducts(10,"elma","armut","karpuz")


//SPREAD = dagitilmis(tr)
let points=[1,2,49,64,53,59]
/** 
console.log(...points) // array deki elemanlari tek tek ayirdi ve yazdi
console.log(Math.max(...points))
console.log("ABC","D","EFG","H")
console.log(..."ABC","D",..."EFG","H") // SPREAD YAPTİK. array i ayrıştırdık
*/


//DESTRUCTURE  objenin veya dizinin istediğim elemanlarını istediğim değişkenlere atama
let populations= [10000,20000,30000,[40000,100000]]
let [az,orta,cok,[cokcok,maximum]]=populations
// console.log(az)
// console.log(orta)
// console.log(cok)
// console.log(cokcok)
// console.log(maximum)


function someFunstion([small,,,[veryHigh]],number){
    console.log("small",small)
    console.log("veryHigh",veryHigh)
}

someFunstion(populations)


let category = {id:1, name:"İçecek"}
// console.log(category.id)
// console.log(category["name"]) // obje için degişkeni bu şekilde de çağırabilirizi


let {id,name}=category
console.log(id)
console.log(name)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice: newUnitPrice, quantity: newQuantity}
    ={productName:"Elma", unitPrice:12500,quantity:5})
    // normalde süslü parantes açtığımızda onu bir scope olarak kabul ediyor. 
    // Böyle yapmaması için bunları normal parantez içerisine alıyoruz
console.log(newUnitPrice)
