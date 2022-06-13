// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli
// nell’array fino a quando
// la somma degli elementi è minore di 50.

const numbers = [];

let userNumber; 

let numbersSum = 0;

while (numbersSum < 50) {

    userNumber = parseInt(prompt("scrivi un numero"));

    numbersSum += userNumber;

    numbers.push(numbersSum);

}

