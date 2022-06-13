


/**
 * var : eski. kod içerisinde global degisken gibi davranır. scope' u yoktur
 * let : var yerine bunu tercih ediyoruz. scope' u var. array, int,double... hepsini bunun üzerinden tanımlıyoruz.
 * const : içeriği bir kere tanımlanır değiştirilemez. 
 * 
 * eğer bir değişken oluşturulurken içeriği tanımlanmamışsa 'undefined' olur. Null değildir. 
 * Null bellekte tanımlıdır ama içeriği boştur. undefined bellekte de yoktur.
 */


//js de fonksiyonları da değişkenelere atayabiliyoruz. 
let benimDegiskenim = function(eleman) {
    console.log("FONKSİYON TANIMI")
    console.log(eleman)
}
benimDegiskenim("fnoınwe")



//rest  fonksiyona gönderdiğimiz elemanların 
console.log("REST")
function benimFonksiyonum(id,...geriKalan) {
    console.log(id)
    console.log(geriKalan) // bir array. içerisinde birden fazla değer olabilir.
}
benimFonksiyonum(15)
benimFonksiyonum(26,"Murat","Şahin",58)  // id:26, geriKalan:["Murat","Şahin",58]   şeklinde oluyor
benimFonksiyonum(undefined,"Sivas","Ankara","İstanbul") // bir değişkene değer vermeden ondan sonrakilere değer verebilmek için ona undefined gönderiyoruz


//spread  arrayi ayrıştırır
console.log("SPREAD")
let arrray=["Murat","Şahin",156,2,3.59]
console.log(arrray)  // bir array olarak ekrana yazdırır
console.log(...arrray) // elemanları ayrıştırarak tek tek yazar. spread


//destructure  dizinin elemanlarını farklı değişkenlere atama
console.log("DESTRUCTURE")
let dizi= ["Kadir", "Cücener", 146, "İstanbul"] 
let [ad,soyad,numara,sehir] = dizi
console.log(ad)
console.log(sehir)

function benimFonksiyonum2([is,,num,]){ // gönderilen elemanların tamamını değil bazılarını kullanacaksak bu şekilde yapabiliriz
    console.log(is)
    console.log(num)
}

benimFonksiyonum2(dizi)


// obje tanımı
console.log("OBJE TANIMI")
let isci={id:45,isim:"Mt"}
console.log(isci.id+" "+isci.isim)

let {id,isim}=isci // destructure
console.log(isim)