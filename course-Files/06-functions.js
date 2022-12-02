//NORMAL FUNCTION
function calulateTotal(subTotal, tax) {
    return subTotal + tax
}

//EXPRESSION FUNCTION
const calulateTotal2 = function (subTotal, tax) {
    return subTotal + tax
}

//ARROW FUNCTION
const calulateTotal3 = (subTotal, tax) => subTotal + tax

const order1 = calulateTotal(500, 50)
const order2 = calulateTotal(151, 15)
const order3 = calulateTotal(750, 75)

console.log(order1)
console.log(order2)
console.log(order3)

