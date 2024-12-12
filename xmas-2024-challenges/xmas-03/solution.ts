import { input } from './inputs.ts';

// Test Data Example
//const puzzleInput: string = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

const puzzleInput = input;

// PART 1
//---------------------------------

// Regular expression to remove mul(number, number) with normal parentheses
const regex: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;

let match: RegExpExecArray | null;

let finalAnswer: number = 0;

while ((match = regex.exec(puzzleInput)) !== null) {
  // Ensure that the match exists and extract the numbers correctly
  const firstNumber = match[1]; // First captured number
  const secondNumber = match[2]; // Second captured number
  console.log(`Found: mul(${firstNumber},${secondNumber})`);

  finalAnswer = finalAnswer + parseInt(firstNumber) * parseInt(secondNumber);
}

console.log(finalAnswer);

// PART 2
//---------------------------------
