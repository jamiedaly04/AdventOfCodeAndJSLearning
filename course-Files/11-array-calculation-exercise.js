// Functions, return, if, arrays, for loops


const gas = [20, 40, 100];
const food = [10, 25, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 131, 412, 41])

console.log({
    gasTotal: gasTotal,
    foodTotal: foodTotal,
    randomTotal: randomTotal
})