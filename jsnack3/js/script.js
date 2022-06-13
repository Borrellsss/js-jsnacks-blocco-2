// Il software deve chiedere per 5 volte
// all’utente di inserire un numero.
// Il programma stampa la somma di tutti
// i numeri inseriti.
// Esegui questo programma in due versioni,
// con il for e con il while.

// *VARIABLES*
let userNumber;

let userNumbersSum = 0;

// // *FOR*
// for (let i = 0; i < 5; i++) {

//     // *OVERRIDING "userNumber" BY USER INPUT 5 TIMES*
//     userNumber = parseInt(prompt("type a number"));

//     // *ADDING ALL USER NUMBERS IN "userNumbersSum"*
//     userNumbersSum += userNumber;
// }

// console.log(userNumbersSum);

// *WHILE VARIABLES*
let Counter = 0;

// *WHILE*
while (Counter < 5) {
    // *OVERRIDING "userNumber" BY USER INPUT 5 TIMES*
    userNumber = parseInt(prompt("type a number"));

    // *ADDING ALL USER NUMBERS IN "userNumbersSum"*
    userNumbersSum += userNumber;

    Counter++
}

console.log(userNumbersSum);


