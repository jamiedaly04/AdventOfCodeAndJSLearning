// PART 1
//---------------------------------

import { inputs } from './inputs.js'

function reverse(s) {
    return s.split("").reverse().join("");
}

console.log('Puzzle Input: ', inputs)

const digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function numberSwitch(stringNumber) {
    let number;

    switch (stringNumber) {
        case 'one':
        case '1':
            number = '1';
            break;
        case 'two':
        case '2':
            number = '2';
            break;
        case 'three':
        case '3':
            number = '3';
            break;
        case 'four':
        case '4':
            number = '4';
            break;
        case 'five':
        case '5':
            number = '5';
            break;
        case 'six':
        case '6':
            number = '6';
            break;
        case 'seven':
        case '7':
            number = '7';
            break;
        case 'eight':
        case '8':
            number = '8';
            break;
        case 'nine':
        case '9':
            number = '9';
            break;
    }

    return number
}

/* const firstDigitArray = inputs.map((element) => {
    for (let index = 0; index < element.length; index++) {
        if (digitArray.includes(element[index])) {

            return element[index]
        }
    }
})

const lastDigitArray = inputs.map((element) => {
    for (let index = 0; index < element.length; index++) {
        let reversedElement = reverse(element);

        if (digitArray.includes(reversedElement[index])) {

            return reversedElement[index]
        }
    }
})

//console.log('First Digit Array: ', firstDigitArray);
//console.log('Last Digit Array: ', lastDigitArray);

const totalArray = inputs.map((element, index) => {

    let firstDigit = firstDigitArray[index];
    let lastDigit = lastDigitArray[index];
    const total = firstDigit + lastDigit;

    return total
})

//console.log('Total Array: ', totalArray);

let totalScore = 0;

totalArray.forEach((element) => {
    totalScore += parseInt(element)
}) */

//console.log('Total Score: ', totalScore)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PART 2
let tempArray = [];
let min;

let part2FirstDigitArray = [];
let part2LastDigitArray = [];

// First digit maker
inputs.forEach((element) => {

    digitsArray.forEach((digit) => {

        if (element.indexOf(digit) !== -1) {
            tempArray.push({ digit: digit, index: element.indexOf(digit) })
        }
    })

    min = Math.min(...tempArray.map(item => item.index));

    let result = tempArray.filter(obj => {
        return obj.index === min
    })

    part2FirstDigitArray.push(result[0].digit)
    tempArray = [];

})

// Last digit maker
inputs.forEach((element) => {

    digitsArray.forEach((digit) => {
        if (element.lastIndexOf(digit) !== -1) {
            tempArray.push({ digit: digit, index: element.lastIndexOf(digit) })
        }
    })

    min = Math.max(...tempArray.map(item => item.index));

    let result = tempArray.filter(obj => {
        return obj.index === min
    })

    part2LastDigitArray.push(result[0].digit)
    tempArray = [];
})

console.log('Part 2 First Digit Array: ', part2FirstDigitArray);
console.log('Part 2 Last Digit Array: ', part2LastDigitArray);

let transformedFirstDigit = [];
let transformedLastDigit = [];

// Convert string numbers into integers
part2FirstDigitArray.forEach((element) => {
    transformedFirstDigit.push(numberSwitch(element))
})

part2LastDigitArray.forEach((element) => {
    transformedLastDigit.push(numberSwitch(element))
})


console.log('Transformed First Digit: ', transformedFirstDigit);
console.log('Transformed Last Digit: ', transformedLastDigit);

// Combine numbers together
const totalArray = inputs.map((element, index) => {

    let firstDigit = transformedFirstDigit[index];
    let lastDigit = transformedLastDigit[index];
    const total = firstDigit + lastDigit;

    return total
})

console.log('Total Array: ', totalArray);

// Add final numbers to get total value!
let totalScore = 0;

totalArray.forEach((element) => {
    totalScore += parseInt(element)
})

console.log('Total Score: ', totalScore)