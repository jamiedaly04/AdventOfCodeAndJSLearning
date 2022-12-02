/* PART 1
---------------------------------
 import { inputs } from './inputs.js'

let change = 0;
for (let i = 0; i <= inputs.length - 1; i++) {
    if (inputs[i] > inputs[i - 1]) change += 1;
}
console.log(change); 
---------------------------------
*/

/* PART 2
---------------------------------
import { inputs } from './inputs.js'

let change = 0;
let firstSum = 0;
let secondSum = 0;

for (let i = 0; i <= inputs.length - 4; i++) {
    firstSum = inputs[i] + inputs[i + 1] + inputs[i + 2]
    secondSum = inputs[i + 1] + inputs[i + 2] + inputs[i + 3]

    if (firstSum < secondSum) change += 1;

    firstSum = 0
    secondSum = 0
}

console.log(change)
---------------------------------
*/