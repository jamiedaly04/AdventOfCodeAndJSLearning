// PART 1 & 2
//---------------------------------

import { inputs } from './inputs.js'

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
