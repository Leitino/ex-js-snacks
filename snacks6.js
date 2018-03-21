function Zucchina(varietà, kg_peso, lunghezza_cm) {
  this.varietà=varietà
  this.kg_peso=kg_peso
  this.lunghezza_cm=lunghezza_cm
}

var zucchina1 = new Zucchina(1, 2, 20)
var zucchina2 = new Zucchina(2, 1.5, 18)
var zucchina3 = new Zucchina(3, 1, 19)
var zucchina4 = new Zucchina(4, 2, 20)
var zucchina5 = new Zucchina(5, 1.5, 18)
var zucchina6 = new Zucchina(6, 1, 17)
var zucchina7 = new Zucchina(7, 2, 20)
var zucchina8 = new Zucchina(8, 1.5, 18)
var zucchina9 = new Zucchina(9, 2, 17)
var zucchina10 = new Zucchina(10, 3, 19)

var listaZucchine =[zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6, zucchina7, zucchina8, zucchina9, zucchina10]

sommaPeso=0
for (var i = 0; i < listaZucchine.length; i++) {
  var peso = listaZucchine[i].kg_peso
  sommaPeso = sommaPeso + peso
}
  console.log(sommaPeso)
