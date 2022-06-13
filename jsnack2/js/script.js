// Calcola la somma e la media dei primi 10 numeri.

let numbersSum = 0;

let averageNumber;

for (let i = 0; i < 10; i++) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

    numbersSum += randomNumber;
}

console.log(numbersSum);

averageNumber = numbersSum / 10;
console.log(averageNumber);