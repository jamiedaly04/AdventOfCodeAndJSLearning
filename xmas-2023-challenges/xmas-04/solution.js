import { inputs } from './inputs.js'

/* let inputs = [
    'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
    'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
    'Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14  1',
    'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
    'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
    'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
] */

// PART 1

let winningNumbers = [];
let currentNumbers = [];

inputs.forEach((input) => {
    winningNumbers.push(input.split('|')[0])
    currentNumbers.push(input.split('|')[1])
})

winningNumbers = winningNumbers.map((winningNumber) => {
    winningNumber = (winningNumber.split(':')[1].trim()).replaceAll('  ', ' ');
    return winningNumber.split(' ');
})

currentNumbers = currentNumbers.map((currentNumber) => {
    currentNumber = (currentNumber.trim()).replaceAll('  ', ' ');
    return currentNumber.split(' ');
})

/* console.log('Winning Numbers: ', winningNumbers);
console.log('Current Numbers: ', currentNumbers);

let matchingTotal = 0;
let gameTotal = 0;

currentNumbers.forEach((currentNumber, index) => {
    console.log('------------NEW GAME-------------------')

    for (let i = 0; i < currentNumber.length; i++) {
        for (let x = 0; x < winningNumbers.length; x++) {
            if (currentNumber[i] == winningNumbers[index][x]) {
                if (gameTotal === 0) {
                    gameTotal = 1;
                } else if (gameTotal > 0) {
                    gameTotal *= 2;
                }
            }
        }
        console.log('-----------------------') 
    }
    console.log('Game Total: ', gameTotal);

    matchingTotal += gameTotal;
    gameTotal = 0;
})

console.log(matchingTotal); */

// PART 2
console.log('Winning Numbers: ', winningNumbers);
console.log('Current Numbers: ', currentNumbers);

let totalWinsInCard = 0;
let totalWinsinCardArray = [];

// Loops through each row
currentNumbers.forEach((currentNumber, index) => {
    console.log('------------NEW GAME-------------------')

    // Loops through each currentNumber
    for (let i = 0; i < currentNumber.length; i++) {

        // Loops through each winning number with a currentNumber one at a time
        for (let x = 0; x < winningNumbers.length; x++) {
            if (currentNumber[i] == winningNumbers[index][x]) {
                totalWinsInCard = totalWinsInCard + 1
            }
        }
    }
    console.log('Total Wins In Card: ', totalWinsInCard);
    totalWinsinCardArray.push(totalWinsInCard);
    totalWinsInCard = 0;
})

console.log('--------------------');

let numberOfCardsArray = new Array(inputs.length).fill(1);
let value = 0;

//console.log(totalWinsinCardArray);
//console.log(numberOfCardsArray);

totalWinsinCardArray.forEach((totalWinsValue, index) => {
    console.log('Number of wins: ' + totalWinsValue);
    console.log('Number of cards: ' + numberOfCardsArray);
    console.log('--------------------');

    if (totalWinsValue > 0) {
        const points = 2 ** (totalWinsValue - 1);
        value += points;

        for (let i = index + 1; i <= index + totalWinsValue; i++) {
            numberOfCardsArray[i] += numberOfCardsArray[index];

        }
    }
})

console.log(numberOfCardsArray);

console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
let totalValue = numberOfCardsArray.reduce((a, b) => a + b, 0);
console.log('Total Number of scratchcards: ' + totalValue);

