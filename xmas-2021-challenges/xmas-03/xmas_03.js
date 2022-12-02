// PART 2
// ---------------------------------
/*
import { inputs } from './inputs.js'

let gammaRate = []
let epsilonRate = []
let powerConsumption
let zeros = 0
let ones = 0
let bit = 0

while (bit <= 11) {
    for (let x = 0; x < inputs.length; x++) {
        let chars = inputs[x]

        if (chars[bit] === '0') {
            zeros++
        } else if (chars[bit] === '1') {
            ones++
        } else {
            console.log('Broken')
        }
    }
    console.log(`Bit: ${bit + 1} Zeros: ${zeros}`)
    console.log(`Bit: ${bit + 1} Ones: ${ones}`)
    console.log(`-------------------------------`)

    if (zeros > ones) {
        gammaRate[bit] = 0
        epsilonRate[bit] = 1
    } else if (ones > zeros) {
        gammaRate[bit] = 1
        epsilonRate[bit] = 0
    } else {
        console.log('Error in logic')
    }

    bit++
    zeros = 0
    ones = 0
}

console.log(`Binary Rates:`)
console.log(`Gamma Rate: ${gammaRate}`)
console.log(`Epislon Rate: ${epsilonRate}`)

gammaRate = gammaRate.join('')
epsilonRate = epsilonRate.join('')
console.log(`Gamma Rate: ${gammaRate}`)
console.log(`Epislon Rate: ${epsilonRate}`)
console.log(`-------------------------------`)
gammaRate = parseInt(gammaRate, 2)
epsilonRate = parseInt(epsilonRate, 2)

powerConsumption = gammaRate * epsilonRate
console.log(`Total Values:`)
console.log(`Gamma Rate = ${gammaRate}`)
console.log(`Epsilon Rate = ${epsilonRate}`)
console.log(`Power Consumption = ${powerConsumption}`)
*/

// PART 2
// ---------------------------------
import { inputs } from './inputs.js'

let lifeSupportRating = 0
let oxygenGeneratorRating = 0
let c02ScrubberRating = 0

lifeSupportRating = oxygenGeneratorRating * c02ScrubberRating

for (let x = 0; x < inputs.length; x++) {
    let chars = inputs[x]

    if (chars[0] === '0') {
        
    } else if (chars[0] === '1') {
        
    } else {
        console.log('Broken')
    }
}

/* if (zeros > ones) {
    gammaRate[bit] = 0
    epsilonRate[bit] = 1
} else if (ones > zeros) {
    gammaRate[bit] = 1
    epsilonRate[bit] = 0
} else {
    console.log('Error in logic')
} */
