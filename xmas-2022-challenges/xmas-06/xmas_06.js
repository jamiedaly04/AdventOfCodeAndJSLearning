// PART 1
//---------------------------------
/* import { input } from './inputs.js'

let testText = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
let charStore = ''
let char1 = ''
let char2 = ''
let char3 = ''
let char4 = ''
let signalLocated

function charComparer(str) {
    return /(.).*\1/.test(str);
}

for (let i = 0; i < input.length; i++) {
    charStore += input[i]
    if (i > 2) {
        //In here we just need to compare the previous 4 characters
        char1 = charStore[i - 3]
        char2 = charStore[i - 2]
        char3 = charStore[i - 1]
        char4 = charStore[i]
        signalLocated = charComparer(char1 + char2 + char3 + char4)

        if (signalLocated === false) {
        console.log(char1 + char2 + char3 + char4 + ' i = ' + (i+1))
        break
        }
    }
}

console.log(charStore) */

// PART 2
//---------------------------------

import { input } from './inputs.js'

let testText = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
let charStore = ''
let signalLocated

function charComparer(str) {
    return /(.).*\1/.test(str);
}

for (let i = 0; i < input.length; i++) {
    charStore += input[i]
    if (i > 12) {
        //In here we just need to compare the previous 4 characters
        signalLocated = charComparer(charStore[i - 13] + charStore[i - 12] + charStore[i - 11] + charStore[i - 10] + charStore[i - 9] + charStore[i - 8] + charStore[i - 7] + charStore[i - 6] + charStore[i - 5] + charStore[i - 4] + charStore[i - 3] + charStore[i - 2] + charStore[i - 1] + charStore[i])

        if (signalLocated === false) {
            console.log( ' i = ' + (i + 1))
            break
        }
    }
}

console.log(charStore)