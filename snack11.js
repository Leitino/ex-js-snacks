/*Scrivi una funzione che fonda due array prendendo alternativamente gli
elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

var lettere=['a', 'b', 'c']
var numeri=[1, 2, 3]
var combinati=[]

for (var i = 0; i < lettere.length; i++) {
  for (var k = 0; k < numeri.length; k++) {
    combinati.push(numeri[k]+lettere[i])
  }
}
console.log(combinati)
