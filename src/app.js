console.log("EVO9 MR")

//JS typesafe degildir degisken turu degistirilebilir.
/** 
var dolarDun = 9.20
var dolarBugun = 17.23

{
    var dolarDun = 5164  // var, global degisken gibi calisir. scope u yoktur
}
// var yerine let 'i kullanacagiz

console.log(dolarDun)
console.log(dolarBugun)
*/

const euroDun = 18.48
//euroDun=11  // const degiskenler readonly dir. degisken icerigi degistirilemez
console.log(euroDun)


let konuKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
//console.log(konuKredileri)

for (let i = 0; i < konuKredileri.length; i++) {
    const element = konuKredileri[i];
    console.log(element)
}