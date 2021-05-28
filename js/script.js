// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 - chiedere al giocatore di inserire il suo nome

// var nome = prompt('Inserisci il tuo nome')
// console.log(nome);

// document.getElementById('user').innerHTML = nome;

// 2 - generare un numero random per il giocatore

var numRandomUser = Math.floor(Math.random() * 6) + 1;
console.log(numRandomUser);

document.getElementById('lancio-user').innerHTML = numRandomUser;


// 3 - generare un numero random per il pc

var numRandomPc = Math.floor(Math.random() * 6) + 1;
console.log(numRandomPc);

document.getElementById('lancio-pc').innerHTML = numRandomPc;


// 4 - dichiarare chi ha vinto in base al punteggio più alto

var risultato = 'Complimenti...Hai vinto!!!!'

if (numRandomUser < numRandomPc){
    risultato = 'Mi dispiace...Hai perso!';
} else if (numRandomUser == numRandomPc){
    risultato = 'Pareggio';
}

console.log(risultato);

document.getElementById('risultato').innerHTML = risultato;