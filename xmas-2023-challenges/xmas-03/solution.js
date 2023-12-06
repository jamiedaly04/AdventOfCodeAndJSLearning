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

function isNumber(char) {
    return /^\d$/.test(char);
}

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

console.log(totalValue);
