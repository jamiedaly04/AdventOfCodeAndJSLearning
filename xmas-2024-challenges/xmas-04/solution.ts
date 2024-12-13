import { input } from './inputs.ts';

// Test Data Example
/* const input: string[] = [
  '                          ',
  '          MMMSXXMASM      ',
  '          MSAMXMSMSA      ',
  '          AMXSXMAAMM      ',
  '          MSAMASMSMX      ',
  '          XMASAMXAMM      ',
  '          XXAMMXXAMA      ',
  '          SMSMSASXSS      ',
  '          SAXAMASAAA      ',
  '          MAMMMXMMMM      ',
  '          MXMXAXMASX      ',
  '                          ',
]; */

// PART 1
//---------------------------------

/* let xmasOccurances = 0;

for (let lineIndex = 0; lineIndex < input.length; lineIndex++) {
  const line = input[lineIndex];

  //console.log('------');
  //console.log(line);

  for (let charIndex = 0; charIndex < input[lineIndex].length; charIndex++) {
    const char = input[lineIndex][charIndex];
    //console.log(char);

    if (char === 'X') {
      // Horizontal
      if (
        input[lineIndex][charIndex + 1] === 'M' &&
        input[lineIndex][charIndex + 2] === 'A' &&
        input[lineIndex][charIndex + 3] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex][charIndex - 1] === 'M' &&
        input[lineIndex][charIndex - 2] === 'A' &&
        input[lineIndex][charIndex - 3] === 'S'
      ) {
        xmasOccurances++;
      }

      // Backward Horizontal

      // Vertical
      if (
        input[lineIndex + 1][charIndex] === 'M' &&
        input[lineIndex + 2][charIndex] === 'A' &&
        input[lineIndex + 3][charIndex] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex - 1][charIndex] === 'M' &&
        input[lineIndex - 2][charIndex] === 'A' &&
        input[lineIndex - 3][charIndex] === 'S'
      ) {
        xmasOccurances++;
      }

      // Diagonal
      if (
        input[lineIndex - 1][charIndex - 1] === 'M' &&
        input[lineIndex - 2][charIndex - 2] === 'A' &&
        input[lineIndex - 3][charIndex - 3] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex - 1][charIndex + 1] === 'M' &&
        input[lineIndex - 2][charIndex + 2] === 'A' &&
        input[lineIndex - 3][charIndex + 3] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex + 1][charIndex - 1] === 'M' &&
        input[lineIndex + 2][charIndex - 2] === 'A' &&
        input[lineIndex + 3][charIndex - 3] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex + 1][charIndex + 1] === 'M' &&
        input[lineIndex + 2][charIndex + 2] === 'A' &&
        input[lineIndex + 3][charIndex + 3] === 'S'
      ) {
        xmasOccurances++;
      }
    }
  }
}

console.log('Number of XMAS occurances:', xmasOccurances); */

// PART 2
//---------------------------------

let xmasOccurances = 0;

for (let lineIndex = 0; lineIndex < input.length; lineIndex++) {
  const line = input[lineIndex];

  //console.log('------');
  //console.log(line);

  for (let charIndex = 0; charIndex < input[lineIndex].length; charIndex++) {
    const char = input[lineIndex][charIndex];
    //console.log(char);

    if (char === 'A') {
      // Find MAS in X shape
      if (
        input[lineIndex + 1][charIndex + 1] === 'M' &&
        input[lineIndex - 1][charIndex - 1] === 'S' &&
        input[lineIndex - 1][charIndex + 1] === 'M' &&
        input[lineIndex + 1][charIndex - 1] === 'S'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex + 1][charIndex + 1] === 'S' &&
        input[lineIndex - 1][charIndex - 1] === 'M' &&
        input[lineIndex - 1][charIndex + 1] === 'S' &&
        input[lineIndex + 1][charIndex - 1] === 'M'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex + 1][charIndex + 1] === 'M' &&
        input[lineIndex - 1][charIndex - 1] === 'S' &&
        input[lineIndex - 1][charIndex + 1] === 'S' &&
        input[lineIndex + 1][charIndex - 1] === 'M'
      ) {
        xmasOccurances++;
      }

      if (
        input[lineIndex + 1][charIndex + 1] === 'S' &&
        input[lineIndex - 1][charIndex - 1] === 'M' &&
        input[lineIndex - 1][charIndex + 1] === 'M' &&
        input[lineIndex + 1][charIndex - 1] === 'S'
      ) {
        xmasOccurances++;
      }
    }
  }
}

console.log('Number of XMAS occurances:', xmasOccurances);
