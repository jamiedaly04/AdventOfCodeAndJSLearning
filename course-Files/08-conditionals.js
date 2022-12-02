const people = [{
    name: 'Jamie',
    age: 20,
    status: 'resident'
},
{
    name: 'Johnathon',
    age: 18,
    status: 'tourist'
}]

let person1Age = people[0].age
let person1Status = people[0].status
let personAge = people[1].age
let personStatus = people[1].status

if (personAge >= 18 && personStatus === 'resident') {
    console.log('You can cast a vote.')
} else if (personAge < 18 || personStatus === 'tourist') {
    console.log('You cannot cast a vote! You are under 18 or are a tourist.')
} else {
    console.log('You cannot cast a vote!')
}