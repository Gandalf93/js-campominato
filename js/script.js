// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// funzione numeri random
function randomComp(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  var arrayComp = [];
//   16 numeri random computer
  for (i = 0; i < 16; i++){
    var numComp = randomComp(1, 100);
    console.log(numComp);
    if ()
  }
 
//   i numeri non possono essere duplicati


// chiedere all'utente di inserire il numero
var arrayUtente = [];
console.log(arrayUtente);

var domanda = prompt('inserisci un numero tra 1 e 100');

while(arrayUtente.length < 84){
        var utente = numUtente(domanda, numComp)
        if (domanda == numComp){
            console.log('hai perso');
        }
}
     

function numUtente(x, y) {
    if(x != y){
        return arrayUtente.push(x);
    }
}
    
    





    