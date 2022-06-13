// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// *ARRAYS*
const firstArray = [55, 24, 11, 29, 89, 77, 90, 25, 33, 76, 99, 234];

const secondArray = [3, 8, 10, 65];

let randomNumber;

for (let i = secondArray.length; secondArray.length < firstArray.length; i++) {

    // let thisNumber = firstArray[i];
    // console.log(thisNumber);

    randomNumber = Math.floor(Math.random() * 100) + 1;

    secondArray.push(randomNumber);

}

console.log(secondArray);

console.log(firstArray.length);