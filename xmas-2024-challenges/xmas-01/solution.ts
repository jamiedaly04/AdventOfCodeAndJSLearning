import { array1, array2 } from './inputs.ts';

// PART 1
//---------------------------------

function getNumberDifference(a: number, b: number) {
  return Math.abs(a - b);
}

const leftList = array1;
const rightList = array2;
/* Test Data Example
const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];
*/
const distanceArray = new Array<number>();
let totalDistance = 0;

// Sort Left List
leftList.sort((a, b) => a - b);
//console.log('Ascending: ' + leftList);

// Sort Right List
rightList.sort((a, b) => a - b);
//console.log('Ascending: ' + rightList);

// Create Distance Array
for (let i = 0; i < leftList.length; i++) {
  const difference = getNumberDifference(leftList[i], rightList[i]);
  distanceArray.push(difference);
}

// Calculate Total Distance
for (let i = 0; i < distanceArray.length; i++) {
  totalDistance += distanceArray[i];
}

console.log(`Total Distance: ${totalDistance}`);

// PART 2
//---------------------------------
