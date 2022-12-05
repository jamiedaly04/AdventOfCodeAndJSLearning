// PART 1
//---------------------------------

import { inputs } from './inputs.js'

let test = [
    '2 - 4, 6 - 8',
    '2 - 3, 4 - 5',
    '5 - 7, 7 - 9',
    '2 - 8, 3 - 7',
    '6 - 6, 4 - 6',
    '2 - 6, 4 - 8'
]

let campMateArray = []
let campMateArray2 = []
let firstCampmateRange = []
let secondCampmateRange = []

/*
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

for (let i = 0; i < inputs.length; i++) {
    campMateArray[i] = inputs[i].split(",")[0];
    campMateArray2[i] = inputs[i].split(",")[1];
    firstCampmateRange[i] = campMateArray[i].split("-")[0].trim() + ',' + campMateArray[i].split("-")[1].trim()
    secondCampmateRange[i] = campMateArray2[i].split("-")[0].trim() + ',' + campMateArray2[i].split("-")[1].trim()
}

//console.log(firstCampmateRange)
//console.log(secondCampmateRange)

var campMate1Range = [];
var campMate2Range = [];
var total = 0
for (let i = 0; i < inputs.length; i++) {
    campMate1Range.push(range(parseInt(firstCampmateRange[i].split(",")[0]), parseInt(firstCampmateRange[i].split(",")[1])))
    campMate2Range.push(range(parseInt(secondCampmateRange[i].split(",")[0]), parseInt(secondCampmateRange[i].split(",")[1])))
}
//console.log(campMate1Range)
//console.log(campMate2Range)

for (let i = 0; i < inputs.length; i++) {
    if (campMate1Range[i].every(elem => campMate2Range[i].includes(elem))) {
        total++
    } else if (campMate2Range[i].every(elem => campMate1Range[i].includes(elem))) {
        total++
    }
}
*/

//console.log(total)

//PART 2
//---------------------------------

let part2Total = 0

for (let i = 0; i < inputs.length; i++) {
    campMateArray[i] = inputs[i].split(",")[0];
    campMateArray2[i] = inputs[i].split(",")[1];
    firstCampmateRange[i] = campMateArray[i].split("-")[0].trim() + ',' + campMateArray[i].split("-")[1].trim()
    secondCampmateRange[i] = campMateArray2[i].split("-")[0].trim() + ',' + campMateArray2[i].split("-")[1].trim()
}

/* console.log(parseInt(firstCampmateRange[0].split(",")[0]))
console.log(parseInt(firstCampmateRange[0].split(",")[1]))
console.log('----------------------------------------')
console.log(parseInt(secondCampmateRange[0].split(",")[0]))
console.log(parseInt(secondCampmateRange[0].split(",")[1])) */

// max(firstCampmate(lowerValue) or secondCampmate(lowerValue)) <= (max(firstCampmate(higherValue) or secondCampmate(higherValue)))



for (let i = 0; i < inputs.length; i++) {
    //console.log(firstCampmateRange[i].split(",")[0])
    //console.log(secondCampmateRange[i].split(",")[0])
    if (Math.max(firstCampmateRange[i].split(",")[0], secondCampmateRange[i].split(",")[0]) <= Math.min(firstCampmateRange[i].split(",")[1], secondCampmateRange[i].split(",")[1])) {
        part2Total++
    }
}
console.log(part2Total)


//parseInt(firstCampmateRange[i].split(",")[1]) >= parseInt(secondCampmateRange[i].split(",")[0])
//906 IS TOO HIGH
//1000 Total