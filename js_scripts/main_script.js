// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



const price = parseFloat(0.21)


// chiedi quanti chilometri dovra percorrere

const distance =parseInt( prompt("Inserisci la distanza in Km"));

console.log(distance);

// chiedi l'eta al utente

const userAge = parseInt(prompt("Inserisci la tua età"));

//calcola il prezzo del biglietto (0.21 * (k))

let normalPrezzo =  price * distance;
document.getElementById("final_price").innerHTML=normalPrezzo.toFixed(2);

console.log(normalPrezzo);

//ricalcola sottraendo il 20% per i minori di anni 18

if (userAge < 18) {
    let ricPrice = parseFloat(normalPrezzo);

    let minor = ricPrice - (ricPrice * .20);
    document.getElementById("final_price").innerHTML=minor.toFixed(2); 

    console.log(minor);
}

//ricalcola sottraendo il 40% per gli over 65 anni

if (userAge > 65) {
    let ricPrice = parseFloat(normalPrezzo);

    let over = ricPrice - (ricPrice * .40);
    document.getElementById("final_price").innerHTML=over.toFixed(2);


    console.log(over);
}