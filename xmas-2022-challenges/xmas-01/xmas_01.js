// PART 1
//---------------------------------

import { inputs } from './inputs.js'

let highestCalorieElf = 0;
let currentElf = 0;

for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] !== 0) {
        currentElf =+ testArray[i]

    } else {
        if (highestCalorieElf < currentElf) {
            highestCalorieElf = currentElf
            currentElf = 0
            console.log(highestCalorieElf)
        }
    }
}



/*
let total = 0
let highestNumber = 0
let highNumberArray = []
inputs.forEach( newNumber => {
    if (newNumber !== 0) {
        total = total + newNumber
    } else {
        highNumberArray.push(total)
        if (total > highestNumber) {
            highestNumber = total
        } else {
        }
        total = 0
    }
})
console.log(highNumberArray.sort())
console.log(highNumberArray[highNumberArray.length - 1])
console.log(highNumberArray[highNumberArray.length - 1] + highNumberArray[highNumberArray.length - 2] + highNumberArray[highNumberArray.length - 3])

*/