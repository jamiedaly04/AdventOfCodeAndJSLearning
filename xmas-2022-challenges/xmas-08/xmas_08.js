// PART 1
//---------------------------------
/*
import { input } from "./inputs.js";

let input = [
    '30373',
    '25512',
    '65332',
    '33549',
    '35390'
]

let hiddenTrees = 0;
let visibleTrees = 0;

function isNorthHidden(currentValue, currentLine, currentPosition) {
    let isHidden = false

    do {
        if (currentValue > input[currentLine - 1][currentPosition]) {
            currentLine--
        } else if (currentValue <= input[currentLine - 1][currentPosition]) {
            return isHidden = true
        }
    } while (currentLine > 0)

    return isHidden
}

function isSouthHidden(currentValue, currentLine, currentPosition, maxColumnLength) {
    let isHidden = false

    do {
        if (currentValue > input[currentLine + 1][currentPosition]) {
            currentLine++
        } else if (currentValue <= input[currentLine + 1][currentPosition]) {
            return isHidden = true
        }
    } while (currentLine < maxColumnLength - 1)

    return isHidden
}

function isEastHidden(currentValue, currentLine, currentPosition, maxRowLength) {
    let isHidden = false

    do {
        if (currentValue > input[currentLine][currentPosition + 1]) {
            currentPosition++
        } else if (currentValue <= input[currentLine][currentPosition + 1]) {
            return isHidden = true
        }
    } while (currentPosition < maxRowLength - 1)

    return isHidden
}

function isWestHidden(currentValue, currentLine, currentPosition) {
    let isHidden = false

    do {
        if (currentValue > input[currentLine][currentPosition - 1]) {
            currentPosition--
        } else if (currentValue <= input[currentLine][currentPosition - 1]) {
            return isHidden = true
        }
    } while (currentPosition > 0)

    return isHidden
}

function treeComparer(currentValue, currentLine, currentPosition, maxColumnLength, maxRowLength) {
    console.log(`Current Value: ${currentValue}`)
    console.log(`Current Line: ${currentLine}`)
    console.log(`Current Position: ${currentPosition}`)
    console.log(`Max Column Length: ${maxColumnLength}`)
    console.log(`Max Row Length: ${maxRowLength}`)


    let isNorthHiddenBool = isNorthHidden(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition))
    let isSouthHiddenBool = isSouthHidden(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition), parseInt(maxColumnLength))
    let isEastHiddenBool = isEastHidden(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition), parseInt(maxRowLength))
    let isWestHiddenBool = isWestHidden(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition))

    console.log(`Is North Hidden: ${isNorthHiddenBool}`)
    console.log(`Is South Hidden: ${isSouthHiddenBool}`)
    console.log(`Is East Hidden: ${isEastHiddenBool}`)
    console.log(`Is West Hidden: ${isWestHiddenBool}`)
    console.log(`-------------------------------------`)
    if (isNorthHiddenBool && isSouthHiddenBool && isEastHiddenBool && isWestHiddenBool) {
        hiddenTrees++
    } else {
        visibleTrees++
    }
}

//Inner Values:
for (let i = 1; i < input.length - 1; i++) {
    for (let x = 1; x < input[i].length - 1; x++) {
        treeComparer(input[i][x], i, x, input.length, input[i].length)
    }
}

console.log(`Inner Trees Total:`)
console.log(`Hidden Trees: ${hiddenTrees}`)
console.log(`Visible Trees: ${visibleTrees}`)
console.log(`-------------------------------------`)
console.log(`Trees Total (Inner combined with outer trees):`)
visibleTrees = visibleTrees + ((input.length - 1) * 2) + ((input[0].length - 1) * 2)
console.log(`Hidden Trees: ${hiddenTrees}`)
console.log(`Visible Trees: ${visibleTrees}`)
*/

// PART 2
//---------------------------------
import { input } from "./inputs.js";

let testData = [
    '30373',
    '25512',
    '65332',
    '33549',
    '35390'
]

function northernTreeCounter(currentValue, currentLine, currentPosition) {
    let counter = 0

    do {
        if (currentValue > input[currentLine - 1][currentPosition]) {
            counter++
            currentLine--
        } else if (currentValue <= input[currentLine - 1][currentPosition]) {
            counter++
            return counter
        }
    } while (currentLine > 0)

    return counter
}

function southernTreeCounter(currentValue, currentLine, currentPosition, maxColumnLength) {
    let counter = 0

    do {
        if (currentValue > input[currentLine + 1][currentPosition]) {
            counter++
            currentLine++
        } else if (currentValue <= input[currentLine + 1][currentPosition]) {
            counter++
            return counter
        }
    } while (currentLine < maxColumnLength - 1)

    return counter
}

function easternTreeCounter(currentValue, currentLine, currentPosition, maxRowLength) {
    let counter = 0

    do {
        if (currentValue > input[currentLine][currentPosition + 1]) {
            counter++
            currentPosition++
        } else if (currentValue <= input[currentLine][currentPosition + 1]) {
            counter++
            return counter
        }
    } while (currentPosition < maxRowLength - 1)

    return counter
}

function westernTreeCounter(currentValue, currentLine, currentPosition) {
    let counter = 0

    do {
        if (currentValue > input[currentLine][currentPosition - 1]) {
            counter++
            currentPosition--
        } else if (currentValue <= input[currentLine][currentPosition - 1]) {
            counter++
            return counter
        }
    } while (currentPosition > 0)

    return counter
}

let highestScenicScore = 0
let currentScore = 0

function treeComparer(currentValue, currentLine, currentPosition, maxColumnLength, maxRowLength) {
    console.log(`Current Value: ${currentValue}`)
    console.log(`Current Line: ${currentLine}`)
    console.log(`Current Position: ${currentPosition}`)
    console.log(`Max Column Length: ${maxColumnLength}`)
    console.log(`Max Row Length: ${maxRowLength}`)


    let northernTreeCount = northernTreeCounter(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition))
    let southernTreeCount = southernTreeCounter(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition), parseInt(maxColumnLength))
    let easternTreeCount = easternTreeCounter(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition), parseInt(maxRowLength))
    let westernTreeCount = westernTreeCounter(parseInt(currentValue), parseInt(currentLine), parseInt(currentPosition))

    console.log(`Northern Tree View Counter: ${northernTreeCount}`)
    console.log(`Southern Tree View Counter: ${southernTreeCount}`)
    console.log(`Eastern Tree View Counter: ${easternTreeCount}`)
    console.log(`Western Tree View Counter: ${westernTreeCount}`)
    console.log(`-------------------------------------`)

    currentScore = (northernTreeCount * southernTreeCount * easternTreeCount * westernTreeCount)

    if (currentScore > highestScenicScore) {
        highestScenicScore = currentScore
    }
    console.log(highestScenicScore)
}

//Inner Values:
for (let i = 1; i < input.length - 1; i++) {
    for (let x = 1; x < input[i].length - 1; x++) {
        treeComparer(input[i][x], i, x, input.length, input[i].length)
    }
}

console.log(`Highest Scenic Tree Score:`)
