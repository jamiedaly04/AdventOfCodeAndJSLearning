// PART 1 
// ---------------------------------
/*
import { inputs } from './inputs.js'

let forward = 0
let up = 0
let down = 0
let depth = 0

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].includes('forward')) {
        forward += parseInt((inputs[i]).replace(/[^\d.]/g, ''))
    } else if (inputs[i].includes('up')) {
        up += parseInt((inputs[i]).replace(/[^\d.]/g, ''))
    } else if (inputs[i].includes('down')) {
        down += parseInt((inputs[i]).replace(/[^\d.]/g, ''))
    } else {
        console.log('broken')
    }
}

console.log(`Forward: ${forward}`)
console.log(`Up: ${up}`)
console.log(`Down: ${down}`)
console.log(`--------------`)

depth = Math.abs(up - down) 
const total = forward * depth
console.log(`Depth: ${depth}`)
console.log(`Answer: ${total}`)
*/

// PART 2
// ---------------------------------
/*
import { inputs } from './inputs.js'

let aim = 0
let forward = 0
let depth = 0

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].includes('forward')) {
        forward += parseInt((inputs[i]).replace(/[^\d.]/g, ''))
        depth += (aim * parseInt((inputs[i]).replace(/[^\d.]/g, '')))
    } else if (inputs[i].includes('up')) {
        aim -= parseInt((inputs[i]).replace(/[^\d.]/g, ''))
    } else if (inputs[i].includes('down')) {
        aim += parseInt((inputs[i]).replace(/[^\d.]/g, ''))
    } else {
        console.log('broken')
    }
}

console.log(`Forward: ${forward}`)
depth = Math.abs(depth)
const total = forward * depth

console.log(`Depth: ${depth}`)
console.log(`Answer: ${total}`)
*/
