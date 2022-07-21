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



const buttonElement = document.querySelector('input[type="submit"]'); 
buttonElement.addEventListener('click', function ()  { 
    const inputNomeCognome = document.querySelector('input[name="nome_cognome"]'); 
    const nomePasseggero = inputNomeCognome.value;

    const inputKilometri = document.querySelector('input[name="kilometri"]');
    const prezzoBase = parseFloat(inputKilometri.value * 0.21);

    let inputEta = document.getElementById('fascia_eta');
    let etaPasseggero = inputEta.value;

    if (isNaN(kilometri)) {
           console.log ('Inserisci un numero di km valido')
    }   
    else if (etaPasseggero == 'minorenne') {
            let scontoMinorenni = (prezzoBase / 100) * 20;
            let prezzoMinorenni = prezzoBase - scontoMinorenni;
            console.log(nomePasseggero, 'Il prezzo del biglietto è di €' + prezzoMinorenni);
    }
    else if (etaPasseggero == 'over65') {
        let scontoOver65 = (prezzoBase / 100) * 40;
        let prezzoOver65 = prezzoBase - scontoOver65;
        console.log(nomePasseggero, 'Il prezzo del biglietto è di €' + prezzoOver65);
    }
    else if (etaPasseggero == 'maggiorenne') {
        let prezzoMaggiorenni = prezzoBase;  
        console.log(nomePasseggero, 'Il prezzo del biglietto è di €' + prezzoMaggiorenni);
    }    
})



