// PART 1
//---------------------------------



/*
import { inputs } from './inputs.js'

let draw = 3
let win = 6
let total = 0
let rock = 1
let paper = 2
let scissors = 3

for (let i = 0; i < inputs.length; i++) {
    //console.log(inputs[i].substring(0, 1))
    //console.log(inputs[i].substring(2, 3))

    switch (inputs[i].substring(0, 1)) {
        case 'A':
            if (inputs[i].substring(2, 3) === 'Y') {
                total = total + win + paper
            } else if (inputs[i].substring(2, 3) === 'X') {
                total = total + draw + rock
            } else if (inputs[i].substring(2, 3) === 'Z') {
                total = total + scissors
            }
            break;
        case 'B':
            if (inputs[i].substring(2, 3) === 'Z') {
                total = total + win + scissors
            } else if (inputs[i].substring(2, 3) === 'Y') {
                total = total + draw + paper
            } else if (inputs[i].substring(2, 3) === 'X') {
                total = total + rock
            }
            break;
        case 'C':
            if (inputs[i].substring(2, 3) === 'X') {
                total = total + win + rock
            } else if (inputs[i].substring(2, 3) === 'Z') {
                total = total + draw + scissors
            } else if (inputs[i].substring(2, 3) === 'Y') {
                total = total + paper
            }
            break;
    }
}
console.log('Total = ' + total)
*/

// PART 2
//---------------------------------

import { inputs } from './inputs.js'

let draw = 3
let win = 6
let total = 0
let rock = 1
let paper = 2
let scissors = 3

for (let i = 0; i < inputs.length; i++) {

    switch (inputs[i].substring(0, 1)) {
        case 'A':
            if (inputs[i].substring(2, 3) === 'X') {
                //lose
                total = total + scissors
            } else if (inputs[i].substring(2, 3) === 'Y') {
                //draw
                total = total + rock + draw
                
            } else if (inputs[i].substring(2, 3) === 'Z') {
                //win
                total = total + paper + win
            }
            break;
        case 'B':
            if (inputs[i].substring(2, 3) === 'X') {
                //lose
                total = total + rock

            } else if (inputs[i].substring(2, 3) === 'Y') {
                //draw
                total = total + paper + draw

            } else if (inputs[i].substring(2, 3) === 'Z') {
                //win
                total = total + scissors + win
            }
            break;
        case 'C':
            if (inputs[i].substring(2, 3) === 'X') {
                //lose
                total = total + paper

            } else if (inputs[i].substring(2, 3) === 'Y') {
                //draw
                total = total + scissors + draw

            } else if (inputs[i].substring(2, 3) === 'Z') {
                //win
                total = total + rock + win
            }
            break;
    }
}
console.log('Total = ' + total)
/*
A = Rock 
B = Paper 
C = Scissors

X = Rock
Y = Paper
Z = Scissors
*/