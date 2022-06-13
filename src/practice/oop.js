export class Calisan{
    constructor(id,name){
        this.id=id   // bu aslında bir prototyping dir. constructor içerisinde bu işlemi yapmazsak nesne üzerinden 
        this.name=name//bu değişkenlere erişemeyiz. this aşağıda new ile oluşturulan nesneyi işaret ediyor
    }
}

let calisan= new Calisan()

console.log(calisan.id)
calisan.id=12
console.log(calisan.id)

// instance(nesne)' a yapılan protoyping
calisan.sehir = "Sivas"  // prototyping ile bir nesneye yeni bir değişken ekleyebiliriz. bu işlem sadece bu işlemin yapıldığı nesne üzerinde etkilidir.
console.log(calisan.sehir)

//class' a yapılan protoyping
Calisan.yeniEleman = "yeni bişi"
console.log(Calisan.yeniEleman)


class Temizlikci extends Calisan{
    constructor(kat,id,name){
        super(id,name)
        this.kat=kat
    }
}

let temizlikci =new Temizlikci(89,undefined,"Berk")

console.log(temizlikci.kat)
console.log(temizlikci.id)
console.log(temizlikci.name)