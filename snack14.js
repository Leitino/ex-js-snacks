function timer() {
  for (var i = 0; i < 5; i++) {
    var richiesta= prompt('inserisci i numeri che ti ricordi')
    parseInt(numUtente)
    numUtente.push(richiesta)
  }
  for (var i = 0; i < numUtente.length; i++) {
    for (var i = 0; i < numCasuali.length; i++) {
      
    }
  }
}
var numUtente=[]
var numCasuali=[]
for (var i = 0; i < 5; i++) {
  var numeri= Math.floor((Math.random()*50)+1)
  numCasuali.push(numeri)
}

alert(numCasuali + ' hai 30 secondi per memorizzare i numeri')
var time30 = setTimeout(timer,1000)
