// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,  cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// funzione numeri random
function randomComp(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  var arrayComp = [];

//   16 numeri random computer
  for (i = 0; i < 16; i++){
    var numComp = randomComp(1, 100);
    var inclusi = arrayComp.includes(numComp);
    
     if  (inclusi === false){
       arrayComp.push(numComp)
     }else{
       while(inclusi === true){
        var numComp = randomComp(1, 100);
        var inclusi = arrayComp.includes(numComp);
          if(inclusi === false){
            arrayComp.push(numComp);
          }
       }
     }
  }
  
  console.log(arrayComp);

  // chiedere all'utente di inserire il numero

var numeriUtente = [];


for (var i = 0; i < 10; i++ ){
  var domanda = parseInt(prompt('inserisci un numero da 1 a 100'));
  var numeri = numeriUtente.includes(domanda);
  if (numeri === false && !arrayComp.includes(domanda)){
    numeriUtente.push(domanda);
  }else if (numeri === true && !arrayComp.includes(domanda)){
    while(numeri === true && !arrayComp.includes(domanda)){
      alert('hai già usato questo numero');
      var domanda = parseInt(prompt('inserisci un numero da 1 a 100'));
      var numeri = numeriUtente.includes(domanda);
      if(numeri === false && !arrayComp.includes(domanda)){
        numeriUtente.push(domanda);
      }
    }
  }else{
    alert('HAI PERSO');
    break;
  }

}
 
alert('Hai indovinato ' + numeriUtente.length + ' numeri: ' + numeriUtente );
console.log(numeriUtente);
  

  
 
    
      
        

    
          
          
      
  
  
  
 
  
  
  






    