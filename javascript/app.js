// let etaPasseggero = parseInt(prompt('Inserisci la tua età'));
//         let kilometri = parseInt(prompt('Inserisci i km del viaggio'));
//         const costoBiglietto = kilometri * 0.21;
//         const prezzoFinale = costoBiglietto;     

//         if (isNaN(etaPasseggero) || isNaN(kilometri)) {
//             console.log ('Inserisci numeri validi')
//         } else     

//             if (etaPasseggero < 18) {
//                 let scontoMinorenni = (costoBiglietto / 100) * 20;
//                 let prezzoMinorenni = costoBiglietto - scontoMinorenni;
//                 console.log ('Il costo del biglietto è di €' + prezzoMinorenni.toFixed(2))
//             }
//             else if (etaPasseggero > 65) {
//                 let scontoOver65 = (costoBiglietto / 100) * 40;
//                 let prezzoOver65 = costoBiglietto - scontoOver65;
//                 console.log ('Il costo del biglietto è di € ' + prezzoOver65.toFixed(2))
//             }
//             else {
//                 console.log('Il prezzo del biglietto è di €' + prezzoFinale)
//             }       


// const buttonElement = document.querySelector('input[type="submit"]'); 
// buttonElement.addEventListener('click', function ()  { 
//     const inputElement = document.querySelector('input[name="nome_cognome"]');  
//     const nomePasseggero = inputElement.value; 
//     console.log(nomePasseggero); 
// })

const buttonElement = document.querySelector('input[type="submit"]'); 
buttonElement.addEventListener('click', function ()  { // Creo variabile bottone e gli aggiungo un evento (click) con una funzione
    const inputNomeCognome = document.querySelector('input[name="nome_cognome"]'); // Creo variabile con l'input (inserito dall'utente) dell'attributo con name "nome_cognome"
    const nomePasseggero = inputNomeCognome.value; // Il value dell'inputElement glielo do alla variabile "nomePasseggero"
    const inputKilometri = document.querySelector('input[name="kilometri"]');
    const prezzoBase = inputKilometri.value * 0.21;
    console.log(nomePasseggero, prezzoBase); 
})



