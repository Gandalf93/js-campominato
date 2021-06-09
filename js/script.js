// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,  cioè il numero di volte che l’utente ha inserito un numero consentito.

// funzione numeri random
function randomComp(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  var arrayComp = [];

//   16 numeri random computer
  for (i = 0; i < 16; i++){
    var numComp = randomComp(1, 100);
    var inclusi = arrayComp.includes(numComp);
    // arrayComp.push(numComp);
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

  var arrayUtente = [];
   
  var domanda = parseInt(prompt('inserisci un numero tra 1 e 100' + arrayUtente.length));
  

  while (domanda < 84){
    var domanda = parseInt(prompt('inserisci un numero tra 1 e 100' + arrayUtente.length));
     if(domanda != arrayComp[i]){
      arrayUtente.push(domanda);
    }else{
      console.log('hai perso');
    }
  }
console.log(arrayUtente);
  

  
 
    
      
        

    
          
          
      
  
  
  
 
  
  
  






    