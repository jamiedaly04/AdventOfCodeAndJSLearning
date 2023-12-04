// Part 1

import { inputs } from './inputs.js'

/* let inputs = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
    'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
    'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
    'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
    'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
] */

/* let maxBlue = 14;
let maxRed = 12;
let maxGreen = 13;

let mappedArrayInputs = inputs.map((input) => {
    let gameId = (input.substring(input.indexOf("Game") + 4, input.lastIndexOf(":"))).trim();

    let bgrString = input.substring(input.lastIndexOf(":") + 1).trim();
    //console.log(bgrString);
    let bgrArray = bgrString.split(';');
    console.log(bgrArray);

    let bluePass = true;
    let redPass = true;
    let greenPass = true;


    bgrArray.forEach(game => {
        let currentBlue = 0, currentRed = 0, currentGreen = 0;

        game.split(',').forEach(element => {

            console.log('element: ' + element);

            if (element.includes('blue')) {
                currentBlue += parseInt(element);
            } else if (element.includes('red')) {
                currentRed += parseInt(element);
            } else if (element.includes('green')) {
                currentGreen += parseInt(element);
            }
        })

        console.log('currentBlue: ' + currentBlue);
        console.log('currentRed: ' + currentRed);
        console.log('currentGreen: ' + currentGreen);

        if (currentBlue > maxBlue) {
            bluePass = false;
        }
        if (currentRed > maxRed) {
            redPass = false;
        }
        if (currentGreen > maxGreen) {
             greenPass = false;
        }

        console.log('bluePass: ' + bluePass);
        console.log('redPass: ' + redPass);
        console.log('greenPass: ' + greenPass);
        console.log('----------------');
    });
    return {
        gameId: parseInt(gameId),
        blue: bluePass,
        red: redPass,
        green: greenPass
    }
})

console.log(mappedArrayInputs)


let possibleGames = mappedArrayInputs.map((input) => {
    if (input.blue === true && input.red === true && input.green === true) {
        return input.gameId
    }
})

console.log(possibleGames);

let totalScore = 0

possibleGames.forEach(game => {
    if (game !== undefined) {
        totalScore += game
    }
})

console.log(totalScore); */

////////////////////////////
// Part 2

let mappedArrayInputs = inputs.map((input) => {
    let gameId = (input.substring(input.indexOf("Game") + 4, input.lastIndexOf(":"))).trim();

    let bgrString = input.substring(input.lastIndexOf(":") + 1).trim();

    let bgrArray = bgrString.split(';');
    console.log(bgrArray);

    let currentMinBlue = 0, currentMinRed = 0, currentMinGreen = 0;

    bgrArray.forEach(game => {

        game.split(',').forEach(element => {

            console.log('element: ' + element);

            if (element.includes('blue')) {
                if (parseInt(element) > currentMinBlue) {
                    currentMinBlue = parseInt(element);
                }
            } else if (element.includes('red')) {
                if (parseInt(element) > currentMinRed) {
                    currentMinRed = parseInt(element);
                }
            } else if (element.includes('green')) {
                if (parseInt(element) > currentMinGreen) {
                    currentMinGreen = parseInt(element);
                }
            }
        });

        console.log('currentMinBlue: ' + currentMinBlue);
        console.log('currentMinRed: ' + currentMinRed);
        console.log('currentMinGreen: ' + currentMinGreen);
        console.log('---------------')

    });

    return {
        gameId: parseInt(gameId),
        minBlue: currentMinBlue,
        minRed: currentMinRed,
        minGreen: currentMinGreen
    }
})

console.log(mappedArrayInputs)

let powerScore = mappedArrayInputs.map((input) => {
    return input.minBlue * input.minRed * input.minGreen
})

console.log(powerScore)

let finalScore = 0
powerScore.forEach((score) => {
    return finalScore += score
})

console.log(finalScore)