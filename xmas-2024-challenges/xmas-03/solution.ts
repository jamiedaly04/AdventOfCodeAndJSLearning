import { input } from './inputs.ts';

// Part 1 Test Data Example
//const puzzleInput: string = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

// Part 2 Test Data Example
//const puzzleInput: string = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

const puzzleInput = input;

function getClosestValue(myArray: number[], myValue: number) {
  var i = 0;

  while (myArray[++i] < myValue);

  if (myArray[--i] > myValue) return -1;
  else return myArray[i];
}

// PART 1
//---------------------------------

// Regular expression to remove mul(number, number) with normal parentheses
const mulValueRegEx: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;

let match: RegExpExecArray | null;

let finalAnswer: number = 0;

/* while ((match = mulValueRegEx.exec(puzzleInput)) !== null) {
    // Ensure that the match exists and extract the numbers correctly
    const firstNumber = match[1]; // First captured number
    const secondNumber = match[2]; // Second captured number
    console.log(
      `Found: mul(${firstNumber},${secondNumber}) at Position: ${match.index}`
    );
  
    finalAnswer = finalAnswer + parseInt(firstNumber) * parseInt(secondNumber);
  }
  
  console.log(finalAnswer); */

// PART 2
//---------------------------------

const doRegex: RegExp = /do\(\)(?!')/g;
const dontRegex: RegExp = /don't\(\)/g;

let doMatch: RegExpExecArray | null;
let dontMatch: RegExpExecArray | null;

const doMatchesArray: number[] = [];
const dontMatchesArray: number[] = [];

while ((doMatch = doRegex.exec(puzzleInput)) !== null) {
  // Ensure that the match exists and extract the 'do()' correctly
  console.log(`Found: ${doMatch[0]} at Position: ${doMatch.index}`);
  doMatchesArray.push(doMatch.index);
  console.log(`---------------------------------`);
}

while ((dontMatch = dontRegex.exec(puzzleInput)) !== null) {
  // Ensure that the match exists and extract the 'don't()' correctly
  console.log(`Found: ${dontMatch[0]} at Position: ${dontMatch.index}`);
  dontMatchesArray.push(dontMatch.index);
  console.log(`---------------------------------`);
}

while ((match = mulValueRegEx.exec(puzzleInput)) !== null) {
  // Ensure that the match exists and extract the numbers correctly
  if (match) {
    const firstNumber = match[1]; // First captured number
    const secondNumber = match[2]; // Second captured number

    let closestDoMatch = getClosestValue(doMatchesArray, match.index);
    let closestDontMatch = getClosestValue(dontMatchesArray, match.index);

    if (closestDontMatch < 0) {
      finalAnswer =
        finalAnswer + parseInt(firstNumber) * parseInt(secondNumber);
      console.log(
        `Found: mul(${firstNumber},${secondNumber}) at Position: ${match.index}`
      );
    } else if (closestDoMatch > closestDontMatch) {
      finalAnswer =
        finalAnswer + parseInt(firstNumber) * parseInt(secondNumber);
      console.log(
        `Found: mul(${firstNumber},${secondNumber}) at Position: ${match.index}`
      );
    }
  }
}

console.log(`---------------------------------`);
console.log(`Final Answer:`, finalAnswer);
