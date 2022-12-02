/* const person = {
    name: 'Jamie',
    surname: 'Daly',
    age: 10,
    ageInDogYears(age) {
        return age * 7
    },
    gender: 'Male'
}

console.log(person.ageInDogYears(person.age))
console.log(person) */

const car = {
    make: 'Audi',
    model: 'Q3',
    year: 2023,
    colours: ['nano grey', 'chronos grey'],
    hybrid: false,
    drive() {
        console.log('Now Driving...')
    },
    stop() {
        console.log('Now Parked...')
    },
}

console.log(car.make)
console.log(car.colours[0])
car.drive()
car.stop()