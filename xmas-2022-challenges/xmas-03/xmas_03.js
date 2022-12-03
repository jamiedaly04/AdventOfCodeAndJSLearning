// PART 1
//---------------------------------
/*
import { inputs } from './inputs.js'

let firstHalf = []
let secondHalf = []
let commonChars = []
let totalValue = 0 

let test = [
'vJrwpWtwJgWrhcsFMMfFFhFp',
'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
'PmmdzqPrVvPwwTWBwg',
'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
'ttgJtRGJQctTZtZT',
'CrZsJsPPZsGzwwsLwLmpwMDw'
]

function match(s1, s2) {
    let value
    for (let i in s1) {
        if (s2.includes(s1[i])) {
            value = s1[i]
        }
    }
    return value;
}

for (let i = 0; i < inputs.length; i++) {
    firstHalf.push(inputs[i].slice(inputs[0], (inputs[i].length / 2)))
    secondHalf.push(inputs[i].slice(inputs[i].length / 2, inputs[i].length))

    commonChars[i] = match(firstHalf[i], secondHalf[i])

    if (commonChars[i] == commonChars[i].toUpperCase()) {
        totalValue += commonChars[i].charCodeAt(0) - 38
    }
    if (commonChars[i] == commonChars[i].toLowerCase()) {
        totalValue += commonChars[i].charCodeAt(0) - 96
    } 
}

console.log(totalValue) */

// PART 2
//---------------------------------
import { inputs } from './inputs.js'

let commonChars = []
let totalValue = 0

let test = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
]
function match(s1, s2, s3) {
    let value
    for (let i in s1) {
        if (s2.includes(s1[i]) && s3.includes(s1[i])) {
            value = s1[i]
        }
    }
    return value;
}

function calculateTotal(item, index, array) {
    if (item == item.toUpperCase()) {
        totalValue += item.charCodeAt(0) - 38
    }
    if (item == item.toLowerCase()) {
        totalValue += item.charCodeAt(0) - 96
    }

    //console.log(index)

     if (index + 1 == array.length) {
        console.log(totalValue)
    } 
}

for (let i = 0; i < inputs.length; i += 3) {
    commonChars.push(match(inputs[i], inputs[i + 1], inputs[i + 2]))
}

commonChars.forEach(calculateTotal)