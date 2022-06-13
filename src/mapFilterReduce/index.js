let  products =[
    {id:1, name:"Monster", unitPrice:21000},
    {id:2, name:"Asus", unitPrice:23000},
    {id:3, name:"HP", unitPrice:16000},
    {id:4, name:"Lenovo", unitPrice:33000},
]

//map ile array içerisinde gezebiliyoruz
products.map(ürün=>console.log(ürün.name)) // products listesinin içinde gezer
// içindekileri tek tek ürün değişkenine atar ve sırayla ekrana yazdırır

//birden fazla satır işlem yapacaksak süslü parantez içerisine alıoruz
products.map(ürün=>{
    console.log(ürün)
    console.log(ürün.id)
}) 


//array in içerisindekilere filtreleme yapar. yeni bir array oluşturur
let filteredProduct=products.filter(ürün=>ürün.unitPrice<22000)
console.log("22000 tl den ucuz bilgisayarlar")
filteredProduct.map(filteredÜrün=>console.log(filteredÜrün.name))

//içerisinde gezerek verilen değerleri toplar
let cartTotal = products.reduce((acc,ürün)=>acc+ürün.unitPrice,0)
// her bir ürün için acc ye ürün.unitPrice ı ekle, başlangıç noktası=0
console.log("Toplam fiyat "+cartTotal)


// eğer istersek bu işlemlerin hepsini tekte yapabiliriz
let carttotal = products
.filter(ürün=> 22000<ürün.unitPrice)
.map(ürün=>{
    ürün.unitPrice=ürün.unitPrice*0.18
    return ürün
})
.reduce((acc,ürün)=> acc+ürün.unitPrice,0)
console.log(carttotal)