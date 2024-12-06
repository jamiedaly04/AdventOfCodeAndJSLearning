import { array1, array2 } from './inputs.ts';

//Test Data Example
//const leftList = [3, 4, 2, 1, 3, 3];
//const rightList = [4, 3, 5, 3, 9, 3];

const leftList = array1;
const rightList = array2;

// PART 1
//---------------------------------

/* function getNumberDifference(a: number, b: number) {
  return Math.abs(a - b);
}

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

console.log(`Total Distance: ${totalDistance}`); */

// PART 2
//---------------------------------

const occurenceArray = new Array<number>();
const similarityArray = new Array<number>();

// Loop through left array value for each right array value
// If it finds value, add to counter
for (let i = 0; i < leftList.length; i++) {
  let count = 0;

  for (let x = 0; x < rightList.length; x++) {
    if (leftList[i] === rightList[x]) {
      count = count + 1;
    }
  }

  // Build occurence array from counter
  occurenceArray.push(count);

  // Build similarity array
  similarityArray.push(leftList[i] * occurenceArray[i]);
}

// Add together all values in similarity array
const totalSimilarityScore = similarityArray.reduce(
  (partialSum, a) => partialSum + a,
  0
);

console.log(totalSimilarityScore);
