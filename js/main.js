'use strict';

/*

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/


/*
DEFINIZIONE VARIABILE
*/


//definizione variabili ticket generator
const inputName = document.querySelector('#name');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const buttonGenerate = document.getElementById('generate');

//definizione variabili ticket area

const textName = document.getElementById('text-name');
const textOffer = document.getElementById('text-offer');
const textWagon = document.getElementById('text-wagon');
const textCP = document.getElementById('text-cp');
const textTicketPrice = document.getElementById('text-ticket-cost');
const ticketResult = document.querySelector('.ticket-result');

//reset
const resetButton = document.getElementById('reset');

//evento generate button
buttonGenerate.addEventListener('click', 
function(){

    const inputNameValue = inputName.value;
    const inputKmValue = Number(inputKm.value);
    const inputAgeValue = inputAge.value;

   //prezzo totale del biglietto - senza sconti
   let ticketPrice = 0.21 * inputKmValue; 
   let message = 'Biglietto standard';
 
    if(inputAgeValue === 'underage') { //true
        ticketPrice = ticketPrice * 0.8; //20% sconto
        message = 'Sconto minorenne';
    } else if(inputAgeValue === 'over'){
        ticketPrice = ticketPrice * 0.6; //40% sconto
        message = 'Sconto over';
    } 

    //questo punto
   ticketPrice = ticketPrice.toFixed(2);
//    console.log(ticketPrice);

    /*
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
    */

    //inserisco nome in html
    textName.innerHTML = inputNameValue;      
    
    //inserisco testo offerta
    textOffer.innerHTML = message;  
     


    textWagon.innerHTML = 5;      
    textCP.innerHTML = 95000;     
    
    
    textTicketPrice.innerHTML = `${ticketPrice}€`;


    //mostra il biglietto
    ticketResult.classList.add('show');
}
);


//evento reset button
resetButton.addEventListener('click', function(){
    ticketResult.classList.remove('show');
    console.log(inputName.value)
    inputName.value = '';
    inputKm.value = '';
    inputAge.value = '';

})








