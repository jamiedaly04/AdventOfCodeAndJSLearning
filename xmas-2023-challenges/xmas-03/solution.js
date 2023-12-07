import { inputs } from './inputs.js'

/* let inputs = [
    '..........',
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
    '..........',
] */

function isSpecialChar(char) {
    return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/.test(char);
}

function isGear(char) {
    return char === '*';
}

function isNumber(char) {
    return /^\d$/.test(char);
}

// PART 1
/* 
let positionArray = [];

// Loops through each solution row
for (let rowIndex = 1; rowIndex < inputs.length -1; rowIndex++) {
    const currentRow = inputs[rowIndex];
    console.log(currentRow)
    console.log('----------------')

    // Loops through each solution character
    for (let charIndex = 0; charIndex < currentRow.length; charIndex++) {
        let currentChar = currentRow[charIndex];

        // If char is a number, then check if it's next to a special character
        if (isNumber(currentChar)) {
            console.log('Current Char: ' + currentChar)

            let leftChar = inputs[rowIndex][charIndex - 1]
            let rightChar = inputs[rowIndex][charIndex + 1]
            const aboveLeftChar = inputs[rowIndex - 1][charIndex - 1]
            const aboveChar = inputs[rowIndex - 1][charIndex]
            const aboveRightChar = inputs[rowIndex - 1][charIndex + 1]
            const belowLeftChar = inputs[rowIndex + 1][charIndex - 1]
            const belowChar = inputs[rowIndex + 1][charIndex]
            const belowRightChar = inputs[rowIndex + 1][charIndex + 1]

            console.log('Left Char: ' + leftChar);
            console.log('Right Char: ' + rightChar);
            console.log('Above Left Char: ' + aboveLeftChar);
            console.log('Above Char: ' + aboveChar);
            console.log('Above Right Char: ' + aboveRightChar);
            console.log('Below Left Char: ' + belowLeftChar);
            console.log('Below Char: ' + belowChar);
            console.log('Below Right Char: ' + belowRightChar);


            if (isSpecialChar(leftChar) || isSpecialChar(rightChar) || isSpecialChar(aboveLeftChar) || isSpecialChar(aboveChar) || isSpecialChar(aboveRightChar) || isSpecialChar(belowLeftChar) || isSpecialChar(belowChar) || isSpecialChar(belowRightChar)) {
                console.log('Is next to a special char!');

                let i = 1;
                let x = 1;

                // Find integers next to this number
                while (isNumber(leftChar)) {
                    leftChar = inputs[rowIndex][charIndex - i]
                    if (isNumber(leftChar)) {
                        currentChar = leftChar + currentChar
                        //console.log('Left Char Recur: ' + leftChar);
                    }
                    i++;
                }

                while (isNumber(rightChar)) {
                    rightChar = inputs[rowIndex][charIndex + x]
                    if (isNumber(rightChar)) {
                        currentChar = currentChar + rightChar
                        //console.log('Right Char Recur: ' + rightChar);
                    }
                    x++;
                }

                charIndex = charIndex + x
                positionArray.push(currentChar);
            }
            console.log('*******************');
        }
    }
    console.log('----------------');
}

console.log(positionArray);

let totalValue = 0;
positionArray.map(number => {
    totalValue = totalValue + parseInt(number)
})

console.log(totalValue); */

// PART 2 - This is possibily the worst solution

let positionArray = [];
let positionArray2 = [];

// Loops through each solution row
for (let rowIndex = 1; rowIndex < inputs.length - 1; rowIndex++) {
    const currentRow = inputs[rowIndex];
    console.log(currentRow)
    console.log('----------------')

    // Loops through each solution character
    for (let charIndex = 0; charIndex < currentRow.length; charIndex++) {
        let currentChar = currentRow[charIndex];

        // If char is a number, then check if it's next to a special character
        if (isNumber(currentChar)) {
            console.log('Current Char: ' + currentChar)

            let leftChar = inputs[rowIndex][charIndex - 1]
            let rightChar = inputs[rowIndex][charIndex + 1]
            const aboveLeftChar = inputs[rowIndex - 1][charIndex - 1]
            const aboveChar = inputs[rowIndex - 1][charIndex]
            const aboveRightChar = inputs[rowIndex - 1][charIndex + 1]
            const belowLeftChar = inputs[rowIndex + 1][charIndex - 1]
            const belowChar = inputs[rowIndex + 1][charIndex]
            const belowRightChar = inputs[rowIndex + 1][charIndex + 1]

/*             console.log('Left Char: ' + leftChar);
            console.log('Right Char: ' + rightChar);
            console.log('Above Left Char: ' + aboveLeftChar);
            console.log('Above Char: ' + aboveChar);
            console.log('Above Right Char: ' + aboveRightChar);
            console.log('Below Left Char: ' + belowLeftChar);
            console.log('Below Char: ' + belowChar);
            console.log('Below Right Char: ' + belowRightChar); */

            let gearLocation = [];

            if (isGear(leftChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex, charIndex - 1)
            } else if (isGear(rightChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex, charIndex + 1)
            } else if (isGear(aboveLeftChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex - 1, charIndex - 1)
            } else if (isGear(aboveChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex - 1, charIndex)
            } else if (isGear(aboveRightChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex - 1, charIndex + 1)
            } else if (isGear(belowLeftChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex + 1, charIndex - 1)
            } else if (isGear(belowChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex + 1, charIndex)
            } else if (isGear(belowRightChar)) {
                console.log('Is next to a gear char!');
                gearLocation.push(rowIndex + 1, charIndex + 1)
            }

            console.log('Gear Location: ' + gearLocation);

            let i = 1;
            let x = 1;

            // Find integers next to this number
            while (isNumber(leftChar)) {
                leftChar = inputs[rowIndex][charIndex - i]
                if (isNumber(leftChar)) {
                    currentChar = leftChar + currentChar
                    //console.log('Left Char Recur: ' + leftChar);
                }
                i++;
            }

            while (isNumber(rightChar)) {
                rightChar = inputs[rowIndex][charIndex + x]
                if (isNumber(rightChar)) {
                    currentChar = currentChar + rightChar
                    //console.log('Right Char Recur: ' + rightChar);
                }
                x++;
            }

            //charIndex = charIndex + x
            if (gearLocation.length === 2) {
                positionArray.push(currentChar + '->' + gearLocation);
                positionArray2.push(gearLocation.toString());
            }

            gearLocation = [];
        }
        console.log('*******************');
    }
}
console.log('----------------');

//console.log(positionArray);

let numberAndGearCoordArray = [...new Set(positionArray)];
let gearCoordArray = [...new Set(positionArray2)];

console.log(numberAndGearCoordArray);
console.log(gearCoordArray);

let gearCoordsWithTwoNumbers = [];

gearCoordArray.forEach((position) => {
    let i = 0;
    
    numberAndGearCoordArray.forEach((element) => {
        if (element.split('->')[1] === position) {
             i++;
        }
    })

    if (i > 1) {
        gearCoordsWithTwoNumbers.push(position);
    }
})

console.log(gearCoordsWithTwoNumbers);

let finalValueArray = [];

gearCoordsWithTwoNumbers.forEach((position, index) => {
    finalValueArray[index] = '';

    numberAndGearCoordArray.forEach((element) => {
        if (element.split('->')[1] === position) {

            finalValueArray[index] += (`${element.split('->')[0]},`)
        }
    })
})


console.log(finalValueArray);

console.log('----------------');
console.log('----------------');
console.log('----------------');

let totalScoreArray = [];

finalValueArray.forEach((element) => {
    element = element.slice(0, -1);
    element = parseInt(element.split(',')[0]) * parseInt(element.split(',')[1]);
    totalScoreArray.push(element);
})

console.log(totalScoreArray);

let realFinalAnswer = totalScoreArray.reduce((a, b) => a + b);
console.log(realFinalAnswer);