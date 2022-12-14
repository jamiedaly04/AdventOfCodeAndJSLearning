const names = ['test', 'test1', 'test2', 'test3']
const lastname = 'gammon';
let newArray = [];

for (let i = 0; i < names.length; i++) {
    //console.log(names[i])
    newArray.push(`${names[i]} ${lastname}`)
    console.log(newArray[i])
}