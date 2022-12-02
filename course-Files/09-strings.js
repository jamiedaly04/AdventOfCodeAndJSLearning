const fullName = function({firstName, lastName}) {
    const fullName = `${firstName} ${lastName}`
    return fullName.toLocaleUpperCase()
}
    
console.log(fullName({firstName: 'Jamie', lastName: 'Daly'}))
console.log(fullName({lastName: 'Daly', firstName: 'Jamie'}))
