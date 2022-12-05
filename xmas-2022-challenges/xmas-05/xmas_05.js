// PART 1
//---------------------------------
/*
import { inputs } from './inputs.js'

let stackArray = [
    ['N', 'C', 'R', 'T', 'M', 'Z', 'P'],
    ['D', 'N', 'T', 'S', 'B', 'Z'],
    ['M', 'H', 'Q', 'R', 'F', 'C', 'T', 'G'],
    ['G', 'R', 'Z'],
    ['Z', 'N', 'R', 'H'],
    ['F', 'H', 'S', 'W', 'P', 'Z', 'L', 'D'],
    ['W', 'D', 'Z', 'R', 'C', 'G', 'M'],
    ['S', 'J', 'F', 'L', 'H', 'W', 'Z', 'Q'],
    ['S', 'Q', 'P', 'W', 'N']
]

let testStackArray = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
]

let test = [
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
]

let moveAmount = []
let stackFrom = []
let stackTo = []
let regex = /\d+/g;
let matches = []
let crate

function boxMover(moveAmount, stackFrom, stackTo) {
    do {
        crate = stackArray[stackFrom - 1].pop()
        stackArray[stackTo - 1].push(crate)

        moveAmount--
    } while (moveAmount > 0)
}

for (let i = 0; i < inputs.length; i++) {
    matches.push(inputs[i].match(regex))
    moveAmount.push(matches[i][0])
    stackFrom.push(matches[i][1])
    stackTo.push(matches[i][2])
}

for (let i = 0; i < inputs.length; i++) {
    boxMover(moveAmount[i], stackFrom[i], stackTo[i])
}

let answer = ''
for (let i = 0; i < stackArray.length; i++) {
    let lastChar = stackArray[i].pop()
    answer += lastChar
}

console.log(stackArray)
console.log(answer)
*/

//PART 2
//---------------------------------

import { inputs } from './inputs.js'

let stackArray = [
    ['N', 'C', 'R', 'T', 'M', 'Z', 'P'],
    ['D', 'N', 'T', 'S', 'B', 'Z'],
    ['M', 'H', 'Q', 'R', 'F', 'C', 'T', 'G'],
    ['G', 'R', 'Z'],
    ['Z', 'N', 'R', 'H'],
    ['F', 'H', 'S', 'W', 'P', 'Z', 'L', 'D'],
    ['W', 'D', 'Z', 'R', 'C', 'G', 'M'],
    ['S', 'J', 'F', 'L', 'H', 'W', 'Z', 'Q'],
    ['S', 'Q', 'P', 'W', 'N']
]

let testStackArray = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
]

let test = [
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
]

let moveAmount = []
let stackFrom = []
let stackTo = []
let regex = /\d+/g;
let matches = []
let crate
let crates = []

//Logic block
function boxMover(moveAmount, stackFrom, stackTo) {
    if (moveAmount == 1) {
        do {
            crate = stackArray[stackFrom - 1].pop()
            stackArray[stackTo - 1].push(crate)

            moveAmount--
        } while (moveAmount > 0)
    } else if (moveAmount > 1) {
        for (let i = 0; i < moveAmount; i++) {
            crates.push(stackArray[stackFrom - 1].pop())
        }
        crates.reverse()
        crates.forEach(crate => {
            stackArray[stackTo - 1].push(crate)
        });


        crates = []
    }
}

//Get moveAmount, stackFrom & stackTo in a nicer format
for (let i = 0; i < inputs.length; i++) {
    matches.push(inputs[i].match(regex))
    moveAmount.push(matches[i][0])
    stackFrom.push(matches[i][1])
    stackTo.push(matches[i][2])
}

//Run function for each line
for (let i = 0; i < inputs.length; i++) {
    boxMover(moveAmount[i], stackFrom[i], stackTo[i])
}

//Answer formatter
let answer = ''
for (let i = 0; i < stackArray.length; i++) {
    let lastChar = stackArray[i].pop()
    answer += lastChar
}

console.log(answer)
console.log(stackArray)