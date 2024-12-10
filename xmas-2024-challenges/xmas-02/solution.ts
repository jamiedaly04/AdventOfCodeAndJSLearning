import { inputArray } from './inputs.ts';

// Test Data Example
/* const puzzleInput = [
  '7 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
]; */

const puzzleInput = inputArray;

// Add function to check if array is in ascending order
function isAscending(arr: any[]) {
  return arr.every(function (x, i) {
    return i === 0 || Number(x) > Number(arr[i - 1]);
  });
}

// Add function to check if array is in descending order
function isDescending(arr: any[]) {
  return arr.every(function (x, i) {
    return i === 0 || Number(x) < Number(arr[i - 1]);
  });
}

// Add function to check if adjacent numbers are
// different by more than or equal to 1, but less than or equal to 3
function isAdjacentLevel(arr: any[]) {
  return arr.every(function (x, i) {
    return (
      i === 0 ||
      (Math.abs(x - arr[i - 1]) >= 1 && Math.abs(x - arr[i - 1]) <= 3)
    );
  });
}

let safeReportCount = 0;

// Loop through each report row
for (let i = 0; i < puzzleInput.length; i++) {
  let safeReport = false;
  let gradualChange = false;
  let adjacentLevelCheck = false;

  // Log out row items
  let reportArray: string[] = [];
  reportArray = puzzleInput[i].split(' ');

  // Check if report has a gradual change
  if (isAscending(reportArray) === true || isDescending(reportArray) === true) {
    gradualChange = true;
  }

  // Check if report has correct adjacent level change
  adjacentLevelCheck = isAdjacentLevel(reportArray);

  // Check if report is safe
  if (gradualChange === true && adjacentLevelCheck === true) {
    safeReport = true;
    safeReportCount++;
  }

  //console.log(reportArray);
  //console.log('- - - - - - - - - - - - - - -');
  //console.log(`Is Report Safe? ${safeReport}`);
  //console.log(`Does report have a gradual change? ${gradualChange}`);
  //console.log(`Does report have an adjacent level change? ${adjacentLevelCheck}`);
}

console.log('- - - - - - - - - - - - - - -');
console.log(`Safe Report Count: ${safeReportCount}`);
console.log('- - - - - - - - - - - - - - -');
